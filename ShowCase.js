google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
    ]);
    var options = {
        titleTextStyle: {fontSize : 16},
        title: 'My Daily Activities (Investment)',
        is3D: true,
    };
    var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
    var chart1 = new google.visualization.PieChart(document.getElementById('piechart_3d1'));
    chart.draw(data, options);
    chart1.draw(data, options);
}