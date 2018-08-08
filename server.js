const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to Mongo DB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB is connected"))
  .catch(err => console.log(err));

//Creating first route to test server
app.get("/", (req, res) => res.send("Hello from the Backend!"));

// Use Routes
// This code is saying ... this path goes to this file
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

//Define Port. Which is either On Amazon Web Service (which is going to be deployed on heroku) or run locally on port 5000
const port = process.env.PORT || 5000;

//Listen on Port & console.log
app.listen(port, () => console.log(`Server running on port ${port}`));
