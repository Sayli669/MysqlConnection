
var mysql      = require('mysql');


var connection = mysql.createConnection({
    host     : 'localhost',
    database : 'mydb',
    user     : 'root',
    password : 'root',
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' +err.stack );
    }else{
        console.log('Connected as id ' + connection.threadId);
    }

    
});
// connection.query("CREATE DATABASE mydb", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
// });
//var sql = "CREATE TABLE student (name VARCHAR(255), address VARCHAR(255))";

var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
connection.query(sql, function (err, result) {
if (err) throw err;
console.log("Table created");
});

connection.end();