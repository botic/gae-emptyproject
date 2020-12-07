'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Empty project.').end();
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT);

module.exports = app;
