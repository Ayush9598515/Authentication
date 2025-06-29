require('dotenv').config();
const express = require("express");
const open = require("open");
const cors = require("cors");

const { DBConnection } = require("./database/db");
const AuthRouter = require("./Routes/AuthRouter.js");

const app = express();
const PORT = process.env.PORT || 2000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


DBConnection();


app.get("/", (req, res) => {
  res.send("🎉 Kaise ho mere bhai");
});
console.log("Yes ");
console.log("authRoutes is", (AuthRouter));
app.use("/api", AuthRouter);


app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
  open(`http://localhost:${PORT}`);
});
