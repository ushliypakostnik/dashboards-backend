// import AdminBro from 'admin-bro';
// import crypto from 'crypto';

import Dashboard from '../models/dashboard';

import config from '../config';

const Dashboards = {
  resource: Dashboard,
  options: {
    properties: {
      _id: {
        isVisible: false,
      },
      widgets: {
        isArray: true,
        availableValues: config.WIDGETS,
      },
    },
    /*
    actions: {
      new: {
        before: async (request) => {
          console.log('new before', request.payload);
          return request;
        },
        after: async (response) => {
          console.log('edit after', response);
          return response;
        },
      },
      edit: {
        before: async (request) => {
          console.log('edit before', request.payload);
          return request;
        },
        after: async (response) => {
          console.log('edit after', response);
          return response;
        },
      },
    }, */
  },
};

export default Dashboards;
