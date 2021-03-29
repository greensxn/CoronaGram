function show_hide(num) {
    var text = document.getElementById("drop-content" + num);
    var list = document.getElementById("list-menu" + num);
    text.style.color = 'white';
    if (list.style.maxHeight == '400px') {
        list.style.maxHeight = '20px';
        
    } else {
        list.style.maxHeight = '400px';
    }
}

function show_menu(isClick, num) {
    var menu = document.getElementById("menu-addition" + num);
    var mapBtn = document.getElementById("mapBtn" + num);
    var icon = document.getElementById("icon" + num);

    if (isClick) {
        if (icon.style.transform == 'rotate(180deg)') {
            menu.style.opacity = 0;
            menu.style.top = '-50em';
            mapBtn.style.color = 'white';
            icon.style.transform = 'rotate(0deg)';
        } else {
            menu.style.opacity = 1;
            menu.style.top = '100%';
            mapBtn.style.color = '#6A149B';
            icon.style.transform = 'rotate(180deg)';
        }
    } else {
        menu.style.opacity = 0;
        menu.style.top = '-50em';
        mapBtn.style.color = 'white';
        icon.style.transform = 'rotate(0deg)';
    }
}

function rotateElement(grade, id) {
    var element = document.getElementById(id);
    var newGrade = grade - grade;
    if (element.style.transform == 'rotate(' + grade + 'deg)') {
        element.style.transform = 'rotate(' + newGrade + 'deg)';
        console.log(grade);
    } else {
        element.style.transform = 'rotate(' + grade + 'deg)';
        console.log(newGrade);
    }
}

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    setAreaData(
        [
            ['', 'Заражённых'],
            ['24.01.2020', 982],
            ['25.01.2020', 1409],
            ['26.01.2020', 2081],
            ['27.01.2020', 2858],
            ['28.01.2020', 4633],
            ['29.01.2020', 6095],
            ['30.01.2020', 8163],
            ['31.01.2020', 9811],
            ['01.02.2020', 11901],
            ['02.02.2020', 14490],
            ['03.02.2020', 17341],
            ['04.02.2020', 20530],
            ['05.02.2020', 24439]
        ],
        ['#5E00CA'],
        'chart_infected'
    );

    setAreaData(
        [
            ['', 'На подозрении'],
            ['24.01.2020', 0],
            ['25.01.2020', 1742],
            ['26.01.2020', 2692],
            ['27.01.2020', 5794],
            ['28.01.2020', 6972],
            ['29.01.2020', 9239],
            ['30.01.2020', 12167],
            ['31.01.2020', 15238],
            ['01.02.2020', 17988],
            ['02.02.2020', 19544],
            ['03.02.2020', 21558],
            ['04.02.2020', 23214],
            ['05.02.2020', 23260]
        ],
        ['#0068CA'],
        'chart_suspicion'
    );

    setAreaData(
        [
            ['', 'Смертей'],
            ['24.01.2020', 39],
            ['25.01.2020', 42],
            ['26.01.2020', 56],
            ['27.01.2020', 82],
            ['28.01.2020', 106],
            ['29.01.2020', 133],
            ['30.01.2020', 171],
            ['31.01.2020', 213],
            ['01.02.2020', 259],
            ['02.02.2020', 304],
            ['03.02.2020', 361],
            ['04.02.2020', 426],
            ['05.02.2020', 493]
        ],
        ['red'],
        'chart_death'
    );

    setAreaData(
        [
            ['', 'Вылеченных'],
            ['24.01.2020', 0],
            ['25.01.2020', 39],
            ['26.01.2020', 49],
            ['27.01.2020', 56],
            ['28.01.2020', 73],
            ['29.01.2020', 120],
            ['30.01.2020', 136],
            ['31.01.2020', 214],
            ['01.02.2020', 275],
            ['02.02.2020', 434],
            ['03.02.2020', 527],
            ['04.02.2020', 718],
            ['05.02.2020', 1019]
        ],
        ['green'],
        'chart_cured'
    );

    setAreaData(
        [
            ['', 'Тяжелобольных'],
            ['24.01.2020', 0],
            ['25.01.2020', 0],
            ['26.01.2020', 0],
            ['27.01.2020', 461],
            ['28.01.2020', 976],
            ['29.01.2020', 1239],
            ['30.01.2020', 1370],
            ['31.01.2020', 1527],
            ['01.02.2020', 1795],
            ['02.02.2020', 2110],
            ['03.02.2020', 2296],
            ['04.02.2020', 2788],
            ['05.02.2020', 3219]
        ],
        ['#FF6A00'],
        'chart_seriously'
    );

    setAreaData(
        [
            ['', 'Тяжелобольных', 'Вылеченных', 'На подозрении', 'Заражённых', 'Смертей'],
            ['24.01.2020', 0, 0, 0, 982, 39],
            ['25.01.2020', 0, 39, 1742, 1409, 42],
            ['26.01.2020', 0, 49, 2692, 2081, 56],
            ['27.01.2020', 461, 56, 5794, 2858, 82],
            ['28.01.2020', 976, 73, 6972, 4633, 106],
            ['29.01.2020', 1239, 120, 9239, 6095, 133],
            ['30.01.2020', 1370, 136, 12167, 8163, 171],
            ['31.01.2020', 1527, 214, 15238, 9811, 213],
            ['01.02.2020', 1795, 275, 17988, 11901, 259],
            ['02.02.2020', 2110, 434, 19544, 14490, 304],
            ['03.02.2020', 2296, 527, 21558, 17341, 361],
            ['04.02.2020', 2788, 718, 23214, 20530, 426],
            ['05.02.2020', 3219, 1019, 23260, 24439, 493]
        ],
        ['#FF6A00', 'green', '#0068CA', '#5E00CA', 'red'],
        'chart_all'
    );
}

function setAreaData(data, color, id) {
    var data = google.visualization.arrayToDataTable(data);

    var options = {
        colors: color,
        legend: {
            position: 'in',
            alignment: 'end'
        },
        dataOpacity: 1,
        crosshair: {
            focused: { color: 'black', opacity: 0.8 },
            trigger: 'both',
        },
        explorer: {
            keepInBounds: true
        },
        hAxis: {
            textPosition: 'in'
        },

        vAxis: {
            textPosition: 'in'
        },
        pointSize: 5,
        chartArea: { 'width': '100%', 'height': '100%' },
        width: 550
    };
    var chart = new google.visualization.AreaChart(document.getElementById(id));
    chart.draw(data, options);
}

function setSteppedAreaData(data, color, id) {
    if (id == null)
        return;
    var data = google.visualization.arrayToDataTable(data);

    var options = {
        colors: color,
        legend: {
            position: 'in',
            alignment: 'end'
        },
        dataOpacity: 1,
        crosshair: {
            focused: { color: 'black', opacity: 0.8 },
            trigger: 'both',
        },
        explorer: {
            keepInBounds: true
        },
        hAxis: {
            textPosition: 'in'
        },

        vAxis: {
            textPosition: 'in'
        },
        pointSize: 5,
        chartArea: { 'width': '100%', 'height': '100%' },
        width: 550
    };
    var chart = new google.visualization.SteppedAreaChart(document.getElementById(id));
    chart.draw(data, options);
}

google.charts.load('current', {
    'packages': ['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(Ukraine);
google.charts.setOnLoadCallback(China);
google.charts.setOnLoadCallback(Russia);
google.charts.setOnLoadCallback(World);

function World() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Display', 'Заражённых', 'Смертей'],
        ['Germany', 'Германия', 12, 0],
        ['United States', 'США', 11, 0],
        ['Japan', 'Япония', 35, 0],
        ['Russia', 'Россия', 2, 0],
        ['Canada', 'Канада', 5, 0],
        ['Spain', 'Испания', 1, 0],
        ['India', 'Индия', 3, 0],
        ['Australia', 'Австралия', 13, 0],
        ['France', 'Франция', 6, 0],
        ['United Kingdom', 'Англия', 2, 0],
        ['Italy', 'Италия', 2, 0],
        ['Sweden', 'Швeция', 1, 0],
        ['Finland', 'Финляндия', 1, 0],
        ['United Arab Emirates', 'ОАЭ', 5, 0],
        ['Thailand', 'Таиланд', 25, 0],
        ['Cambodia', 'Камбоджа', 1, 0],
        ['Vietnam', 'Вьетнам', 10, 0],
        ['Malaysia', 'Малайзия', 12, 0],
        ['Sri Lanka', 'Шри-Ланка', 1, 0],
        ['Taiwan', 'Тайвань (Китай)', 11, 0],
        ['Philippines', 'Филиппины', 2, 1],
        ['South Korea', 'Южная Корея', 19, 0]
    ]);

    var options = {
        colorAxis: { colors: ['#8BC448', '#6A149B'] }
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    chart.draw(data, options);
}


function Ukraine() {
    var data = google.visualization.arrayToDataTable([
        ['Regions', 'Display', 'Заражённых', 'Смертей'],
        ['Ukraine', 'Украина', 0, 0],
        /*    ['UA-63', 'Харьков', 153064, 9577],
         ['UA-30', 'Киев', 167, 9],
         ['UA-32', 'Киевcкая область', 84, 3]
              ['UA-46', 'Львов', 0, 0],
          ['UA-51', 'Одесса', 0, 0],
          ['UA-12', 'Днепропетровск', 0, 0],
          ['UA-14', 'Донецк', 0, 0],

           ['UA-05', 'Винница', 0, 0],
            ['UA-07', 'Волынь', 0, 0],
             ['UA-09', 'Луганск', 0, 0],
              ['UA-18', 'Житомир', 0, 0],*/

    ]);

    var options = {
        region: 'UA',
        resolution: 'provinces',
        colorAxis: { colors: ['#8BC448', '#6A149B'] }
    };

    var geochart = new google.visualization.GeoChart(document.getElementById('region_ukraine'));
    geochart.draw(data, options);
}

function Russia() {
    var data = google.visualization.arrayToDataTable([
        ['Regions', 'Display', 'Подозрений', 'Заражённых'],
        ['RU-SA', 'Республика Саха (Якутия)', 1, 0],
        ['RU-IRK', 'Иркутская область', 11, 0],
        ['RU-BU', 'Республика Бурятия', 56, 0],
        ['RU-ZAB', 'Забайкальский край', 1, 1],
        ['RU-YAN', 'Ямало-Ненецкий автономный округ', 1, 0],
        ['RU-KHM', 'Ханты-Мансийский автономный округ — Югра', 4, 0],

        ['RU-TYU', 'Тюменьская область', 25, 1],
        ['RU-OMS', 'Омская область', 16, 0],
        ['RU-NVS', 'Новосибирская область', 1, 0],
        ['RU-SVE', 'Свердловская область', 12, 0],
        ['RU-PER', 'Пермский край', 1, 0],
        ['RU-KIR', 'Кировская область', 3, 0],
        ['RU-TA', 'Республика Татарстан', 5, 0],
        ['RU-BA', 'Башкортостан', 5, 0],
        ['RU-CHE', 'Челябинская область', 17, 0],
        ['RU-SAR', 'Саратовская область', 5, 0],
        ['RU-MO', 'Республика Мордовия', 3, 0],
        ['RU-VLA', 'Владимирская область', 3, 0],
        ['RU-AST', 'Астраханская область', 2, 0],
        ['RU-KL', 'Республика Калмыкия', 3, 0],
        ['RU-ROS', 'Ростовская область', 23, 0],
        ['RU-KDA', 'Краснодарский край', 11, 0],
        ['RU-AD', 'Республика Адыгея', 3, 0],
        ['RU-VOR', 'Воронежская область', 6, 0],
        ['RU-BRY', 'Брянская область', 1, 0],
        ['RU-TUL', 'Тульская область', 5, 0],
        ['RU-MOS', 'Московская область', 41, 0],
        ['RU-SMO', 'Смоленская область', 4, 0],
        ['RU-KGD', 'Калининградская область', 9, 0],
        ['RU-LEN', 'Ленинградская область', 10, 0],
        ['RU-KR', 'Республика Карелия', 1, 0]
        /*    ['UA-63', 'Харьков', 153064, 9577],
         ['UA-30', 'Киев', 167, 9],
         ['UA-32', 'Киевcкая область', 84, 3]
              ['UA-46', 'Львов', 0, 0],
          ['UA-51', 'Одесса', 0, 0],
          ['UA-12', 'Днепропетровск', 0, 0],
          ['UA-14', 'Донецк', 0, 0],

           ['UA-05', 'Винница', 0, 0],
            ['UA-07', 'Волынь', 0, 0],
             ['UA-09', 'Луганск', 0, 0],
              ['UA-18', 'Житомир', 0, 0],*/

    ]);

    var options = {
        region: 'RU',
        resolution: 'provinces',
        colorAxis: { colors: ['#8BC448', '#6A149B'] }
    };

    var geochart = new google.visualization.GeoChart(document.getElementById('region_russia'));
    geochart.draw(data, options);
}

function China() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'City');
    data.addColumn('string', 'Display');
    data.addColumn('number', 'Заражённых');
    data.addColumn('number', 'Смертей');

    data.addRows([
        ['CN-53', 'Юньнань', 128, 0],
        ['CN-43', 'Хунань', 711, 0],
        ['CN-61', 'Шэньси', 173, 0],
        ['CN-21', 'Ляонин', 89, 0],
        ['CN-13', 'Хэбэй', 157, 1],
        ['CN-14', 'Шаньси', 81, 0],
        ['CN-42', 'Хубэй', 19665, 549],
        ['CN-34', 'Аньхой', 591, 0],
        ['CN-33', 'Чжэцзян', 954, 0],
        ['CN-35', 'Фуцзянь', 205, 0],
        ['CN-44', 'Гуандун', 944, 0],
        ['CN-23', 'Хэйлунцзян', 227, 3],
        ['CN-63', 'Цинхань', 18, 0],
        ['CN-51', 'Сычуань', 321, 1],
        ['CN-36', 'Цзянси', 600, 0],
        ['CN-37', 'Шаньдун', 343, 0],
        ['CN-50', 'Чунцин', 389, 2],
        ['CN-54', 'Тибет', 1, 0],
        ['CN-65', 'Синьцзян-Уйгурский', 36, 0],
        ['CN-46', 'Хайнань', 100, 1],
        ['CN-31', 'Шанхай', 254, 1],
        ['CN-52', 'Гуйчжоу', 64, 1],
        ['CN-45', 'Гуанси', 168, 0],
        ['CN-64', 'Нинся', 40, 0],
        ['CN-15', 'Внутренняя Монголия', 46, 0],
        ['CN-41', 'Хэнань', 851, 2],
        ['CN-62', 'Ганьсу', 62, 0],
        ['CN-32', 'Цзянсу', 373, 0],
        ['CN-12', 'Тяньцзинь', 69, 1],
        ['CN-11', 'Пекин', 274, 1],
        ['CN-22', 'Гирин', 54, 0]
    ]);

    var options = {
        region: 'CN',
        resolution: 'provinces',

        /*  colorAxis: { colors: ['#4729B7', '#439AFD', '#6CCE71', '#FAB966', '#F36368'] },*/
        colorAxis: { colors: ['#8BC448', '#6A149B', '#6A149B', '#6A149B', '#6A149B', '#6A149B', '#6A149B', '#6A149B', '#6A149B', '#6A149B'] }
    };

    var geochart = new google.visualization.GeoChart(document.getElementById('region_china'));
    geochart.draw(data, options);
}

function onTelegramAuth(user) {
    alert('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')');
}

window.addEventListener('scroll', () => {
    var logo = document.getElementById("img_logo");
    var logoText = document.getElementById("logoText");
    var barGrid2 = document.getElementById('gridBar2');
    var btnUp = document.getElementById('btnUp');
    // var barGrid = document.getElementById('gridBar');
    // var mainGrid = document.getElementById('mainGrid');
    // var bar = document.getElementById('bar');

    console.log(window.scrollY);

    if (window.scrollY > 72) {
        barGrid2.style.opacity = '100%';
        barGrid2.style.marginTop = '0';

        logoText.style.fontSize = '1.4rem';
        logoText.style.marginTop = '6px';

        logo.style.height = '25px';
        logo.style.marginLeft = '100px';

        btnUp.style.opacity = '100%';
    } else {
        barGrid2.style.opacity = '0%';
        barGrid2.style.marginTop = '999em';

        logoText.style.fontSize = '2rem';
        logoText.style.marginTop = '0px';

        logo.style.height = '80px';
        logo.style.marginLeft = '50px';

        btnUp.style.opacity = '0%';
    }


    // if (window.scrollY > 72) {
    //     barGrid.style.position = 'fixed';
    //     barGrid.style.zIndex = 50;
    //     barGrid.style.marginTop = '0px';
    //     bar.style.borderRadius = '0';
    //     bar.style.width = '100%';
    //     bar.style.paddingBottom = '0px';
    //     mainGrid.style.marginTop = '65px';
    // } else {
    //     barGrid.style.position = 'relative';
    //     barGrid.style.zIndex = 0;
    //     barGrid.style.marginTop = '30px';
    //     bar.style.borderRadius = '30px 30px 0 0';
    //     bar.style.width = '84%';
    //     bar.style.paddingBottom = '30px';
    //     mainGrid.style.marginTop = '-44px';
    // }

    // if (window.scrollY > 3) {
    //       logo.style.opacity = 0;

    // } else {

    //     /*logo.style.opacity = 1;*/
    // }


});

