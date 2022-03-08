import React from 'react'

function CustomersTable(props){

    const {customers, showDetails} = props

    return(
        <div >
            <table className="table table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Show</th>
                </tr>
            </thead>
            <tbody>
                    {customers.map(customer=>{
                        return (
                            <tr key={customer.Phone}>
                                <td>{customer.Name}</td>
                                <td>{customer.Phone}</td>
                                <td> 
                                    <button className="btn btn-primary"
                                    style={{borderRadius: '20px'}} 
                                    onClick={()=>{showDetails(customer)}}>
                                    Show
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