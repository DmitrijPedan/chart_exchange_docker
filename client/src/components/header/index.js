import React from 'react';
import Clock from './clock'
import './header.css'



function Header (props) {
    return (
        <header>
            <div className = "container">
                <div className = "header-menu">
                    <div>
                        <p className = "header-logo">Exchange<span>rates</span></p>
                    </div>
                    <div className = "header-data">
                    <p>data uploaded: {props.loaded 
                        ? <span className = "data-ok">ok</span> 
                        : <span className = "data-false">server is not available</span> }</p>
                        <Clock />
                    </div>
                </div> 
            </div> 
        </header>
    )
}

export default Header;
