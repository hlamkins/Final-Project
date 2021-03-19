const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  auth0sub: { type: String, required: true },
  savedPets: [
    {
      type: Schema.Types.ObjectId,
      ref: "Pets"
    }
  ]






});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;