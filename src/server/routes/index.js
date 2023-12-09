const express = require("express");

// const rootdb = require("../db");

const db = require("../db");
const router = express.Router();

router.get("/booking", async function (req, res) {
  try {
    // let { } = req.body;
    let { added_on } = req.body.added_on;
    let result = await db.bookings();
    res.json(result);
  } catch (error) {
    res.send({ status: 0, error: error });
  }
});

module.exports = router;
