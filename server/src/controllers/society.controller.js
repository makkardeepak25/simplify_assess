const express = require("express");
const Society=require("./../models/society.model")
const router = express.Router()


router.post("/", async function (req, res) {
    try {
            var society = Society.create(req.body);
            return res.status(200).json({ message: "Registered Successfully!",data:society })
    }
    catch (e) {
        return res.status(401).send("Something Went Wrong")
    }
})
router.get("/", async function (req, res) {
    const societies = await Society.find({}).select("name").lean().exec();
return res.status(200).send(societies)
})

module.exports=router