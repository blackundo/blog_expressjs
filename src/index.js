const path = require('path');
const morgan = require('morgan');
const express = require('express');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));

app.set('view engine', 'ejs');
app.set('views', './src/resources/views');

//Routes init
route(app);

app.listen(port, () => { console.log(`Project running on port http://localhost:${port}`) });