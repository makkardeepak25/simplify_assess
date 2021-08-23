const express = require("express");
const Speakeasy = require("speakeasy");

var router = express.Router();


// router.post("/otp-secret", (request, response, next) => {
//     var secret = Speakeasy.generateSecret({ length: 20 });
//     response.send({ "secret": secret.base32 });
// });
// router.post("/otp-generate", (request, response, next) => {
//     response.send({
//         "token": Speakeasy.totp({
//             secret: request.body.secret,
//             encoding: "base32"
//         }),
//         "remaining": (30 - Math.floor((new Date()).getTime() / 1000.0 % 30))
//     });
// });
// router.post("/otp-validate", (request, response, next) => {
//     response.send({
//         "valid": Speakeasy.totp.verify({
//             secret: request.body.secret,
//             encoding: "base32",
//             token: request.body.token,
//             window: 0
//         })
//     });
// });

router.post("/otp-generate", (req, res) => {
    const generateOTP = () => {
        var digits = "0123456789";
        let otp = "";
        for (let i = 0; i < 6; i++) {
          otp += digits[Math.floor(Math.random() * 10)];
        }
        return otp;
      };
})

module.exports = router;