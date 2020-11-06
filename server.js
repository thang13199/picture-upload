const express = require('express');
const app = express();
const cors = require('cors');
 
let router = require('./app/routers/upload.router.js');
app.use('/', router);
app.use(cors());
const port = process.env.PORT || 5000 ;



// Create a Serverdd
const server = app.listen(port, function () {
 
  let host = server.address().address;
  console.log("App listening at http://%s:%s", host, port); 
})
