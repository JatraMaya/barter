const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("Welcome to barter API");
});

module.exports = router;
