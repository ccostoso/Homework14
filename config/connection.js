var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'PASSWORD',
    database: 'burgers_db'
});

connection.connect(err => {
    if (err) {
        console.log(`Connection Error: ${err.stack}`);
        return;
    }

    console.log(`Connected as: ${connection.threadId}`);
})

module.exports = connection;