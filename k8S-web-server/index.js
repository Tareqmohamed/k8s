// const express = require("express");
// const os = require("os")
// const app = express()
// app.get("/", (req, res) => {
//     const msg = `Wlecom in => ${os.hostname()} <= version 2.0.0 \n`
//     res.send(msg)

// })

// app.listen(2646, () => {
//     console.log("server is runing")
//     function sum(...args) {
//         let sum = 0;
//         for ( let arg of args) { sum += arg };
//         return sum;
//     }
//     let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
//     console.log(x)
//     console.log(os.hostname())
// })
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "tareq",
    authPlugins: {
        mysql_clear_password: () => () => Buffer.from('12345678')
    }
},);
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, address) VALUES ?";
    var values = [
        ['John', 'Highway 71'],
        ['Peter', 'Lowstreet 4'],
        ['Amy', 'Apple st 652'],
        ['Hannah', 'Mountain 21'],
        ['Michael', 'Valley 345'],
        ['Sandy', 'Ocean blvd 2'],
        ['Betty', 'Green Grass 1'],
        ['Richard', 'Sky st 331']
    ];
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});