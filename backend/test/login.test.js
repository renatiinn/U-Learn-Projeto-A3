const request = require('supertest');
const app = require('../app');

describe('POST /login', () => {
  it('should return 200 with valid credentials', async () => {
    const res = await request(app).post('/login').send({
      email: 'user@ulearn.com',
      password: 'Senha123!'
    });
    expect(res.statusCode).toEqual(200);
  });
});
