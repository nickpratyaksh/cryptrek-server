const mongoose = require("mongoose");

const coinSchema = new mongoose.Schema({
  name: String,
  symbol: String,
  current_price: String,
  market_cap: String,
  market_cap_change_24h: Number,
  last_updated: String,
});

const Coin = mongoose.model("Coin", coinSchema);
module.exports = Coin;
