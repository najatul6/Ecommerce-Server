require('dotenv').config()
const express = require('express')
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// const authRouter = require("./routes/auth/auth-routes");
const authRouter = require("./routes/auth/auth-routes")

// create a database connection

mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Server is connected to the database");
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

const app = express()
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "cache-control",
      "expires",
      "pragma",
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});