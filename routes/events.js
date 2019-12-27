const express = require('express');
const router = express.Router();

const { Event } = require('../models/Event');

/* GET events listing. */
router.get('/', async(req, res, next) => {
  const EventList = await Event.find();
  res.json(EventList);
});

router.get('/:id', async (req, res, next) => {
  const event = await Event.findOne({ _id: req.params.id });
  res.json(event);
});

router.post('/', async (req, res, next) => {
  const event = await Event.create({ name: req.body.name });
  res.json(event);
});

router.delete('/:id', async (req, res, next) => {
  await Event.deleteOne({ _id: req.params.id });
  res.json({ message: 'success' });
});

module.exports = router;
