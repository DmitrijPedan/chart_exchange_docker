import React, { useState, useEffect } from 'react';

import * as urlConstants from '../../config/urlConstants';
import {fetchDataArray} from '../../services/fetchData';
import {sortArray} from '../../services/sorting';

import Header from '../header';
import Content from '../content';
import NoData from '../no_data';
import Footer from '../footer';
import './app.css';

function App() {

    const [loaded, setLoaded] = useState(false);
    const [exchangeRate, setExchangeRate] = useState([]);
    const [metals, setMetals] = useState([]);
    const [privat, setPrivat] = useState([]);
    const [sort, setSort] = useState(false);
         
    useEffect(() => {
        async function fetchData () {
            try {
                const countries = await fetchDataArray(urlConstants.REST_COUNTRIES);
                const exchangeNBU = await fetchDataArray(urlConstants.NBU_EXCHANGE);
                const exchangePrivat = await fetchDataArray(urlConstants.PRIVAT_EXCHANGE);
                let result = []
                exchangeNBU.forEach(elem => countries.forEach(el => (elem.cc === el.currencies[0].code) ? result.push(Object.assign(el, elem)) : null));
                setExchangeRate(result);
                setMetals(exchangeNBU.filter(el => el.cc[0] === 'X' && el.cc !== 'XDR'));
                setPrivat(exchangePrivat);
                setLoaded(true);
            } catch (err) {
                console.error('Error in App:', err);
            }
    }     
    fetchData();
    }, [])

    useEffect(() => {
        async function fetchLocal () {
            try {
                const local = await fetchDataArray('http://localhost:5000/api?date=01.01.2020');
                console.log(local);
                
            } catch (err) {
                console.error('Error in App:', err);
            }
    }     
    fetchLocal();
    }, [])
  
    const handler = (arr, key) => {
        sortArray(arr, key)
        setSort(!sort)
    }

    return (
        <div className="App" >
            <Header loaded = {loaded}/>
                <main>
                {loaded ? 
                    <Content exchangeRate = {exchangeRate} metals = {metals} privat = {privat} sortArray = {handler}/> 
                    : <NoData /> }
                </main>
            <Footer />
        </div> 
    );
}

export default App;