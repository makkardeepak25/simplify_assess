const express = require("express");
const Society=require("./../models/society.model")
const router = express.Router()


router.post("/", async function (req, res) {
    var allSoc=Society.findOne({"name":req.body.name}).lean().exec()
    var society = Society.create(req.body);
    try {
        if (society.name === allSoc.name) {
            return res.status(200).send("user already exists")
        } else {
            return res.status(200).send("Registered Successfully!")
        }
        
    }
    catch (e) {
        return res.status(200).send("Error")
    }
})
router.get("/", async function (req, res) {
    const societies = await Society.find({}).select("name").lean().exec();
return res.status(200).send(societies)
})

module.exports=router