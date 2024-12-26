const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Facebook Downloader Endpoint');
});

// Add logic for downloading Facebook videos here

module.exports = router;