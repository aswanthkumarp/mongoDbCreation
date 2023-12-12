const express = require('express');
const PORT = process.env.PORT || 8000;
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const  route  = require('./routes');
require('dotenv').config();



app.use(cors());
app.use(express.json());
app.use('/api', route);



mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log('db connected successfully');
  })
  .catch((err) => {
    console.log(err.message);
  });


  app.listen(PORT, () => {
  console.log('server connected sucessully on PORT:', PORT);
});
