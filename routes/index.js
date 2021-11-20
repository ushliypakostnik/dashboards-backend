import { Router } from 'express';
import bodyParser from 'body-parser';

import Dashboard from '../models/dashboard';

const api = Router();

const jsonParser = bodyParser.json();

// API

// Test route
api.get('/test', (req, res) => {
  console.log('test rout!');
  res.status(200).send('The flight is normal!');
});

// Dasboards
api.get('/dashboards', jsonParser, (req, res) => {
  Dashboard.find((error, dashboards) => {
    if (error) return res.status(400);

    const arr = dashboards.map(dashboard => ({ path: dashboard.path, order: dashboard.order }));

    return res.status(200).json(arr);
  });
});

export default api;
