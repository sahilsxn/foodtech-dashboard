import {React, useState} from 'react'
import OrdersContainer from './OrdersContainer'
import CustomersContainer from './CustomersContainer'
import StatsContainer from './StatsContainer'
import customersData from '../helpers/customersData'
import '../header.css'


function App(props){

  const [customers, setCustomers] = useState(customersData)

  return (
      <div className="col">
          <div className='header'>
            <h1 className="text-light"> Customer Analytics Dashboard </h1>
            <img className='illustration' src="https://images.prismic.io/cred/351ece27-b59a-47ef-8519-11c733ca351a_credit-score-meter.png?auto=format&w=550"/>
          </div>
          <h2 className="text-light mt-5" style={{marginLeft:'64px'}}> Order Insights </h2>
          <StatsContainer customers={customers}/>
          <CustomersContainer customers={customers}/>
          <OrdersContainer customers={customers}/>
      </div>
  )
}

export default App