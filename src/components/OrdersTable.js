import React from 'react'

function OrdersTable(props){
    const {data} = props

    return (
        <div className="col-md-6">
        <table className="table table-striped">
            <thead>
                <tr style={{borderBottom:'2.5px solid #393C3E'}}>
                    <th className="text-light"> No. of Orders </th>
                    <th className="text-light"> Count of Customers</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(data).map((ele, i)=>{
                    return (
                        <tr key={i} style={{borderBottom:'#393C3E'}}>
                            <td className="text-light">{ele}</td>
                            <td className="text-light">{data[ele]}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
}

export default OrdersTable