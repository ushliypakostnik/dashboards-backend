import mongoose from 'mongoose';

import config from '../config';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: false,
  },
  encryptedPassword: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: [config.ROLE.admin, config.ROLE.user],
    required: true,
  },
});

const User = mongoose.model('User', UserSchema);

export default User;
