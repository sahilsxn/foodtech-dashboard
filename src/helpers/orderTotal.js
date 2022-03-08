const orderTotal = (customers) =>{
    let sum = 0
    for (let cust of customers) {
        sum += cust.Amount
    }
    return sum
}

export default orderTotal