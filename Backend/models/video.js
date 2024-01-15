const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  videotitle: {
    type: String,
    index: 'text',
    default_language: 'english',
  },
  author: String,
  tag: String,
  videoFileName: String,
  
});

const VideoModel = mongoose.model('Video', videoSchema);

module.exports = VideoModel;
