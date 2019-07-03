const net = require('net');

const client = function() {
  const conn = net.createConnection({ 
    host: '172.46.0.110',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log("Server says ", data);

  });

  return conn;
}

conn.setEncoding('utf8'); // interpret data as text

module.exports = client;
