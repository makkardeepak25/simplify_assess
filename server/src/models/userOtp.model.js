const mongoose = require("mongoose");

const userOtpSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user"
    },
    otpDigits: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const UserOtp = mongoose.model("userOtp", userOtpSchema);
module.exports = UserOtp;
