const { expect } = require('chai');

const app = require('supertest')(require('../server'));

describe('Routes', () => {
  describe('GET /', () => {
    it('res.sends HELLOWORLD', async () => {
      const response = await app.get('/');
      expect(response.status).to.equal(200);
    });
  });
});
