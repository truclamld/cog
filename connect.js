const mysql = require('mysql2');

//External MySQL server (Railway.app). 
//Due to some issues, this won't connect from eduroam network if this back-end is run locally
//But it will work if accessed from the URL provided on Canvas, or this back-end is run locally on non-eduroam network
const conn = mysql.createConnection({
    host: "viaduct.proxy.rlwy.net",
    user: "root",
    password: "BQbSkhmGZqciIFdVsAlYfxHPliNwCbSs",
    database: "railway",
    port: 39828
})

conn.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err.stack);
      return;
    }
    console.log('Connected to the database.');
});

exports.conn = conn;