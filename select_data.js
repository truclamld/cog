const mysql = require('mysql');

const connect = mysql.createConnection({
    host: "viaduct.proxy.rlwy.net",
    user: "root",
    password: "BQbSkhmGZqciIFdVsAlYfxHPliNwCbSs",
    database: "railway",
    port: 39828
})

let cpuList = []

connect.connect(function(e) {
    if (e) throw e
    connect.query("SELECT * FROM CPU", function (err, result, fields) {
        if (err) throw err
        cpuList = result
    })
})

connect.end(function(err) {
});

exports.cpuList = cpuList