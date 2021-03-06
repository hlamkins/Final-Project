// We need to obtain a user id from Auth 0 in order to setup the database for each individual user.  

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const petSchema = new Schema({
  photos: { type: String},
  name: { type: String, required: true },
  description: { type: String},
  petID: { type: Number, required: true }
});

const Pets = mongoose.model("Pets", petSchema);

module.exports = Pets;
