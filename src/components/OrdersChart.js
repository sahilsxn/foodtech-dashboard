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
        fontSize: 15,
        is3D: true,
        backgroundColor: { fill: "#F4F4F4" },
        };

        const chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
    }

    return (
        <div className="col-md-6">
            <div id="piechart" style={{width:'520px', height:'280px'}}>
            </div>
        </div>
    )
}

export default OrdersChart