const express = require('express');
const path = require('path');
const app = express();
const data = require('./select_data.js')
const inserter = require('./insert_info.js')

// Serve the static files from the Vue app's dist directory
app.use(express.static(path.join(__dirname, 'dist')));

//Parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Get components data when visiting build page
app.get('/data', (req, res) => {
    res.json({
        cpuList: data.cpuList,
        gpuList: data.gpuList,
        boardList: data.boardList,
        ramList: data.ramList,
        ssdList: data.ssdList,
        hddList: data.hddList,
        psuList: data.psuList,
        caseList: data.caseList
    })
});

//Serve index.html for any route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});



//Process the POST request from form
app.post('/thanks', (req, res) => {
    const { fname, lname, email, address, suburb, state, post, phone, note } = req.body;
    inserter.insert(fname, lname, email, address, suburb, state, post, phone, note)
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
})

// Start the server on port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
