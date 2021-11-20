import Dashboard from '../models/dashboard';

const Dashboards = {
  resource: Dashboard,
  options: {
    properties: {
      _id: {
        isVisible: false,
      },
    },
  },
};

export default Dashboards;
