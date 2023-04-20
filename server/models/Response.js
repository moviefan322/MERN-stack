const mongoose = require("mongoose");

const ResponseSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  yesno: {
    type: boolean,
  },
  day: {
    type: String,
  },
  location: {
    type: String,
  },
});

module.exports = mongoose.model("Response", ResponseSchema);
