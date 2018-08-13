const express = require("express");
const router = express.Router();
//So now when we create a route, instead of doing app.get() ... we do router.get  (note that .get can be .post or any request)
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");

//Load User Model
const User = require("../../models/User");

// @route    GET REQUEST to api/users/test
// @desc     Tests users route
// @access   Public
router.get("/test", (req, res) => res.json({ msg: "Users Route Works" }));

// @route    GET REQUEST to api/users/register
// @desc     Register a user
// @access   Public
router.post("/register", (req, res) => {
  //check if email already exists
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: 'Email already exists' });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: '200', // Size
        r: 'pg', // Rating
        d: 'mm' // Default
      });

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });


      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        })
      })
    }
  });
});

//we must export the router for the server.js file to pick it up
module.exports = router;
