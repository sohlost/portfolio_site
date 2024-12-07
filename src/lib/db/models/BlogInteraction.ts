import mongoose from 'mongoose';

const BlogInteractionSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
    unique: true
  },
  likes: {
    type: Number,
    default: 0
  },
  lastLiked: {
    type: Date,
    default: Date.now
  }
});

export const BlogInteraction = mongoose.models.BlogInteraction || mongoose.model('BlogInteraction', BlogInteractionSchema);
