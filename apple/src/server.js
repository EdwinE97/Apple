const express = require('express');
const mysql = require('mysql');
const cors = require('cors')

const db = mysql.createConnection({
    host: '',
    user: "",
    password: "",
    database: ""

})

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('mysql Connected')
});

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    db.query('SELECT * FROM ',
        (err, results) => {
            if (err) throw err;
            console.log(results);
            res.send(results)


        })
})


app.listen('4000', () => {
    console.log("server started on port 4000");
})