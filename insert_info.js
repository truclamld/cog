const connect = require('./connect');
const conn = connect.conn;
const sql = `INSERT INTO INFO (fname, lname, email, address, suburb, state, post, phone, note)
VALUES (?)
`


exports.insert = function insert(fname, lname, email, address, suburb, state, post, phone, note) {
    const value = [fname, lname, email, address, suburb, state, post, phone, note]
    

    conn.query(sql, [value], function (err, results) {
        if (err) throw err
        console.log("Inserted rows: "+ results.affectedRows)
    })
}