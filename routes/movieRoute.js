const { getAll, getOne } = require("../controllers/movieController");

const router = require("express").Router();

router
  .route("/movie")
  .get(getAll)
  .post((req, res, next) => {
    res.send("post route");
  })
  .put((req, res, next) => {
    res.send("put route");
  })
  .patch((req, res, next) => {
    res.send("patch route");
  })
  .delete((req, res, next) => {
    res.send("delete route");
  });

router.route("/movie/:id")
  .get(getOne)

module.exports = router;
