const mongoose = require('mongoose');

const societySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    contact: { type: Number, required: true },
    userId: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: "user" }],
    barCode: { type: String, required: false }
}, {
    timestamps: true,
    versionKey:false
})

const Society = new mongoose.model("society", societySchema);

module.exports = Society;

