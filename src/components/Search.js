import React from 'react'

function Search(props){

    const {term, handleChange} = props

    return (
        <input value={term} onChange={handleChange} type='text' 
        placeholder='Search by Name or Mobile' className="form-control"
        style={{borderRadius: '20px', 
                backgroundColor:'#2E3133', 
                borderColor:'#393C3E', 
                color:'#ffffff', 
                opacity:'0.9',
                }}/>
    )
}

export default Search