const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
  const { getUpload } = uploadController();

  app.get('/api/upload', requireLogin, getUpload);
};
