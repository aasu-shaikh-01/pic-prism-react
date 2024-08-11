// 4 steps procedure to make server

// Express ko bulna hoga is file me
const express = require("express");
const dotenv = require("dotenv");
const { readdirSync } = require("fs");
const { connectDb } = require("./connection");

// binding this env
dotenv.config();
// Express ko call karna padega ek variable me
const app = express();
// port define karna hoga - Port hota hai darwaja
const port = process.env.PORT || 5000;

connectDb()

// Making routes
app.get("/", (req, res) => {
  res.send("<center><h1>Server Running Dudes...</h1></center>");
});

// importing and using routes dynamically:
readdirSync("./routes").map((route) =>
  app.use("/", require(`./routes/${route}`))
);

// type of requests:
// 1. GET -> To get the data from the server.
// 2. POST -> To post the data to the server.
// 3. PUT -> To update the data on the server.
// 4. DELETE -> To delete the data from the server.

// Server ko listen karna hoga
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// // import the route here:
// // const authRoute = require("./routes/authRoutes");
// // import authRoute from "./routes/authRoutes.js";
// // import authRoute from "../server"

// // 4 steps procedure to make server.
// // Express ko bulana hoga is file me.
// import express from "express";
// // import express from "express";
// import { config } from "dotenv";
// config();
// // import dotenv from "dotenv";

// import { readdirSync } from "fs";
// // const fs = require("fs");
// // const { readdirSync } = fs;

// // binding this env

// // Express ko call karna hoga ek variable me.
// const app = express();
// // port define karna hoga.

// const port = process.env.PORT || 5000;
// // Making Routes.
// app.get("/", (req, res) => {
//   res.send("<center><h1>Server Running Dudes...</h1></center>");
// });

// // How to use routes:
// // app.use("/", authRoute);

// // importing and using routes dynamically:
// readdirSync("./routes").map((route) => {
//   // app.use("/", require(`./routes/${route}`));
//   app.use("/", `import ./routes/${route}`);
// });
// // authRoute
// // Server ko listen karna hoga.
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
