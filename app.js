
const express = require("express")
const app = express()

app.use("/api/",require("./routes/movieRoute"))

app.listen(3000,(req,res)=>console.log("Server is running at port 3000"))