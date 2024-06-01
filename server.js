const express = require('express');
const path = require('path');
const app = express();

// Serve the static files from the Vue app's dist directory
app.use(express.static(path.join(__dirname, 'dist')));

//Parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serve index.html for any route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

//Process the POST request from form
app.post('/thanks', (req, res) => {
    const { fname, lname, email, address, suburb, state, post, phone, note } = req.body;
    console.log("Name: " + fname + " " + lname);
    console.log("Email: " + email);
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
})

// Start the server on port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
