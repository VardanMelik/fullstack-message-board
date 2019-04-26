const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const port = process.env.port || 1234;

app.use(morgan('tiny'));
app.use(cors());

//app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: "Full Stack Message Board"
    })
});

app.listen(port, () => {
    console.log("Server is running on port: " + port);
});