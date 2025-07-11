const express = require("express");
const { fetchCoins } = require("../controllers/coinController");
const { fetchHistory } = require("../controllers/historyController");

const router = express.Router();

router.get("/coins", fetchCoins);

router.get("/history", fetchHistory);

module.exports = router;
