
const mongoose = require("mongoose")

const movieSchema = mongoose.Schema({
    id:Number,
    title:String,
    description:String,
    year:Number,
    directed_by:String,
    budjet:String,
    box_office:String
})

const Movie  = mongoose.model("movie",movieSchema)
module.exports = Movie;