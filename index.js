const express = require('express');
const app = express();

app.get('/:branch/:sem/:sub', (req, res) => {
  const {branch, sem, sub} = req.params;
  res.download(`pdfs/${branch}/${sem}/${sub}.pdf`);
})

app.listen(3000, () => console.log(`Example app listening at http://localhost:3000`));