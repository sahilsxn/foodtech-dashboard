import React from 'react'

function Search(props){

    const {term, handleChange} = props

    return (
        <input value={term} onChange={handleChange} type='text' 
        placeholder='Search by Name or Mobile' className="form-control"
        style={{borderRadius: '20px'}}/>
    )
}

export default Search