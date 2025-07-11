const Coin = require("../models/Coin");

const fetchHistory = async (req, res) => {
  const history = await Coin.find();
  console.log("/history");
  res.send(history);
};

module.exports = { fetchHistory };
