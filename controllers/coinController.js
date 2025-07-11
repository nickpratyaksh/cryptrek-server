const axios = require("axios");

const fetchCoins = async (req, res) => {
  var url =
    "https://api.coingecko.com/api/v3/coins" +
    "?vs_currency=usd" +
    "&order=market_cap_desc" +
    "&per_page=10" +
    "&page=1";

  try {
    const result = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1"
    );
    console.log("/coins");
    res.status(200).json(result.data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { fetchCoins };
