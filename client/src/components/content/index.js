import React from 'react';
import Card from '../card_metall';
import PrivatCard from '../card_privat';
import Table from '../table';
import './content.css'

function Content (props) {

    return (
        <div className = "container ">
            <h5>PrivatBank:</h5>
            <div className = "cards-container">
                {props.privat.map((el, i) => <PrivatCard key = {i} priv = {el}/>)}  
            </div>
            <h5>Precious metals (NBU):</h5>
            <div className = "cards-container">
                {props.metals.map((el, i) => <Card key = {i} metal = {el}/>)}
            </div>
            <div className ="table-container">
                <Table exchangeRate = {props.exchangeRate} sortArray = {props.sortArray}/> 
        </div>
    </div> 
    )
}

export default Content;