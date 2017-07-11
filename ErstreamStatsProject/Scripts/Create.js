var path = window.location.pathname;
var page = path.split("/").pop();
var actFilters = [];
var offset = new Date().getTimezoneOffset();


//DateRange Global Date Format 
if (page == 'Index' || page == "") {
    var startDate = new Date();
    var endDate = new Date();
    var eDate, sDate;

    Highcharts.setOptions({
        global: {
            timezoneOffset: offset
        }
    });

    startDate.setHours((endDate.getHours() - 4));
    endDate.setHours((endDate.getHours() - 2));

    endDate.setMinutes(00);
    startDate.setMinutes(startDate.getMinutes() + 15);
    sDate = DateConvertStringFormat(startDate);
    eDate = DateConvertStringFormat(endDate);
}
else {

    var filtername = $.cookie('TimeRangeValue');
    $('.caption-helper').text(filtername);

    if ($.cookie('TimeRangeStart') != null && $.cookie('TimeRangeEnd') != null) {
        var startDate = new Date($.cookie('TimeRangeStart'));
        var endDate = new Date($.cookie('TimeRangeEnd'));
    }
    else {
        var startDate = new Date();
        var endDate = new Date();

        var eDate, sDate;
    }


    sDate = DateConvertStringFormat(startDate);
    eDate = DateConvertStringFormat(endDate);

}

function GetShortField(field) {
    if (field === "StreamGroup")
        return "strg";
    if (field === "Stream")
        return "str";
    if (field === "UserAgent")
        return "us";
    if (field === "Isp")
        return "isp";

    if (field === "Country")
        return "ctr";

    if (field === "BitrateGroup")
        return "btrg";

    if (field === "Bitrate")
        return "btr";

    return null;
}

function createConUser(div, data) {
    var options = {
        chart: {
            type: 'area',
            zoomType: 'x',
            renderTo: div,
            events: {
                selection: function (event) {
                    //console.log(event)
                }
            }
        },

        title: {
            text: null
        },
        legend: {
            enabled: false
        },
        exporting: {
            buttons: {
                contextButton: {
                    enabled: false
                }
            }
        }
        ,
        xAxis: {
            type: 'datetime',
            labels: {
                rotation: 0
            },
            dateTimeLabelFormats: {
                second: '%H:%M:%S'
            }
        },
        yAxis: {
            title: "",
            min: 0
        },
        series: [],
        tooltip: {
            dateTimeLabelFormats: {
                second: '%H:%M:%S',
            },
            pointFormat: '<b>{point.y} User</b><br/>'

        },
        plotOptions: {
            area: {
                pointStart: 1940,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        credits: {
            enabled: false
        }
    };

    var series = {
        data: [],
        name: 'Concurrent User'
    };

    $.each(data, function (itemNo, item) {
        series.data.push([Date.parse(item.pd), item.cu]);
    });

    options.series.push(series);
    var chart = new Highcharts.Chart(options);
}

function createTraffic(div, data) {
    var options = {
        chart: {
            type: 'area',
            zoomType: 'x',
            renderTo: div,

        },
        title: {
            text: null
        },
        legend: { enabled: false },
        exporting: {
            buttons: {
                contextButton: {
                    enabled: false
                }
            }
        },
        xAxis: {
            type: 'datetime',
            labels: {
                rotation: 0
            },
            dateTimeLabelFormats: {
                second: '%H:%M:%S',
            }
        },
        yAxis: {
            title: "",
            min: 0
        },
        series: [],
        tooltip: {
            dateTimeLabelFormats: {
                second: '%H:%M:%S',
            },
            pointFormat: '<b>{point.y:.3f} Gbps</b><br/>'
        },
        plotOptions: {
            area: {
                pointStart: 1940,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },

        credits: {
            enabled: false
        }
    };

    var series = {
        data: [],
        name: 'Traffic',
        color: '#f36a5a'
    };

    $.each(data, function (itemNo, item) {
        series.data.push([Date.parse(item.pd), item.tv]);
    });

    options.series.push(series);
    var chart = new Highcharts.Chart(options);
}

function createPieChart(div, data) {
    var options = {
        chart: {
            renderTo: div,
            type: 'pie'
            //defaultSeriesType: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            //categories: [],
        },
        yAxis: {
            min: 0
        },
        series: [],
        tooltip: {
            //pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y.toFixed(2)}</b><br/>',
            formatter: function () {
                return '<b>' + this.point.name + '</b>: ' + this.point.y.toFixed(2) + " TB - " + Highcharts.numberFormat(this.percentage, 2) + '%';
            }
        },

        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                }
            }
        },
        credits: {
            enabled: false
        }
    };

    var series = {
        data: []
    };

    $.each(data, function (itemNo, item) {
        console.log(data);
        var strKey;

        //if (div === "pieChartBitrate") {
        //    if (item.m_Item1 === "Others")
        //        strKey = item.m_Item1;
        //    else
        //        strKey = parseInt((parseInt(item.m_Item1) / 1000)) + " Kbps";
        //}

        //else if (div === "pieChartBitrateGroup")
        //    strKey = item.m_Item1 + "p";

        //else
        strKey = item.m_Item1;


        series.data.push({ name: strKey, y: parseFloat(item.m_Item4) });
    });

    options.series.push(series);
    var chart = new Highcharts.Chart(options);
}

function FilterOptionFill(data) {
    var opt = null;
    $.each(data.str, function (i) {
        opt = $('<option>'); opt.append(data.str[i]); $('#drpStreamFilter').append(opt);
    });
    $.each(data.btrg, function (i) {
        opt = $('<option>'); opt.append(data.btrg[i]); $('#drpStreamTypeFilter').append(opt);
    });
    $.each(data.lfn, function (i) {
        opt = $('<option>'); opt.append(data.lfn[i]); $('#drpLogFileFilter').append(opt);
    });
    $.each(data.ctr, function (i) {
        opt = $('<option>'); opt.append(data.ctr[i]); $('#drpCountryFilter').append(opt);
    });
    $.each(data.us, function (i) {
        opt = $('<option>'); opt.append(data.us[i]); $('#drpUseragentFilter').append(opt);
    });
    $.each(data.btrg, function (i) {
        opt = $('<option>'); opt.append(data.btrg[i]); $('#drpBitrateGroupFilter').append(opt);
    });
    $.each(data.strg, function (i) {
        opt = $('<option>'); opt.append(data.strg[i]); $('#drpStreamGroupFilter').append(opt);
    }); $.each(data.devg, function (i) {
        opt = $('<option>'); opt.append(data.devg[i]); $('#drpDeviceGroupFilter').append(opt);
    });
}

function TBToReadable(val) {
    var types = ["TB", "GB", "MB"];

    for (var i = 0; i < 3; i++) {

        if (val * Math.pow(1024, i) >= 1)
            return (val * Math.pow(1024, i)).toFixed(3) + " " + types[i];

        if (i === 2)
            return (val * Math.pow(1024, 2)).toFixed(3) + " MB";
    }
}

function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
};

function initTable(div) {
    var table = $('#' + div + '');
    var oTable = table.dataTable({
        "language": {
            "processing": "<img src='Content/metronic_v4.7.5/assets/global/img/ajax-loading.gif'> Loading...",
            "aria": {
                "sortAscending": ": activate to sort column ascending",
                "sortDescending": ": activate to sort column descending"
            },
            "emptyTable": "No data available in table",
            "info": "Showing _START_ to _END_ of _TOTAL_ entries",
            "infoEmpty": "No entries found",
            "infoFiltered": "(filtered1 from _MAX_ total entries)",
            "lengthMenu": "_MENU_ entries",
            "search": "Search:",
            "zeroRecords": "No matching records found"
        },
        buttons: [
            { extend: 'print', className: 'btn dark btn-outline' },
            { extend: 'pdf', className: 'btn green btn-outline' },
            { extend: 'csv', className: 'btn purple btn-outline ' }
        ],
        responsive: {
            details: {
                type: 'column',
                target: 'tr'
            }
        },
        columnDefs: [{
            className: 'control',
            orderable: false,
            targets: 0
        }],

        order: [1, 'asc'],
        "lengthMenu": [
            [5, 10, 15, 20, -1],
            [5, 10, 15, 20, "All"]
        ],
        "pageLength": 10,
        "order": [[2, "desc"]],
        "pagingType": 'numbers',
        "dom": "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>"
    });
}

function ToDayFormat(totalDays) {

    var day = 0;
    var hour = 0;
    var minute = 0;
    var second = 0;

    var firstSplit = parseFloat(totalDays).toFixed(16).split('.');

    if (firstSplit.length === 2) {
        day = parseInt(firstSplit[0]);
        hour = parseFloat("0." + firstSplit[1]) * 24;

        var secondSplit = hour.toFixed(16).split('.');

        if (secondSplit.length === 2) {
            hour = parseInt(secondSplit[0]);
            minute = parseFloat("0." + secondSplit[1]) * 60;

            var thirdSplit = minute.toFixed(16).split('.');
            if (thirdSplit.length === 2) {
                minute = parseInt(thirdSplit[0]);
                second = parseInt(parseFloat("0." + thirdSplit[1]) * 60);
            }
        }
    }

    return ((day * 24) + hour) + "h " + minute + "m " + second + "s";


    //return day + "d " + hour + "h " + minute + "m " + second + "s";
}

function CreateDataTable(div, data, column) {
    var dt = data;
    var table = $('<table class="table table-striped table-bordered table-hover dt-responsive" width="100%" id="' + div + '">');
    var tbody = $('<tbody>');
    var thead = $('<thead>');
    var tr = null;
    var td = null;
    var th = null;
    var thtr = $('<tr>');
    var thB = $('<td>');
    thtr.append(thB);
    $.each(column, function (item) {
        if (item < 2)
            th = $('<th class="all">');
        else if (item < 4)
            th = $('<th class="desktop">');
        else
            th = $('<th class="none">');
        th.append(column[item]);
        thtr.append(th);

    });
    thead.append(thtr);

    table.append(thead);


    $.each(dt.Data, function (k) {
        tr = $('<tr>');//tr oluştur
        var tdB = $('<td>');
        tr.append(tdB);
        $.each(this, function (i, item) {
            for (var j = 0 ; j <= 5; j++) {
                td = $('<td>');
                if (i == "TotalSentBytesInTB")
                    td.append(TBToReadable(item));
                else if (i == "TotalWatchingDurationInDay")
                    td.append(ToDayFormat(item));
                else
                    td.append(item);
            }
            tr.append(td);
        });

        tbody.append(tr);
        table.append(tbody);
    });

    if ($(".portlet-body").html() == "")
        $('.portlet-body').append(table);
    else {
        $(".portlet-body").html("");
        $('.portlet-body').append(table);
    }
}

function updateDataTable(grid, field, operator, value) {
    var newFilter = { field: field, operator: operator, value: value };
    if (actFilters == null) {
        actFilters = [newFilter];
    }
    else {
        var New = true;
        var ind = 0;
        for (ind = 0; ind < actFilters.length; ind++) {
            if (actFilters[ind].field == field) {
                New = false;
                break;
            }
        }
        if (New) {
            actFilters.push(newFilter);
        }
        else {
            actFilters[ind] = newFilter;
        }
    }
    console.log(actFilters);
    filtersConvertString(actFilters);
}

var glfilterVal = "";

function filtersConvertString(actFilters) {
    var fl = actFilters;
    var filterVal = "";
    $.each(fl, function (i) {
        if (filterVal == "")
            if (fl[i].field == "BitrateGroup" && fl[i].value != "All" && fl[i].value != 0)
                filterVal = fl[i].field + "~" + fl[i].operator + "~" + fl[i].value;
            else
                filterVal = fl[i].field + "~" + fl[i].operator + "~'" + fl[i].value + "'";

        else
            if (fl[i].field == "BitrateGroup")
                filterVal = filterVal + "~and~" + fl[i].field + "~" + fl[i].operator + "~" + fl[i].value;
            else
                filterVal = filterVal + "~and~" + fl[i].field + "~" + fl[i].operator + "~'" + fl[i].value + "'";
    });
    glfilterVal = filterVal;
    dataTableRequest(TableName, column, filterVal);
}

function DataTableFormData(filterVal) {
    if (glfilterVal == null)
        var filter = filterVal;
    else
        var filter = glfilterVal;
    return {
        sort: "",
        page: 1,
        pageSize: "150",
        group: "",
        aggregate: aggregate,
        filter: filter
    };
}

function dataTableRequest(TableName, column, filterVal) {
    var FormData = DataTableFormData(glfilterVal);
    var url = apiUrlCreate(TableName);
    $.ajax({
        url: url,
        type: 'POST',
        data: FormData,
        dataType: 'json',
        success: function (data) {
            CreateDataTable('dataTableCont', data, column);
        },
        complete: function () {
            initTable('dataTableCont');
        },
        error: function (err) {
            console.log(err);
        }
    });
}

function fifteenFloor(m) {
    if (m >= 00 && m <= 15)
        m = "00";
    else if (m > 15 && m <= 30)
        m = 15;
    else if (m > 30 && m <= 45)
        m = 30;
    else m = 45;
    return m;
}



function dateAddZero(n) {
    if (n < 10) {
        n = '0' + n;
    }
    return n;
}

function DateConvertStringFormat(date) {
    var d = date;
    var mon = dateAddZero(d.getMonth() + 1);
    var h = dateAddZero(d.getHours());
    var day = dateAddZero(d.getDate());
    var m = dateAddZero(d.getMinutes());
    var result = d.getFullYear() + '-' + mon + '-' + day + 'T' + h + ':' + m + ':00Z';
    return result;
}
function AddiditionalFilterConvert(f) {
    var result = 'scid="' + f + '"';
    return result;
}
function FormDataRange(aggfield) {
    var sd = sDate;
    var ed = eDate;

    var dr, ff, af,scid, ptc;
    var afilters = AddiditionalFilterConvert($.cookie("AdditionalFilters"));
    ptc = $.cookie('ptc');

    if (page == 'Index' || page == "") {

        if (aggfield == 'user' || aggfield == 'traffic') {
            if (aggfield == 'user') af = "twd";
            else if (aggfield == 'traffic') af = "tsb";

            ff = "";
            sDate = sd;
            eDate = ed;
            scid = "All";
            dr = "custom";

            return {
                startDateTime: sd,
                endDateTime: ed,
                dataRange: dr,
                additionalFilters: afilters,
                AggField: af,
                SubCompanyId: $.cookie('AdditionalFilters'),
                PublicTokenKey: ptc
            };
        }

        startDate.setHours((endDate.getHours() - 2));
        startDate.setMinutes(00);
        sd = DateConvertStringFormat(startDate);
        ed = DateConvertStringFormat(endDate);

        if (aggfield == 'topSeries')
            return {
                startDateTime: sd,
                endDateTime: ed,
                dataRange: dr,
                additionalFilters: afilters,
                AggField: "Stream",
                SubCompanyId: $.cookie('AdditionalFilters'),
                PublicTokenKey: ptc
            };

        if (aggfield == 'CompanyId')
            return {
                startDateTime: sd,
                endDateTime: ed,
                dataRange: dr,
                additionalFilters: afilters,
                AggField: aggfield
            };



    }
    else {
        if (aggfield == 'FilterFacets')
            return {
                startDateTime: sd,
                endDateTime: ed,
                dataRange: dr,
                facetFields: 'str;st;lfn;ctr;us;btrg;strg;devg',
                PublicTokenKey: ptc
            };
    }
}

function dateFormatZconvert(date, character) {
    date = date.slice(0, character);
    date = date + "Z";
    return date;
}

function dateQueryStringFormat(date) {
    if (date != null) {
        var newDate = date.replace(/:/gi, "%3A");
        return newDate;
    }
}

function QueryStringParameters(agg) {
    var afilters = AddiditionalFilterConvert($.cookie('AdditionalFilters'));

    if (page == 'Index' || page == "") {
        startDate.setHours((endDate.getHours() - 2));
        startDate.setMinutes(00);
        startTime = dateQueryStringFormat(DateConvertStringFormat(startDate));
        endTime = dateQueryStringFormat(DateConvertStringFormat(endDate));
    }
    else {
        startTime = dateQueryStringFormat(sDate);
        endTime = dateQueryStringFormat(eDate);
    }

    if (page == 'Index' || page == "") {
        return {
            startDateTime: startTime,
            endDateTime: endTime,
            dataRange: "custom",
            additionalFilters: afilters,
            AggField: agg,
            PublicTokenKey: $.cookie('ptc')
        }
    }
    else
        return {
            startDateTime: startTime,
            endDateTime: endTime,
            dataRange: "custom",
            additionalFilters: afilters,
            AggField: TableName,
            PublicTokenKey: $.cookie('ptc')
        };
}

function apiUrlCreate(agg) {
    var queryString = QueryStringParameters(agg);

    var url = 'http://api.serverstats.erstream.com/api/values/KendoGridSource?startDateTime=' + queryString.startDateTime + '&endDateTime=' + queryString.endDateTime
        + '&dataRange=' + queryString.dataRange + '&additionalFilters=' + queryString.additionalFilters
        + '&AggField=' + queryString.AggField + '&PublicTokenKey=' + queryString.PublicTokenKey + '';
    return url;
}

function GetFilterFacets() {
    var formData = FormDataRange('FilterFacets');
    $.ajax({
        url: 'http://api.serverstats.erstream.com/api/values/GetFilterFacets',
        type: 'POST',
        data: formData,
        dataType: 'json',
        success: function (data) {
            FilterOptionFill(data);
        },
        error: function (err) {
            console.log(err);
        }
    });
}

$('#dashboard-report-range').on('apply.daterangepicker', function (ev, picker) {
    sDate = picker.startDate.format("YYYY-MM-DDTHH:mm:ssZ");
    eDate = picker.endDate.format("YYYY-MM-DDTHH:mm:ssZ");

    var value = picker.chosenLabel;
    $.cookie('TimeRangeValue', value);
    $.cookie('TimeRangeStart', sDate);
    $.cookie('TimeRangeEnd', eDate);

    $('.caption-helper').text(value);

    console.log("sd", $.cookie('TimeRangeEnd'));
    console.log("ed", eDate);

    sDate = dateFormatZconvert(sDate, -6);
    eDate = dateFormatZconvert(eDate, -6);

    GetFilterFacets();
    apiUrlCreate(TableName);
    dataTableRequest(TableName, column, glfilterVal);
});