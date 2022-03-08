import React from 'react'

function OrdersTable(props){
    const {data} = props

    return (
        <div className="col-md-6">
        <table className="table table-striped">
            <thead>
                <tr>
                    <th> No. of Orders </th>
                    <th> Count of Customers</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(data).map((ele, i)=>{
                    return (
                        <tr key={i}>
                            <td>{ele}</td>
                            <td>{data[ele]}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
}

export default OrdersTable