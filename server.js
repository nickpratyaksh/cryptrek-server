const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const cron = require("node-cron");
const { saveCoin } = require("./lib/utils");
require("dotenv").config();
var cors = require("cors");

const app = express();
const PORT = process.env.PORT;
app.use(cors());
mongoose.connect(process.env.MONGODB_URL);
cron.schedule("0 * * * *", saveCoin);

app.use(express.json());

app.use("/api", routes);

app.listen(PORT, () => console.log("Server running"));
