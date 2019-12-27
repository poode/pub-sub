const express = require('express');
const _ = require('lodash');

const { Subscription } = require('../models/Subscription');
const { User } = require('../models/User');
const { Event } = require('../models/Event');

const router = express.Router();


router.get('/', async (req, res, next) => {
  subList = await Subscription.find();
  res.json(subList);
});

router.post('/', async (req, res, next) => {
  const user = await User.findOne({ name: req.body.user });
  const event = await Event.findOne({ name: req.body.event });
  if (!user || !event) {
    return res.json({
      message: 'Please send a user and an event name correctly!',
    });
  }
  sub = await Subscription.create(req.body);
  res.json(sub);
});

module.exports = router;