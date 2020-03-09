const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/pub-sub', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('database is connected'))
  .catch(e => console.log('Error ===> ', e))