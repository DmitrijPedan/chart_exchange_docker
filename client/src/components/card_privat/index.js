import React from 'react';
import './privat.css'

function PrivatCard (props) {

    return (
        <div className = "privat trans-min">          
            <div className = "body">
                <p className = "code">{props.priv.ccy}</p>
                <p><span>Покупка:</span> {Math.floor((props.priv.buy *100))/100}  UAH</p>
                <p><span>Продажа:</span> {Math.floor((props.priv.sale *100))/100}  UAH</p>
            </div>
      </div>
    )
}

export default PrivatCard;