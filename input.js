
let connection; // Stores the active TCP connection object.
const setupInput = function (conn) {

    connection = conn;

    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);
    return stdin;
  };
  
  const handleUserInput = function (data) {
      if (data === '\u0003') { // ctrl-c
        process.exit();
      }
      if (data === 'w') { //"Move: up"
        connection.write("Move: up");
      };
      if (data === 'a') { //"Move: left"
        connection.write("Move: left");
      };
      if (data === 's') { //"Move: down"
        connection.write("Move: down");
      };
      if (data === 'd') { //"Move: right"
        connection.write("Move: right");
      };
    };

    module.exports = { setupInput };
