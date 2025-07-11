const Coin = require("../models/Coin");
const axios = require("axios");

async function saveCoin() {
  try {
    const result = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1"
    );
    console.log("api called");
    result.data.forEach(async (data) => {
      const coin = new Coin({
        name: data.name,
        symbol: data.symbol,
        current_price: data.current_price,
        market_cap: data.market_cap,
        market_cap_change_24h: data.market_cap_change_24h,
        last_updated: data.last_updated,
      });
      await coin.save();
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { saveCoin };
