import React from 'react';
import './card.css'

function Card (props) {

    return (
        <div className = "currency-card trans-min">          
            <div className = "top">
                 <div className = "currency-code">
                    <p>{props.metal.cc}</p>
                </div>
            </div>
            <div className = "bottom">
                <h4>{props.metal.txt}</h4>
                <p>{ Math.round((props.metal.rate*100)) / 100}  UAH</p>
            </div>
      </div>
    )
}

export default Card;