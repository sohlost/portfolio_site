import mongoose from 'mongoose';

const BlogInteractionSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  likes: {
    type: Number,
    default: 0,
    index: true
  },
  lastLiked: {
    type: Date,
    default: Date.now,
    index: true
  }
}, { timestamps: true });

BlogInteractionSchema.index({ slug: 1, likes: 1 });

export const BlogInteraction = mongoose.models.BlogInteraction || mongoose.model('BlogInteraction', BlogInteractionSchema);
