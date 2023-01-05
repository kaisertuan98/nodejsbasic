import express from 'express';
import * as dotenv from 'dotenv';
import initWebRoute from './route/web.js';
import configViewEngine from './configs/viewEngine.js';
// import connection from './configs/connectDB.js';
dotenv.config ();
const app = express ();

app.use (express.json ());
app.use (express.urlencoded ({extended: true}));

configViewEngine (app);
initWebRoute (app);

const port = process.env.PORT || 8080;

app.listen (port, () => {
  console.log (`Example app listening on port ${port}`);
});
