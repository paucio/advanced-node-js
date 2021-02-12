
const getBlogById = deps => async (userId, blogId) => {
  const { Blog, s3 } = deps;

  const blog = await Blog.findOne({
    _user: userId,
    _id: blogId
  });

  const key = `${userId}/${blog.imguuid}.jpeg`;
  const params = {
    Bucket: 'advancednodebucket',
    ResponseContentType: 'image/jpeg',
    Key: key
  };
  const signedUrl = s3.getSignedUrl('getObject', params);
  const blogObj = blog.toObject();
  blogObj.signedUrl = signedUrl;

  return blogObj;
};

module.exports = { getBlogById };
