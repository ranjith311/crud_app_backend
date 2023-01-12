require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors")

app.use(cors())

app.use(express.json())
const connectDB = require("./helpers/mongo_init");
connectDB();



app.use("/api/", require("./routes/movieRoute"));

app.listen(3000, (req, res) => console.log("Server is running at port 3000"));
