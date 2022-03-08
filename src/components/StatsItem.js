import React from 'react'

function StatsItem(props){

    const {count, text} = props

    return (
        <div className="col-md-4">
            <div className="card text-dark bg-light" style={{borderRadius: '20px'}}>
                <div className="card-header" style={{borderRadius: '20px 20px 0px 0px'}}>
                    <h2>{count}</h2>
                </div>
                <div className="card-body">
                <h4 className="card-">{text}</h4>
            </div>
            </div>
        </div>
    )
}

export default StatsItem