const mongoose = require("mongoose");
const { Response } = require("../models/Response");
const responseSeeds = require("./responseSeeds.json");

console.log("MONGO URI:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

db.once("open", async () => {
  try {
    await Response.deleteMany({});
    await Response.create(responseSeeds);
    console.log("All done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});

db.on("error", (err) => {
  console.error(err);
  process.exit(1);
});
