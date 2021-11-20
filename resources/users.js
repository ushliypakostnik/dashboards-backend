import bcrypt from 'bcrypt';

import config from '../config';
import User from '../models/user';

// Roles
const canModifyUsers = ({ currentAdmin }) => currentAdmin && currentAdmin.role === config.ROLE.admin;

const Users = {
  resource: User,
  options: {
    properties: {
      encryptedPassword: {
        isVisible: false,
      },
      password: {
        type: 'string',
        isVisible: {
          list: false,
          edit: true,
          filter: false,
          show: false,
        },
      },
      _id: {
        isVisible: false,
      },
    },
    actions: {
      new: {
        before: async (request) => {
          if (request.payload.password) {
            request.payload = {
              ...request.payload,
              encryptedPassword: await bcrypt.hash(request.payload.password, 10),
              password: undefined,
            };
          }
          return request;
        },
        isAccessible: canModifyUsers,
      },
      edit: { isAccessible: canModifyUsers },
      delete: { isAccessible: canModifyUsers },
    },
  },
};

export default Users;
