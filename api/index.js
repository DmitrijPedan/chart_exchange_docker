const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = process.env.API_PORT || 3000;

async function fetchData (date) {
    try {
        const response = await fetch(`https://api.privatbank.ua/p24api/exchange_rates?json&date=${date}`);
        const result = await response.json();
        return result;
    } catch(err){
        console.log('Error in api (fetchData):', error);  
    }
}

app.get('/api', async (req, res) => {
    
    const date = 'date' in req.query ? req.query.date : '01.01.2015';
    res.setHeader('Access-Control-Allow-Origin', '*');
    const data = await fetchData(date);
    res.send(data);

});

app.listen(port, () => {
    console.log(`api was started on ${port} port`);
})