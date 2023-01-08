const router = require("express").Router();

router
  .route("/movie")
  .get((req, res, next) => {
    res.send("get route")
  })
  .post((req, res, next) => {
    res.send("post route")
  })
  .put((req, res, next) => {
    res.send("put route")
  })
  .patch((req, res, next) => {
    res.send("patch route")
  })
  .delete((req, res, next) => {
    res.send("delete route")
  });

module.exports = router;
