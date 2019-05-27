const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.listen(5000);

console.log('Server started at http://localhost:5000');