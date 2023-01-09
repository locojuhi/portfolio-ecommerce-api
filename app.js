const createError = require("http-errors");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const dotenv = require("dotenv");
const middlewares = require("./middlewares");

// load environment variables
dotenv.config();

// Load routes
const router = require("./routes");

// Express ap instance
const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

app.use("/", router);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
