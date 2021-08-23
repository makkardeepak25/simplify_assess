const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    mobile: {
      type: Number,
      required: true, unique:true
    },
    societyId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "society"
    },
    password: {
      type: String,
      required: true
    },
    verified: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.pre("save", function(next) {
  if (!this.isModified("password")) return next();
  bcrypt.hash(this.password, 8, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    next();
  });
});

userSchema.methods.checkPassword = function(password) {
  const userPassword = this.password;
  return new Promise((res, rej) => {
    bcrypt.compare(password, userPassword, (err, same) => {
      if (err) return rej(err);
      res(same);
    });
  });
};

const User = mongoose.model("user", userSchema);

module.exports = User;
