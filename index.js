const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql/promise');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = 8000; // Port that the server will run on

let conn = null;


const initMysql = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: '', // Username for the database
        password: '', // Password for the user
        database: '', // Database name
        port: 3307 // Port for the database
    });
    console.log('Connected to mysql');
}

app.listen(port, async (req, res) => {
    await initMysql();
    console.log('http server run at ' + port);
});