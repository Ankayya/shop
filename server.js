const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// SQLite setup
const db = new sqlite3.Database('./users.db', (err) => {
    if (err) {
        console.error('Could not connect to database', err);
    } else {
        console.log('Connected to SQLite database');
    }
});

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT
    )`);
    // Insert a sample user if not exists
    db.get('SELECT * FROM users WHERE username = ?', ['test'], (err, row) => {
        if (!row) {
            db.run('INSERT INTO users (username, password) VALUES (?, ?)', ['test', 'password']);
        }
    });
});

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, row) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Database error' });
        }
        if (row) {
            res.json({ success: true });
        } else {
            res.json({ success: false, message: 'Invalid credentials' });
        }
    });
});

// Register endpoint
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.json({ success: false, message: 'Username and password required' });
    }
    db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Database error' });
        }
        if (row) {
            return res.json({ success: false, message: 'Username already exists' });
        }
        db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], function(err) {
            if (err) {
                return res.status(500).json({ success: false, message: 'Database error' });
            }
            res.json({ success: true });
        });
    });
});

// Dashboard route (for redirect after login)
app.get('/dashboard', (req, res) => {
    res.send('<h1>Welcome to the Dashboard!</h1><p>Login successful.</p>');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}); 