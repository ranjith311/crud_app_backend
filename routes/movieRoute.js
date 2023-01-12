const { getAll, getOne, updateMovie, deleteMovie } = require("../controllers/movieController");

const router = require("express").Router();

router
  .route("/movie")
  .get(getAll)

  .put((req, res, next) => {
    res.send("put route");
  })
  .patch((req, res, next) => {
    res.send("patch route");
  })
  .delete((req, res, next) => {
    res.send("delete route");
  });

router.route("/movie/:id").get(getOne);
router.route("/movie/:movieid").patch(updateMovie);
router.route("/movie/:movieid").delete(deleteMovie);

module.exports = router;
