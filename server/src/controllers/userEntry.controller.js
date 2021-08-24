const express = require("express");
const Entry = require("./../models/userEntry.model");
const router = express.Router();

router.post("/", async function (req, res) {
    req.body.inTime = Date.now();
    var userEntry = await Entry.create(req.body);
    
  try {
    return res.status(200).json({ message: "Entered Successfully!", data: userEntry });
  } catch (e) {
    return res.status(501).send("Something Went Wrong");
  }
});
router.get("/log/:userId", async function (req, res) {
    const userId=req.params.userId
  const userData = await Entry
    .find({ userId: userId}).sort("-inTime").populate({path:"userId",select:"name",populate:{path:"societyId",select:"name"}}).select("userId inTime")
    .lean()
    .exec();
  return res.status(200).send(userData);
});

module.exports = router;
