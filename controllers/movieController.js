const Movie = require("../model/movieSchema")

module.exports.getAll =async(req, res, next) => {
   try {
    const allMovies =await Movie.find({})
    res.status(200).json(allMovies)
   } catch (error) {
    res.status(err.code || 500).json(error || "Something went wrong")
   }
}
module.exports.getOne=async(req,res,next)=>{
    try {
        const oneMovie = await Movie.findOne({id:req.params.id})
        res.status(200).json(oneMovie)
    } catch (error) {
        res.status(err.code || 500).json(error || "Something went wrong")
    }
}