import mongoose from 'mongoose';

const DashboardSchema = new mongoose.Schema({
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
    type: Array,
    required: true,
  },
});

const Dashboard = mongoose.model('Dashboard', DashboardSchema);

export default Dashboard;
