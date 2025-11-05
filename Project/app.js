const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Set up EJS as view engine
app.set('view engine', 'ejs');
app.use(express.static("public"));


// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Store todos in memory
let items = [];

var example ="Working";
app.get('/example', function(req, res) {
    res.render('list',{ejes : items});
});

// Routes
app.get('/', function(req, res) {
    res.render('list', { items: items });
});

app.post('/', function(req, res) {
    let newItem = req.body.ele1;
    if (newItem) {
        items.push(newItem);
        console.log('Added new item:', newItem);
    }
    res.redirect('/');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));