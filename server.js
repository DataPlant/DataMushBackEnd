const express = require('express')

//Routing//
const mushRoutes = require('./controllers/mushController')

//Porting//
const port = 4000
const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
  });

  //Middling//
  app.use(express.json())
  app.use('/mushrooms', mushRoutes)

  app.listen(port, () => {
      console.log(`Server is running on port ${port}`)
  })