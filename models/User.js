const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

//Exporting
//1. set to a variable in this called it User,
//2. set mongoose.model()
//3. pass in the name we want to use as the first Parameter
//4. pass the 2nd parameter which is the actual Schema
module.exports = User = mongoose.model("users", UserSchema);
