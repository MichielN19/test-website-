const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get("/about", function(req, res) {
    res.sendFile(__dirname + '/views/about.html');
});

app.listen(port, function() {
    console.log(`Server is running on port ${port}`);
});