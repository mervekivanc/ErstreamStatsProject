var sample_data = { "af": "", "al": "", "dz": "", "ao": "", "ag": "", "ar": "", "am": "", "au": "", "at": "", "az": "", "bs": "", "bh": "", "bd": "", "bb": "", "by": "", "be": "", "bz": "", "bj": "", "bt": "", "bo": "", "ba": "", "bw": "", "br": "", "bn": "", "bg": "", "bf": "", "bi": "", "kh": "", "cm": "", "ca": "", "cv": "", "cf": "", "td": "", "cl": "", "cn": "", "co": "", "km": "", "cd": "", "cg": "", "cr": "", "ci": "", "hr": "", "cy": "", "cz": "", "dk": "", "dj": "", "dm": "", "do": "", "ec": "", "eg": "", "sv": "", "gq": "", "er": "", "ee": "", "et": "", "fj": "", "fi": "", "fr": "", "ga": "", "gm": "", "ge": "", "de": "", "gh": "", "gr": "", "gd": "", "gt": "", "gn": "", "gw": "", "gy": "", "ht": "", "hn": "", "hk": "", "hu": "", "is": "", "in": "", "id": "", "ir": "", "iq": "", "ie": "", "il": "", "it": "", "jm": "", "jp": "", "jo": "", "kz": "", "ke": "", "ki": "", "kr": "", "undefined": "", "kw": "", "kg": "", "la": "", "lv": "", "lb": "", "ls": "", "lr": "", "ly": "", "lt": "", "lu": "", "mk": "", "mg": "", "mw": "", "my": "", "mv": "", "ml": "", "mt": "", "mr": "", "mu": "", "mx": "", "md": "", "mn": "", "me": "", "ma": "", "mz": "", "mm": "", "na": "", "np": "", "nl": "0", "nz": "", "ni": "", "ne": "", "ng": "0", "no": "", "om": "", "pk": "", "pa": "", "pg": "", "py": "", "pe": "", "ph": "0", "pl": "", "pt": "", "qa": "", "ro": "", "ru": "", "rw": "", "ws": "0", "st": "0", "sa": "", "sn": "", "rs": "", "sc": "0", "sl": "", "sg": "", "sk": "", "si": "", "sb": "", "za": "", "es": "", "lk": "", "kn": "0", "lc": "", "vc": "0", "sd": "", "sr": "", "sz": "", "se": "", "ch": "", "sy": "", "tw": "", "tj": "", "tz": "", "th": "", "tl": "", "tg": "", "to": "", "tt": "", "tn": "", "tr": "", "tm": "", "ug": "", "ua": "", "ae": "", "gb": "", "us": "", "uy": "", "uz": "", "vu": "", "ve": "", "vn": "", "ye": "", "zm": "", "zw": "" };

var aggregate = 'TotalChunkCount-sum~TotalWatchingDurationInDay-sum~TotalSentBytesInTB-sum';

//MAP
FormData = DataTableFormData(glfilterVal);
url = apiUrlCreate('Country');
var geoData = {};
$.ajax({
    url: url,
    type: 'POST',
    data: FormData,
    dataType: 'json',
    success: function (data) {
        $.each(data.Data, function (i, item) {
            var cCode = (getCountryCode(item.Key)).toLowerCase();
            geoData["" + cCode + ""] = "" + item.TotalChunkCount + "";
            sample_data["" + cCode + ""] = "" + item.TotalChunkCount + "";
        });
    },
    error: function (err) {
        console.log(err);
    }
});

//Map Settings
function Map() {
    if (!jQuery().vectorMap) {
        return;
    }

    var showMap = function (name) {
        jQuery('.vmaps').hide();
        jQuery('#vmap_' + name).show();
    }

    var setMap = function (name) {
        var map = jQuery('#vmap_' + name);

        if (map.size() !== 1) {
            return;
        }

        var data = {
            map: 'world_en',
            backgroundColor: null,
            color: '#ffffff',
            hoverOpacity: 0.7,
            selectedColor: '#666666',
            enableZoom: true,
            showTooltip: true,
            values: sample_data,
            regionLabelStyle: {
                initial: {
                    fill: '#B90E32'
                },
                hover: {
                    fill: 'black'
                }
            },
            scaleColors: ['#C8EEFF', '#006491'],
            normalizeFunction: 'polynomial',
            showLabels: true,
            onLabelShow: function (event, label, code) {
                if (sample_data[code] > 0)
                    label.append(":" + sample_data[code]);
            },
            onRegionOver: function (event, code) {
                if (code == 'ca') {
                    event.preventDefault();
                }
            },
            onRegionClick: function (element, code, region, value) {
                var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase() + ' val: ' + sample_data[code];
                alert(message);
            }
        };

        data.map = name + '_en';

        map.width(map.parent().parent().width());
        map.show();
        map.vectorMap(data);
        map.hide();
    }

    setMap("world");
    setMap("usa");
    setMap("europe");
    setMap("russia");
    setMap("germany");
    showMap("world");

    jQuery('#regional_stat_world').click(function () {
        showMap("world");
    });

    jQuery('#regional_stat_usa').click(function () {
        showMap("usa");
    });

    jQuery('#regional_stat_europe').click(function () {
        showMap("europe");
    });
    jQuery('#regional_stat_russia').click(function () {
        showMap("russia");
    });
    jQuery('#regional_stat_germany').click(function () {
        showMap("germany");
    });

    $('#region_statistics_loading').hide();
    $('#region_statistics_content').show();

    App.addResizeHandler(function () {
        jQuery('.vmaps').each(function () {
            var map = jQuery(this);
            map.width(map.parent().width());
        });
    });
}
Map();