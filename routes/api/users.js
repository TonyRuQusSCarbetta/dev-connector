const express = require("express");
const router = express.Router();
//So now when we create a route, instead of doing app.get() ... we do router.get  (note that .get can be .post or any request)

router.get("/test", (req, res) => res.json({ msg: "Users Route Works" }));

//we must export the router for the server.js file to pick it up
module.exports = router;
