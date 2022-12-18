const express = require ('express');
const app = express ();
const port = 5500;

app.get ('/hello', (req, res) => {
  res.send ('Hello Viet Nam!');
});

app.listen (port, () => {
  console.log (`Example app listening on port ${port}`);
});
