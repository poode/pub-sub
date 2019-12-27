const express = require('express');

const router = express.Router();

const { Subscription } = require('../models/Subscription');
const { processMatch } = require('../services/alert');

router.post('/', async (req, res, next) => {
  const signal = req.body;
  console.log('Processing Signal: ' + JSON.stringify(signal));
  const subList = await Subscription.find();
  matches = subList.filter(sub => sub.event == signal.event);
  matches.forEach(sub => processMatch(sub, signal));
  res.json(matches);
});

module.exports = router;