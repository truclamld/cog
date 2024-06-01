const connect = require('./connect');
const conn = connect.conn;

const selectCPU = "SELECT * FROM CPU";
const selectGPU = "SELECT * FROM GPU";
const selectBoard = "SELECT * FROM MOTHERBOARD";
const selectRAM = "SELECT * FROM RAM";
const selectSSD = "SELECT * FROM SSD";
const selectHDD = "SELECT * FROM HDD";
const selectPSU = "SELECT * FROM PSU";
const selectCase = "SELECT * FROM PC_CASE";

conn.query(selectCPU, (error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error.stack);
      return;
    }
  
    exports.cpuList = results
});

conn.query(selectGPU, (error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error.stack);
      return;
    }
  
    exports.gpuList = results
});

conn.query(selectBoard, (error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error.stack);
      return;
    }
  
    exports.boardList = results
});

conn.query(selectRAM, (error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error.stack);
      return;
    }
  
    exports.ramList = results
});

conn.query(selectSSD, (error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error.stack);
      return;
    }
  
    exports.ssdList = results
});

conn.query(selectHDD, (error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error.stack);
      return;
    }
  
    exports.hddList = results
});

conn.query(selectPSU, (error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error.stack);
      return;
    }
  
    exports.psuList = results
});

conn.query(selectCase, (error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error.stack);
      return;
    }
  
    exports.caseList = results
});

