import _ from 'lodash'

const uniqueCustomers = (customers) => {
    const result = _.uniqBy(customers, 'Phone')
    return result
}

export default uniqueCustomers