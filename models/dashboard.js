import mongoose from 'mongoose';

const DashboardSchema = new mongoose.Schema({
  path: {
    type: String,
    required: true,
  },
  widgets: {
    type: Array,
    required: true,
  },
});

const Dashboard = mongoose.model('Dashboard', DashboardSchema);

export default Dashboard;
