const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello CI/CD 🚀');
});
app.get('/name', (req, res) => {
  res.send('CI CD Demo');
});

test('GET / returns Hello CI/CD 🚀', async () => {
  const res = await request(app).get('/');
  expect(res.text).toBe('Hello CI/CD 🚀');
});

test('GET /name returns CI CD Demo', async () => {
  const res = await request(app).get('/name');
  expect(res.text).toBe('CI CD Demo');
});
