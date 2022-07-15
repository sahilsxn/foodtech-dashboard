import React from 'react'
import '../button.css'

function CustomersTable(props){

    const {customers, showDetails} = props

    return(
        <div >
            <table className="table table-hover">
            <thead>
                <tr style={{borderBottom:'2.5px solid #393C3E'}}>
                    <th className="text-light">Name</th>
                    <th className="text-light">Phone</th>
                    <th className="text-light">Show Customer</th>
                </tr>
            </thead>
            <tbody>
                    {customers.map(customer=>{
                        return (
                            <tr key={customer.Phone} style={{borderBottom:'#393C3E', alignContent:'center'}}>
                                <td className="text-light">{customer.Name}</td>
                                <td className="text-light">{customer.Phone}</td>
                                <td className="text-light"> 
                                    <button className="btn"
                                    onClick={()=>{showDetails(customer)}}>
                                    Show Details
                                    </button> 
                                </td>
                            </tr>
                        )
                    })}
            </tbody>
        </table>    
        </div>
    )
}

export default CustomersTable