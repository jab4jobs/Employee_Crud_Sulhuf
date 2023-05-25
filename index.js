const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const port = 9000;
app.listen(port, () => {
    console.log('Server Running', port);
})