const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World de smp');
})

app.listen(3001);