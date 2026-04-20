function getData(n, offset) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push([i, 10 * Math.sin((i + offset) / 5)]);
    }
    return arr;
}

Highcharts.chart('container', {
    boost: {
        enabled: true,
        allowForce: true
    },

    plotOptions: {
        series: {
            boostThreshold: 1,
            marker: {
                symbol: 'circle',
                enabled: true
            }
        }
    },

    title: {
        text: 'Boost: marker halo stays visible after hiding a series'
    },

    subtitle: {
        text: 'Hide one series via the legend — hover still shows the halo'
    },

    series: [{
        data: getData(50, 0),
        name: 'A'
    }, {
        data: getData(50, 3),
        name: 'B'
    }]
});
