const express = require("express");
const connect = require("./config/db");
const cors = require("cors");
const societyController = require("./controllers/society.controller");
const entryController = require("./controllers/userEntry.controller");
const exitController = require("./controllers/userExit.controller");

const { userRegister, userLogin, verifyOtp, resendOtp } = require("./controllers/userAuth.controller")


const app = express();
app.use(cors());
app.use(express.json());
app.post("/user/register", userRegister);
app.post("/user/login", userLogin)
app.use("/society",societyController);
app.post("/user/verify-otp",verifyOtp);
app.post("/user/resend-otp",resendOtp);
app.use("/user/entry", entryController);
app.use("/user/exit", exitController);

const start = async () => {
	try {
		await connect();
		app.listen(8000, () => {
			console.log("Listening on port 8000");
		});
	} catch (e) {
		console.log(e);
	}
};

module.exports = start;
