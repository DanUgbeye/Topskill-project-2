require('dotenv').config();
const express = require('express');
const app = express();
const { router } = require('./routes/routes');
const {connectDb} = require('./model/profileSchema');

app.use(express.json());

app.use('/', router);

const port = process.env.PORT;

const conn = connectDb();
conn.then( async () => {
  app.listen(port, () => {
    console.log(`app started on port ${port}`);
;  });
})
