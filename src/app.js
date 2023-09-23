const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) => {
    // res.send("Hello World")
    res.sendFile(path.join(__dirname, 'pages/index.html'));
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on https://localhost:${port}`);
})