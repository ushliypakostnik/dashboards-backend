/* eslint-disable import/named */
import mongoose from 'mongoose';

const DashboardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  path: {
    type: String,
    required: true,
    unique: true,
  },
  order: {
    type: Number,
    required: true,
    unique: true,
  },
  widgets: {
    type: [String],
    required: true,
  },
});

const Dashboard = mongoose.model('Dashboard', DashboardSchema);

export default Dashboard;
