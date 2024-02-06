const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 8080;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log("API server listening on port ${port}");
});