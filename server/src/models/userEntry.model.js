const mongoose = require("mongoose")

const entrySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" },
    entry: { type: Boolean, default: false },
    inTime:{type:Number,required:true}
}, {
    timestamps: true,
    versionKey: false
})
const Entry=new mongoose.model("entrylog",entrySchema)
module.exports=Entry