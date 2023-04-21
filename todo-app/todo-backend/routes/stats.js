const express = require('express');
const { setAsync, getAsync } = require('../redis');
const router = express.Router();

router.get('/', async (req, res) => {
  res.send({
    added_todos: await getAsync("counter")
  })
})

module.exports = router;