import React from 'react';
import './confirm.css'

const ButtonConfirm = (props) => <button className = "confirm trans-max" onClick = {props.action}>{props.inside}</button>;

export default ButtonConfirm;