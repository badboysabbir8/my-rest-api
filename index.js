const express = require('express');
const path = require('path');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/fbdl', require('./routes/fbdl'));
app.use('/ytdl', require('./routes/ytdl'));
app.use('/tiktokdl', require('./routes/tiktokdl'));

// Default route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
