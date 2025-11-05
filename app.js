const express = require('express');
const path = require('path');

const app = express();

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static assets from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse POST requests
app.use(express.urlencoded({ extended: true }));

// Sample todo items
var items = [];

app.get('/example', (req, res) => {
    var item = req.body.ele1;
    items.push(item);
    res.redirect('/');
});

// Root route with error handling
app.get('/', (req, res) => {
    try {
        res.render('list', { newListItems: items });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Something went wrong!');
    }
});

// Handle new todo items
app.post('/', (req, res) => {
    try {
        const item = req.body.newItem;
        if (item) {
            items.push(item);
        }
        res.redirect('/');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Something went wrong!');
    }
});

// Start server with error handling
const PORT = process.env.PORT || 3020;  // Changed to 3020 to avoid port conflict
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}).on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Try another port.`);
    } else {
        console.error('Server error:', error);
    }
});