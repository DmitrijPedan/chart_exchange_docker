import React from 'react';
import './close.css'

const ButtonClose = (props) => <button className = "close trans-min" onClick = {props.action}>&#10006;</button>;

export default ButtonClose;