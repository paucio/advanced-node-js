const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');

const authenticatedUser = request.agent(app);
const unauthenticatedUser = request.agent(app);

describe('GET /api/blogs', () => {
  before((done) => {
    authenticatedUser.get('/auth/google').end(() => {
      done();
    });
  });
  after((done)=>{
    //authenticatedUser.get('/auth/logout');
    process.exit(done);
  })

  it('should return 200 response when user is logged in', (done) => {
    authenticatedUser.get('/api/blogs').end((req, res) => {
      console.log(res);
      expect(res.statusCode).to.be.equal(200);
      done();
    });
  });

  it('should return 401 response when an unauthenticated user tries to access /blogs', (done) => {
    unauthenticatedUser.get('/api/blogs').end((req, res) => {
      //console.log(res);
      expect(res.statusCode).to.be.equal(401);
      done();
    });
  });
});