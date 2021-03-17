const router = require("express").Router();

router.route("/")
  .get((req, res, next) => {
    res.send("To be completed");
  });

module.exports = router;
