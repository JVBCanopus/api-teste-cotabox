const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const conn = require('./db/conn');

conn();

const port = process.env.PORT || 3000;

//Routes
const routes = require('./routes/router');
app.use('/api', routes);

app.listen(port, function () {
    console.log('Servidor online!!');
});