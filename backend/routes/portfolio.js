 
const express = require('express');
const router = express.Router();

router.get('/projects', (req, res) => {
  const projects = [
    { id: 1, name: "Project One", description: "Description of project one" },
    { id: 2, name: "Project Two", description: "Description of project two" },
  ];
  res.json(projects);
});

module.exports = router;
