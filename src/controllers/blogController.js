const mongoose = require('mongoose');
const Blog = mongoose.model('Blog');


function blogController() {
  async function getIndex(req, res) => {
    const blogs = await Blog
      .find({ _user: req.user.id })
      .cache({ key: req.user.id });
    res.send(blogs);
  };

  async function getById() {
    const blog = await Blog.findOne({
      _user: req.user.id,
      _id: req.params.id
    });
    res.send(blog);
  };

  async function createBlog() {
    const { title, content } = req.body;

    const blog = new Blog({
      title,
      content,
      _user: req.user.id
    });

    try {
      await blog.save();
      res.send(blog);
    } catch (err) {
      res.send(400, err);
    }
  };

  return {
    getIndex,
    getById,
    createBlog
  };
};

module.exports = blogController;
