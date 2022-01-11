import { Router } from 'express';
import bodyParser from 'body-parser';

import Dashboard from '../models/dashboard';

import config from '../config';

const api = Router();

const jsonParser = bodyParser.json();

// API

/* Test route
api.get('/api/test', (req, res) => {
  console.log('test route!');
  res.status(200).send('The flight is normal!');
}); */

// Dashboards
api.get('/api/dashboards', jsonParser, (req, res) => {
  Dashboard.find((error, dashboards) => {
    if (error) return res.status(400);

    const arr = dashboards
      .map(dashboard => ({ name: dashboard.name, path: dashboard.path, order: dashboard.order }))
      .sort((a, b) => a.order - b.order);

    return res.status(200).json(arr);
  });
});

// Dashboard
api.get('/api/dashboard/:path', jsonParser, (req, res) => {
  Dashboard.findOne({ path: req.params.path }, (error, dashboard) => {
    if (error) return res.status(400);

    const widgets = dashboard.widgets.filter(el => el !== null).map(widget => ({
      widget,
      data: {
        type: 'api',
        query: !widget.includes('collection') ? `${config.HOST}/api/widget` : `${config.HOST}/api/collection`,
      },
    }));
    const obj = { id: dashboard.id, widgets };

    return res.status(200).json(obj);
  });
});

// Widget
api.get('/api/widget', (req, res) => {
  console.log('test route!');
  res.status(200).send({
    tabs: [
      {
        sources: [{ content: { header: 'Я - заголовок тестового виджета!!!' }, filters: [] }],
      },
      {
        sources: [{ content: {}, filters: [] }],
      },
    ],
  });
});

// Collection
api.get('/api/collection', (req, res) => {
  console.log('test route!');
  res.status(200).send({
    widgets: [
      {
        widget: 'widget2',
        data: {
          type: 'api',
          query: `${config.HOST}/api/widget`,
        },
      },
      {
        widget: 'widget2',
        data: {
          type: 'api',
          query: `${config.HOST}/api/widget`,
        },
      },
      {
        widget: 'widget2',
        data: {
          type: 'api',
          query: `${config.HOST}/api/widget`,
        },
      },
      {
        widget: 'widget2',
        data: {
          type: 'api',
          query: `${config.HOST}/api/widget`,
        },
      },
    ],
  });
});

export default api;
