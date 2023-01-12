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
        const oneMovie = await Movie.findOne({_id:req.params.id})
        if(oneMovie==null) throw Error("Not found")
        res.status(200).json(oneMovie)
    } catch (error) {
        res.status(error.code || 500).json(error.message || "Something went wrong")
    }
}

module.exports.updateMovie=async(req,res,next)=>{
    try {
        const movie = await Movie.findByIdAndUpdate(
                req.params.movieid,
                req.body,
                {new: true},
        )
        res.status(200).json({message:"updated successfully",movie})
    } catch (error) {
        res.status(error.code || 500).json(error.message || "Something went wrong")
    }
}

module.exports.deleteMovie=async(req,res,next)=>{
    try {
        const movie = await Movie.findByIdAndDelete(req.params.movieid)
        res.status(200).json({message:"deleted successfully",movie})
    } catch (error) {
        res.status(error.code || 500).json(error.message || "Something went wrong")
    }
}