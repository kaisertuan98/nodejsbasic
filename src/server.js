import express from 'express';
import * as dotenv from 'dotenv';
import configViewEngine from './configs/viewEngine.js';
dotenv.config ();

const app = express ();

configViewEngine (app);
const port = process.env.PORT || 8080;

app.get ('/', (req, res) => {
  res.render ('index.ejs');
});

app.listen (port, () => {
  console.log (`Example app listening on port ${port}`);
});
