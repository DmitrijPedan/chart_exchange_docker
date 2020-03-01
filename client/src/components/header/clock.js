import React, {useState} from 'react';

function Clock () {

    const [tick, setTick] = useState(new Date().toLocaleTimeString())

    const ticked = () => setTick(new Date().toLocaleTimeString())

    setInterval(ticked, 1000)

    return (
        <div>
            <p>{new Date().toLocaleDateString()}<span style = {style}> {tick} </span></p>
        </div>
    )
}

const style = { 
    fontSize: '15px',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontWeight: '300',
    color: 'rgb(255, 136, 0)',
}

export default Clock;