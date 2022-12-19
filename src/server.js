import express from 'express';
import * as dotenv from 'dotenv';
import initWebRoute from './route/web.js';
import configViewEngine from './configs/viewEngine.js';
dotenv.config ();

const app = express ();

configViewEngine (app);
initWebRoute (app);

const port = process.env.PORT || 8080;

app.listen (port, () => {
  console.log (`Example app listening on port ${port}`);
});
