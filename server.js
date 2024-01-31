// Importing express


const express = require('express');

const dataBase = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
dataBase.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Social Network API runing on port ${PORT}`);
    });

});