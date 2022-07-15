import {React, useState} from 'react'
import Search from './Search'
import CustomersTable from './CustomersTable'
import orderTotal from '../helpers/orderTotal'
import uniqueCustomers from '../helpers/uniqueCustomers'

function CustomersContainer(props){
    const {customers} = props
    
    const [term, setTerm] = useState('')

    const onlyUniqueCustomers = uniqueCustomers(customers)

    const showDetails = (customer) =>{
        const customerOrders = customers.filter(c => c.Phone === customer.Phone)
        const customerOrderTotal = orderTotal(customerOrders)

        alert(`
        Name - ${customer.Name}
        Order Count - ${customerOrders.length}
        Order Total - ${customerOrderTotal}
        `)
    }

    const handleChange = (e) => {
        const term = e.target.value
        setTerm(term)
    }

    const filteredUniqueCustomer = () => {
        const result = onlyUniqueCustomers.filter((c)=>{
            return c.Name.toLowerCase().includes(term) || c.Phone.toString().includes(term)
        })
        return result
    }

    return (
        <div className="row p-lg-3 pt-lg-4 m-5 text-light" style={{borderRadius: '24px', background:'#212426'}}>
            <div className="col-md-8">
                <h2 className="text-light">Unique Customers - {onlyUniqueCustomers.length}</h2>
            </div>
            <div className="col-md-4">
                <Search term={term} handleChange={handleChange}/>
            </div>
            <div>
                <div className="col-md-12">
                    <CustomersTable customers={filteredUniqueCustomer()} showDetails={showDetails}/>
                </div>
            </div>
        
        </div>
        
    )
}

export default CustomersContainer