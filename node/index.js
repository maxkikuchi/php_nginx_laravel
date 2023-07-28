const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values('Max')`
connection.query(sql)
connection.end()

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle (Response22)')
})

app.listen(port, () => {
    console.log('Escutando porta desenv: ' + port )
})
