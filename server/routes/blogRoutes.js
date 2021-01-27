const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const cleanCache = require('../middlewares/cleanCache');
const uuid = require('uuid/v1');

const { accessKeyId, secretAccessKey } = require('../config/keys');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4',
  region: 'us-east-2'
});

const Blog = mongoose.model('Blog');
module.exports = (app) => {
  app.get('/api/blogs/:id', requireLogin, async (req, res) => {
    const blog = await Blog.findOne({
      _user: req.user.id,
      _id: req.params.id
    });

    let key = `${req.user.id}/${blog.imguuid}.jpeg`;
    let params = {
      Bucket: 'advancednodebucket',
      ResponseContentType: 'image/jpeg',
      Key: key
    };
    let signedUrl = s3.getSignedUrl('getObject', params);
    blogObj = blog.toObject();
    blogObj["signedUrl"] = signedUrl;
    res.send(blogObj);
  });

  app.get('/api/blogs', requireLogin, async (req, res) => {
    const blogs = await Blog
      .find({ _user: req.user.id })
      .cache({ key: req.user.id });
    res.send(blogs);
  });

  app.post('/api/blogs', requireLogin, cleanCache, async (req, res) => {
    const { title, content } = req.body;
    imguuid = uuid();
    const blog = new Blog({
      title,
      content,
      imguuid,
      _user: req.user.id
    });

    try {
      await blog.save();
      res.send(blog);
    } catch (err) {
      res.send(400, err);
    }
  });
};
