const requireLogin = require('../middlewares/requireLogin');
const cleanCache = require('../middlewares/cleanCache');

module.exports = (app) => {
  const { getIndex, getById, createBlog } = blogController();

  app.get('/api/blogs/:id', requireLogin, getById);

  app.get('/api/blogs', requireLogin, getIndex);

  app.post('/api/blogs', requireLogin, cleanCache, createBlog);
};
