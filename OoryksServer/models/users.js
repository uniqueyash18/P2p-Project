const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phonenumber:Number,
  password: String,
  authToken:String,
  isAmazonAccount:Boolean,
  isFlipkartAccount:Boolean,
  isMyntraAccount:Boolean
});

module.exports = mongoose.model('MyUsers', userSchema);
