/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');
const fs = require('fs');
const { app } = require('../src/index');

chai.use(chaiHttp);
describe('Index', () => {
  describe('GET users/london', () => {
    it('Should respond with list of Users', () => {
      // Arrange
      const expected = JSON.parse(fs.readFileSync(`${__dirname}/mock/successUsers.json`));
      // Act
      chai.request(app)
        .get('/v1/users/london')
        .end((err, res) => {
          // Assert
          chai.expect(res).to.have.status(200);
          chai.expect(res).to.eql(expected);
          done();
        });
    });
  });
});
