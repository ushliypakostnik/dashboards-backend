import { Router } from 'express';
import bodyParser from 'body-parser';

import Dashboard from '../models/dashboard';

const api = Router();

const jsonParser = bodyParser.json();

// API

// Test route
api.get('/api/test', (req, res) => {
  console.log('test route!');
  res.status(200).send('The flight is normal!');
});

// Dashboards
api.get('/api/dashboards', jsonParser, (req, res) => {
  Dashboard.find((error, dashboards) => {
    if (error) return res.status(400);

    const arr = dashboards.map(dashboard => ({ name: dashboard.name, path: dashboard.path, order: dashboard.order }));

    return res.status(200).json(arr);
  });
});

// Dashboard
api.get('/api/dashboard/:path', jsonParser, (req, res) => {
  Dashboard.findOne({ path: req.params.path }, (error, dashboard) => {
    if (error) return res.status(400);

    const widgets = dashboard.widgets.filter(el => el !== null);
    const obj = { name: dashboard.name, path: dashboard.path, widgets, id: dashboard.id };

    return res.status(200).json(obj);
  });
});

export default api;
