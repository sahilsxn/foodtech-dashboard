import React from 'react'

function OrdersChart(props){
    const {data} = props

    const google = window.google

    google.charts.load('current', {'packages':['corechart']})
    google.charts.setOnLoadCallback(drawChart)

    const chartData = [
            ['No of Orders', 'Customer Count']
        ]

    for (const key in data){
        chartData.push([key, data[key]])
    }

    function drawChart(){

        const data = google.visualization.arrayToDataTable(chartData);

        const options = {
        title: 'Orders Distribution',
        titleTextStyle: {color: 'white', opacity:'0.9'},
        legend: {textStyle: {color: 'white'}},
        fontSize: 15,
        is3D: true,
        backgroundColor: { fill: "#212426" },

        };

        const chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
    }

    return (
        <div className="col-md-6" style={{display:'flex', justifyContent:'center'}}>
            <div id="piechart" style={{width:'360px', height:'280px'}}>
            </div>
        </div>
    )
}

export default OrdersChart