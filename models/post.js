import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create a new post schema
const postSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  prompt: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    require: true
  }
});

// export the model
module.exports = mongoose.model('Post', postSchema);