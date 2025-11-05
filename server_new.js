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

// Sample todo items (separate in-memory list for this server)
let items = [];

app.get('/example', (req, res) => {
    const item = req.body.ele1;
    if (item) items.push(item);
    res.redirect('/');
});

// Root route
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
        if (item) items.push(item);
        res.redirect('/');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Something went wrong!');
    }
});

// Start new server on a different port
const PORT = process.env.PORT || 3040;
app.listen(PORT, () => {
    console.log(`New server is running on http://localhost:${PORT}`);
}).on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Try another port.`);
    } else {
        console.error('Server error:', error);
    }
});
