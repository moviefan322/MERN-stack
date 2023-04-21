const express = require("express");
const colors = require("colors");
const cors = require("cors");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const port = process.env.PORT || 3001;

const app = express();

//Connect Database
connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.use(express.static(path.join(__dirname, "build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.listen(port, console.log(`Server started on port ${port}`));
