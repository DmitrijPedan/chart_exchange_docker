import React from 'react';
import Button from '../buttons/confirm'
import './no-data.css'

function NoData () {

    const reload = () => window.location.reload();
    
    return (
        <div className = "container ">
            <p className = "no-data">data is not available</p>
            <Button action = {reload} inside = {"Try again"} />
        </div> 
    )
}

export default NoData;