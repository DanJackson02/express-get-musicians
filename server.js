const express = require("express");
const app = express();
const {Musician} = require("./Musician")
const {sequelize} = require("./db")

const port = 3000;

//TODO
/*
1. In the `server.js` file, create a new endpoint for when the browser makes a `GET` request to http://localhost:3000/musicians.
2. The endpoint will need to fetch these musicians from the database. 
Have a look at the Sequelize Model's `findAll()` method from last week to help you with this. 
3. Send the musicians as a JSON Response (`response.json()`).
*/

app.get('/Musician', (request, response) => {
    Musician.findAll().then(Musician => {
      response.json(Musician);
    });
  });
  app.get('/Musician/:id', (req, res) => {
    const musicianId = req.params.id;
    Musician.findByPk(musicianId).then(Musician => {
      res.json(Musician);
    });
  });
  
app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening on port ${port}`)
})