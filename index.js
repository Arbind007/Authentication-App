const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();
const app = express();

app.use(express.json());

const PORT = 5000;
app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);

app.use("/users", require("./routes/users"));
// app.use("/todos", require("./routes/todo"));
