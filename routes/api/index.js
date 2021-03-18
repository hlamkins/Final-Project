const router = require("express").Router();
const pets = require("./pets");


router.use("/pets", pets);

module.exports = router;
