import PASS from './pass';

const env = process.env.NODE_ENV;

if (env === 'production') {
  // eslint-disable-next-line global-require
  require('dotenv').config();
}

const PORT = 8085;

const common = {
  VERSION: '0.1.0',
  TITLE: 'Dashboards constructor',
  PORT: process.env.PORT || PORT,
  PASS: {
    DB: {
      url: process.env.DB_URL || PASS.DB.url,
    },
    COOKIES: process.env.COOKIES || PASS.COOKIES,
    RANDOM_BYTES: PASS.RANDOM_BYTES,
  },
  ROOT_PATH: '/',
  BUCKET_ROOT: '/home/levon/projects/github/express-babel-bro',
  BUCKET: '/public',
  ROLE: {
    admin: 'admin',
    user: 'user',
  },
  VIEWS: {
    list: 'list',
    edit: 'edit',
    show: 'show',
  },
  WIDGETS: [
    { value: 'widget1', label: 'widget1' },
    { value: 'widget2', label: 'widget2' },
    { value: 'widget3', label: 'widget3' },
    { value: 'top1', label: 'top1' },
    { value: 'collection1', label: 'collection1' },
  ],
};

const development = {
  ...common,
  HOST: process.env.HOST || `http://localhost:${PORT}`,
  CORS_ENABLED: true,
  STATIC_SERVE: false,
};

const production = {
  ...common,
  HOST: process.env.HOST || '',
  CORS_ENABLED: false,
  STATIC_SERVE: false,
};

const config = {
  development,
  production,
};

export default config[env];
