const net = require('net');
const connect = function() {
  const conn = net.createConnection({
    host: '172.46.0.110',
    port:50541
  });
  conn.setEncoding('utf8');
  conn.on('connect', () => { //inside the on('xxx'), xxx is the handler
    console.log('Successfully connected!');
    conn.write('Name: Azzam');
  });
  conn.on('data', (data) => {
    console.log("Server says: ", data);
  });
  return conn;
};
module.exports = connect;