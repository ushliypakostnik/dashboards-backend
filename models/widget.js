import mongoose from 'mongoose';

const WidgetSchema = new mongoose.Schema({
  i: {
    type: String,
    required: true,
  },
  widget: {
    type: String,
    required: true,
  },
  tabs: {
    type: Array,
    required: true,
  },
});

const Widget = mongoose.model('Widget', WidgetSchema);

export default Widget;
