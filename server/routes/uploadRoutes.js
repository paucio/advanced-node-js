const uuid = require('uuid/v1');
const requireLogin = require('../middlewares/requireLogin');
const s3 = require('../services/aws');

module.exports = (app) => {
  app.get('/api/upload', requireLogin, (req, res) => {
    const Key = `${req.user.id}/${uuid()}.jpeg`;
    s3.getSignedUrl('putObject', {
      Bucket: 'node-sdk-sample-52b33ad7-bd91-4354-b415-d497d4ba0b0d',
      ContentType: 'image/jpeg',
      Key
    }, (err, url) => res.send({ Key, url }));
  });
};
