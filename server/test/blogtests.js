const { request } = require("express");
const { OAuth2Client } = require('google-auth-library');


process.env.NODE_ENV == 'test';
xdescribe('Blog', function () {
    describe('fetch without login', function () {
        it('should get a not loged in error', (done) => {
            request.get('/api/blogs/60094df3cb4554f26109a7f7')
                .end((err, res) => {
                    console.log(res);
                    res.status.should.be.equal(401);
                    expect(res.text).to.have.string("You must log in!");
                    done();
                });
        });
    });

    describe('login', (done) =>{
        it('should get a list of blogs', (done)=>{

        })
    })
});