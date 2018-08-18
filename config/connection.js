// ----------------------- DATABASE CONNECTION ------------------------ //
// -------------------------------------------------------------------- //

var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 8889,
        //Username
        user: "root",
        // Password
        password: "root",
        // Database
        database: "burgers_db"
    });

}
connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;
