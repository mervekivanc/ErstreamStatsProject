var offset = new Date().getTimezoneOffset();
console.log(offset);
var timeZoneHour = Math.abs(offset / 60);
var m = Math.abs(offset);
console.log(m);
function DashboardDaterange() {
    if (!jQuery().daterangepicker) {
        return;
    }

    $('#dashboard-report-range').daterangepicker({
        "timePicker": true,
        "timePickerIncrement": 10,
        //locale: {
        //    format: 'MM/DD/YYYY h:mm A'
        //}
        "ranges": {
            'Last 30 min': [moment().subtract('minutes', m + 50), moment().subtract('minutes', m)],
            'Last 2h': [moment().subtract('minutes', m + 120), moment().subtract('minutes', m)],
            'Last 6h': [moment().subtract('minutes', m + 360), moment().subtract('minutes', m)],
            'Today': [((moment().subtract('days', 1)).startOf('days')).subtract('hours', -21), ((moment().subtract('days', 0)).endOf('days')).subtract('hours', 3)],
            'Yesterday': [((moment().subtract('days', 2)).startOf('days')).subtract('hours',-21), ((moment().subtract('days', 1)).endOf('days')).subtract('hours', 3)],
            'Last Week': [(moment().subtract('week', 1).startOf('week')).subtract('hours', -9), ((moment().subtract('week', 1).endOf('week')).subtract(-1, 'days')).subtract('hours', 3)],
            'Last 7 Days': [moment().subtract('days', 7), moment()],
            'This Week': [(moment().startOf('week')).subtract('hours', -9), (moment().endOf('week').subtract(-1, 'days')).subtract('hours', 3)],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')],
            'Last 90 Days': [moment().subtract('days', 90), moment()]
        },
        "locale": {
            "format": 'MM/DD/YYYY h:mm A',
            "separator": " - ",
            "applyLabel": "Apply",
            "cancelLabel": "Cancel",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Custom",
            "daysOfWeek": [
                "Su",
                "Mo",
                "Tu",
                "We",
                "Th",
                "Fr",
                "Sa"
            ],
            "monthNames": [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ],
            "firstDay": 1
        },
        opens: (App.isRTL() ? 'right' : 'left'),
    }, function (start, end, label) {
        if ($('#dashboard-report-range').attr('data-display-range') != '0') {
            $('#dashboard-report-range span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        }
    });
    if ($('#dashboard-report-range').attr('data-display-range') != '0') {
        $('#dashboard-report-range span').html(moment().subtract('days', 29).format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
    }
    $('#dashboard-report-range').show();
}

DashboardDaterange();


