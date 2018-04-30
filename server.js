// Require the following npm packages inside of the server.js file express and bodyparser:

var express = require("express");
var bodyParser = require("body-parser");
// Require the following app = express:

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Codingforthefuture",
  database: "burgers_db"
});
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });



// Root get route
app.get("/", function(req, res) {
    connection.query("SELECT * FROM tasks;", function(err, data) {
      if (err) throw err;
  
      // Test it
      console.log('The solution is: ', data);
  
      // Test it
      // return res.send(data);

// Post route -> back to home





  
  // Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });