const express = require('express');
const db = require('./db/connection');
const landing = require('./utils/appNav');

const PORT = process.env.PORT || 3001; 
const app = express(); 

//start server
db.connect(err => {
    err ? err : console.log('Connected!');
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
})

const startApp = () => {
    return landing(); 
}

startApp(); 