const mongoose = require("mongoose")

const exitSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" },
    exit: { type: Boolean, default: false },
    outTime:{type:Number}
}, {
    timestamps: true,
    versionKey: false
})
const Exit = new mongoose.model("exit", exitSchema)

module.exports = Exit;