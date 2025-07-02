const express = require('express');
const path = require('path');
const applyMiddleware = require('./middleware');
const app = express();
const PORT = process.env.PORT || 3001;

// Apply best-practices middleware
applyMiddleware(app);

// Serve static files from the Vite build
app.use(express.static(path.join(__dirname, 'client', 'dist')));

// Example RESTful API routes (to be expanded)
app.get('/api/users', (req, res) => {
  // Placeholder: return list of users
  res.json([]);
});

app.post('/api/messages', (req, res) => {
  // Placeholder: send a message
  res.status(201).json({ message: 'Message sent!' });
});

// All other GET requests not handled before will return the frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
}); 