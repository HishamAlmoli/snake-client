const { connect } = require("./client");

const { setupInput } = require("./input");

console.log("Connecting ...");


setupInput(connect());
// setup interface to handle user input from stdin

/*
Here’s the info for the Snek server!
View the snakes : http://165.227.47.243:8000/view
Host: 165.227.47.243
Port: 50541
*/