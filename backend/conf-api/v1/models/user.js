const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  firstName: String,
  lastName: String
});

module.exports = mongoose.model("TB_USER", UserSchema);