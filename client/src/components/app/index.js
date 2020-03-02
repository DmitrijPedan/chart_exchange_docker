import React, { useState, useEffect } from 'react';
import moment from 'moment'
// import {sortArray} from '../../services/sorting';
// import * as urlConstants from '../../config/urlConstants';
import {fetchDataArray} from '../../services/fetchData';

import Header from '../header';
import Content from '../content';
import NoData from '../no_data';
import Footer from '../footer';
import './app.css';


function App() {

    const [loaded, setLoaded] = useState(false);
    
    let dates = []
    const start = moment('2020-02-01');
    const end = moment('2020-02-03');
    const differ = end.diff(start, 'days')
    for (let i = 0; i < differ + 1; i++) {
        dates.push(start.clone().add(i, 'd').format('DD.MM.YYYY'))
    }

            
    useEffect(() => {
        async function fetchData () {
            try {
                let result = []
                for (let i = 0; i < dates.length; i++) {
                    let day = await fetchDataArray(`http://localhost:5000/api?date=${dates[i]}`);
                    console.log(day.date, 'ok', moment().format('LTS'));
                    result.push(day);
                }
                console.log(result);
                setLoaded(true);            
            } catch (err) {
                console.error('Error in App:', err);
            }
    }     
    fetchData();
    }, [])

    return (
        <div className="App" >
            <Header loaded = {loaded}/>
                <main>
                {loaded ? <h5>data is loaded</h5> : <NoData /> }
                </main>
            <Footer />
        </div> 
    );
}

export default App;