import React from 'react';

import './footer.css'

function Footer () {
    return (
        <footer>
            <div className = "container">
                <p> &copy; Copyright, Exchange Rates {new Date().getFullYear()} <span>powered by React</span>  </p>
            </div>
        </footer>
    )
}

export default Footer;