const express = require('express');
const pool = require('../modules/pool');

const router = express.Router()

  router.post('/', (req, res) => {
    console.log('entered server-side POST', req.body);
    let newReflection = req.body;
    let queryText = `INSERT INTO "reflection" (topic, description) VALUES ($1, $2);`;
    pool.query(queryText, [newReflection.topic, newReflection.description])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log('Error from server-side POST:', error )
      res.sendStatus(500);
    });
  });
  

  module.exports = router;