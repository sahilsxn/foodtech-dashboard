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
        <div className="row pt-3 p-lg-3 pb-0" style={{borderRadius: '24px', background:'#F4F4F4'}}>
            <div className="col-md-8">
                <h2>Unique Customers - {onlyUniqueCustomers.length}</h2>
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