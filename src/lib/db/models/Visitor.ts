import mongoose from 'mongoose';

const VisitorSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

export const Visitor = mongoose.models.Visitor || mongoose.model('Visitor', VisitorSchema);
