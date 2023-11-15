// get the client
import mysql from 'mysql2';

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
});

// simple query
connection.query(
  'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

// with placeholder
connection.query(
  'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
  ['Page', 45],
  function(err, results) {
    console.log(results);
  }
);

export default connection

// import { createPool } from 'mysql';

// const connection = createPool({
//   host     : 'localhost', // Your connection adress (localhost).
//   user     : 'root',     // Your database's username.
//   password : 'root',        // Your database's password.
//   database : 'funstore'   // Your database's name.
// });

// // Starting our app.
// const app = express();

// // Creating a GET route that returns data from the 'users' table.
// app.get('/users', function (req, res) {
//     // Connecting to the database.
//     connection.getConnection(function (err, connection) {

//     // Executing the MySQL query (select all data from the 'users' table).
//     connection.query('SELECT * FROM items', function (error, results, fields) {
//       // If some error occurs, we throw an error.
//       if (error) throw error;

//       // Getting the 'response' from the database and sending it to our route. This is were the data is.
//       res.send(results)
//     });
//   });
// });

// // Starting our server.
// app.listen(8081, () => {
//  console.log('Go to http://localhost:3306/funstore so you can see the data.');
// });

// test(){
//   fetch('http://192.168.1.198:3306/funstore')
//     .then(response => response.json())
//     .then(users => console.warn(users))
// }


//  const db = () =>{

// const mysql = require('mysql');

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "funstore",
//   port: 8081,
// });

// con.connect(function(err: any) {
//   if (err) throw err;
//   console.log("Connected!");
// })}

// export default db

