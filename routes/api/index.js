const router = require("express").Router();
const pets = require("./pets");
const users = require("./users");

router.use("/pets", pets);
router.use("/users", users);

module.exports = router;
