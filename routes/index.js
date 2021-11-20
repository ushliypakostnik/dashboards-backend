import { Router } from 'express';

const api = Router();

// API

// Test route
api.get('/test', (req, res) => {
  console.log('test rout!');
  res.status(200).send('The flight is normal!');
});

export default api;
