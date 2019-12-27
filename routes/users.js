const express = require('express');
const router = express.Router();

const { User } = require('../models/User');

/* GET users listing. */
router.get('/', async(req, res, next) => {
  const userList = await User.find();
  res.json(userList);
});

router.post('/', async (req, res, next) => {
  const user = await User.create({ name: req.body.name });
  res.json(user);
})

module.exports = router;
