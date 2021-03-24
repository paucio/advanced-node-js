const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./src/config/keys');

require('./src/models/User');
require('./src/models/Blog');
require('./src/config/cache');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useMongoClient: true });

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
require('./src/config/passport.js')(app);

require('./src/routes/authRoutes')(app);
require('./src/routes/blogRoutes')(app);
require('./src/routes/uploadRoutes')(app);

if (['production'].includes(process.env.NODE_ENV)) {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
