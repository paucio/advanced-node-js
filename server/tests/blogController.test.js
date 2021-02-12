const { getBlogById } = require('../controllers/blogController');

describe('tests for blog controller', () => {
  it('should call the blog db dependencies with passed args', async () => {
    const blogMock = { findOne: jest.fn() };
    blogMock.findOne.mockResolvedValueOnce({});
    const spy = jest.spyOn(blogMock, 'findOne');

    const deps = { Blog: blogMock };

    await getBlogById(deps)('someId', 'anotherId');

    expect(spy).toHaveBeenCalledWith({ _user: 'someId', _id: 'anotherId' });
  });

  it('should return a valid blogObject', async () => {


  });
});
