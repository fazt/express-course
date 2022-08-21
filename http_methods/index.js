const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('get request to the homepage');
})

app.post('/', (req, res) => {
    res.send('post request to the homepage');
})

app.put('/', (req, res) => {
    res.send('put request to the homepage');
})

app.delete('/', (req, res) => {
    res.send('delete request to the homepage');
})

app.patch('/', (req, res) => {
    res.send('patch request to the homepage');
})

app.listen(3000);
console.log('Server on port 3000');