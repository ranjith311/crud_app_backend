require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors")

app.use(cors())

app.use(express.json())
const connectDB = require("./helpers/mongo_init");
connectDB();



app.use("/api/", require("./routes/movieRoute"));
app.get("/",(req,res)=>{
    res.write(`
    <h1>Try these endpoints </h1>
    <h3>To get all the movies</h3>
    <code style="border:1px solid black;padding:5px">https://repulsive-sun-hat-fox.cyclic.app/api/movie</code>
    <h3>To get a movie by id</h3>
    <code style="border:1px solid black;padding:5px">https://repulsive-sun-hat-fox.cyclic.app/api/movie/63bbd844fcd3432ff57afd80</code>
    `)
    res.send()
    
})

app.listen(3000, (req, res) => console.log("Server is running at port 3000"));
