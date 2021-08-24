const express = require("express");
const Exit = require("./../models/userExit.model");
const router = express.Router();

router.post("/", async function(req, res) {
  req.body.outTime = Date.now();
  var userExit = await Exit.create(req.body);

  try {
    return res.status(200).json({ message: "Exit Successfully!", data: userExit });
  } catch (e) {
    return res.status(501).send("Something Went Wrong");
  }
});
router.get("/log/:userId", async function(req, res) {
  const userId = req.params.userId;
  const userData = await Exit.find({ userId: userId })
    .sort("-outTime")
    .populate({ path: "userId", select: "name", populate: { path: "societyId", select: "name" } })
    .lean()
    .exec();
  return res.status(200).send(userData);
});
module.exports = router;
