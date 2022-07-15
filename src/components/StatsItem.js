import React from 'react'

function StatsItem(props){

    const {count, text} = props

    return (
        <div className="col-md-4">
            <div className="card text-light" style={{borderRadius: '18px', borderColor:'#393C3E'}}>
                <div className="card-header" style={{borderRadius: '16px 16px 0px 0px', backgroundColor:'#212426'}}>
                    <h2>{count}</h2>
                </div>
                <div className="card-body" style={{borderRadius: '0px 0px 16px 16px', backgroundColor:'#292C2E'}}>
                    <h4 className="card-">{text}</h4>
                </div>
            </div>
        </div>
    )
}

export default StatsItem