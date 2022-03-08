import React from 'react'
import StatsItem from './StatsItem'
import orderTotal from '../helpers/orderTotal'
import uniqueCustomers from '../helpers/uniqueCustomers'

function StatsContainer(props){

    const {customers} = props
    const ordersCount = customers.length
    
    return (
        <div className="row mb-5 mt-3">
                <StatsItem count={ordersCount} text='Orders'/>
                <StatsItem count={orderTotal(customers)} text='Total Amount'/>
                <StatsItem count={uniqueCustomers(customers).length} text='Unique Orders'/>
        </div>
    )
}

export default StatsContainer