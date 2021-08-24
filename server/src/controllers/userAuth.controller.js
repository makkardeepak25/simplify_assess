const jwt = require("jsonwebtoken")
require("dotenv").config()
const User = require("./../models/user.model")
const { validationResult } = require("express-validator")
const UserOtp=require("./../models/userOtp.model")
const express = require("express")

const router = express.Router();


const newToken = (user) => {
    return jwt.sign({id: user.id}, process.env.JWT_SECRETKEY)
}
const generateOTP = () => {
    var digits = "0123456789";
    let otp = "";
    for (let i = 0; i < 6; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }
    return otp;
};

//Register procedure will trigger otp for the user 
//Currently We need a 3rd part service to send otp for verifications
//Otp Sending via sms/whatsapp is currently not built. 
//So for this MVP, please check the otp at backend and use that. 
const register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {

        //Check whether user already exists for this mobile number


        let existingUser = await User.findOne({ mobile: req.body.mobile })
        
        if (existingUser) {
            if (existingUser.verified == false) {
                //generateOTp and redirect

                //Already Existing OTP if yes update otherwise create it. 

                let existingOTP = await UserOtp.findOne({ userId: existingUser.id })
                var genreatedOTP = generateOTP()
                if (existingOTP) {
                    //Update the existing otp
                    const updatedOtp = await UserOtp.findByIdAndUpdate(existingOTP.id, { otpDigits: genreatedOTP }, { new: true })
                    console.log(updatedOtp)
                } else {
                    //create a otp for the first time
                    const userOtp = await UserOtp.create({ userId: user.id, verified: false, otpDigits:genreatedOTP  });
                    console.log(userOtp)
                }

                const token = newToken(existingUser)
                return res.status(201).json({token: token,data:existingUser})

            } else {
                const token = newToken(existingUser)
                return res.status(201).json({token: token,"message":"user already exits",data:existingUser})
            }
        } else {
            const user = await User.create(req.body)
            const userOtp = await UserOtp.create({ userId: user.id, verified: false, otpDigits: generateOTP() });
            console.log(userOtp)
            const token = newToken(user)
            return res.status(201).json({token: token,data:user})
        }
        
    } catch (e) {
        console.error(e)
        return res.status(500).json({status: "failed", message: "Something went wrong"})
    }
}
const login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const user = await User.findOne({mobile: req.body.mobile}).populate("societyId")
        if(!user){
            return res.status(401).json({status: "failed",message: "Parent doesnt exist. Kindly Register"})
        }
        const passwordMatch = await user.checkPassword(req.body.password)
        if (!passwordMatch){
            return res.status(401).json({status: "failed",message: "Incorrect Pasword"})
        }
        const token = newToken(user)
        return res.status(201).json({token: token, data: user})
    } catch (e) {
        return res.status(500).json({status: "failed",message: "Something went wrong."})
    }
}
const verifyOtp=async(req, res) => {
    var storedOtp = await UserOtp.findOne({ userId: req.body.userId })
    
    if (!storedOtp) {
        return res.status(404).json({"message":"Incorrect User"})
    } else {
        if (storedOtp.otpDigits === req.body.otp) {
            console.log("Both otp has matched")
            //1.Delete that otp.
            //2. Update the user to verified = true
            await UserOtp.findByIdAndDelete(storedOtp.id)

            const storedUser = await User.findByIdAndUpdate({ _id: req.body.userId },
                { verified: true }, { new: true })
            console.log(storedUser)
            return res.status(201).json({"message":"register success"})  
        } else {
            return res.status(403).json({ "message": "incorrect otp" })
        }
    }
}
const resendOtp = async (req, res) => {
    var storedOtp = await UserOtp.findOne({ userId: req.body.userId })

    if (!storedOtp) {
        console.log("no otp is already stored")
    } else {
        const userOtp = await UserOtp.findOneAndUpdate({ userId: req.body.userId }, { otpDigits: generateOTP() },
            { new: true });
        console.log(userOtp)
        return res.status(201)
    }

}


module.exports = {
    userRegister: register,
    userLogin: login,
    verifyOtp: verifyOtp,
    resendOtp:resendOtp
}