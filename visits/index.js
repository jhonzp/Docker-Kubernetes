const express = require('express');
const redis = require('redis');
const app = express();
const client = redis.createClient({
    host: 'redis-server',
    //host: 'redis-server',
    port: 6379
});

app.get('/', (req, res) => {
    
    client.get('visits', (err, visits) => {
        if (isNaN(parseInt(visits))) {
            client.set('visits', 0);
            visits = 0;
        }            
        visits = parseInt(visits) + 1;
        client.set('visits', visits);
        res.send('Number of visits is ' + visits);        
    });
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});