const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const cors = require('cors');
app.use(cors());
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// API to get projects
app.get('/me3870/portfolio/admin/api/projects', (req, res) => {
  fs.readFile('./projects.json', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading projects file');
    }
    res.json(JSON.parse(data));
  });
});

// API to update projects
app.post('/me3870/portfolio/admin/api/projects', (req, res) => {
  const newProjects = req.body;
  fs.writeFile('./projects.json', JSON.stringify(newProjects, null, 2), (err) => {
    if (err) {
      return res.status(500).send('Error writing projects file');
    }
    res.send('Projects updated successfully');
  });
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
