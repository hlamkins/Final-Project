const router = require("express").Router();
const bookRoutes = require("./pets");

// Book routes
router.use("/pets", bookRoutes);

module.exports = router;
