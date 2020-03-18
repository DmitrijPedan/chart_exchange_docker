const express = require('express');
const fetch = require('node-fetch');
const moment = require('moment')
const app = express();
const port = process.env.API_PORT || 3000;

async function fetchData (date) {
    try {
        const response = await fetch(`https://api.privatbank.ua/p24api/exchange_rates?json&date=${date}`);
        return await response.json();
    } catch(err){
        console.log('Error in api (fetchData):', error);  
    }
}

app.get('/api', async (req, res) => {
    const start = 'start' in req.query ? moment(req.query.start, 'DD.MM.YYYY') : moment().format('DD.MM.YYYY');
    const end = 'end' in req.query ? moment(req.query.end, 'DD.MM.YYYY') : moment().format('DD.MM.YYYY');
    let differ = end.diff(start, 'days')
    const arrayOfDates = [...new Array(differ + 1)].map((el, i) => start.clone().add(i, 'd').format('DD.MM.YYYY'));
    let respData = [];
    for (let i = 0; i < arrayOfDates.length; i++) {
        respData.push(await fetchData(arrayOfDates[i]))
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(respData);
});

app.listen(port, () => {
    console.log(`api was started ${moment().format('LTS')} on ${port} port`);   
})