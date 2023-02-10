// server/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`Server  listening on port ${port}`)
});

// get all
app.get('/products', (req, res) => {
    res.send(products);
});
// get one
app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const event = products.find(event => event.id === id);
    res.send(event);
});

// listen on the port
app.listen(port);