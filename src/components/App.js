import {React, useState} from 'react'
import OrdersContainer from './OrdersContainer'
import CustomersContainer from './CustomersContainer'
import StatsContainer from './StatsContainer'
import customersData from '../helpers/customersData'


function App(props){

  const [customers, setCustomers] = useState(customersData)

  return (
      <div className="container mb-4 mt-4">
          <h1> Customer Dashboard </h1>
          <StatsContainer customers={customers}/>
          <CustomersContainer customers={customers}/>
          <OrdersContainer customers={customers}/>
      </div>
  )
}

export default App