const { getAll, getOne, updateMovie, deleteMovie } = require("../controllers/movieController");

const router = require("express").Router();

router
  .route("/movie")
  .get(getAll)

router.route("/movie/:id").get(getOne);
router.route("/movie/:movieid").patch(updateMovie);
router.route("/movie/:movieid").delete(deleteMovie);

module.exports = router;
