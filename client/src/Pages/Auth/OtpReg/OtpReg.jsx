import React from "react";
import { Container, Heading, Nav, Navicon, RegCont } from "./OtpReg.styled";
import { TextField, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios"
import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
  text: {
    width: "100%",
    marginTop: "10px"
  }
});
const obj = {
  otp: ""
};

export function OtpReg() {
  const classes = useStyles();
  const history = useHistory()
  const [state, setState] = React.useState(obj);
  const [status,setStatus] = React.useState(0);
  var user = sessionStorage.getItem("user")
  user =JSON.parse(user)
  const userId=user&&user._id

  const handleChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleResendOtp = () => {
    var payload = {
      userId: userId,
    };
    console.log(payload)
    axios
    .post(`${process.env.REACT_APP_HOSTNAME}/user/resend-otp`, payload)
    .then(res => {
      setStatus(0);
      // history.push("/user/otpauth")
    })
    .catch(err => {
      console.log(err.message);
    });
  }
  const handleClick = () => {
    var payload = {
      userId: userId,
      otp:state.otp
    };
    console.log(payload)
    axios
    .post(`${process.env.REACT_APP_HOSTNAME}/user/verify-otp`, payload)
      .then(res => {
        setStatus(res.status);
      // history.push("/user/otpauth")
    })
      .catch(res => {
        setStatus(403)
      console.log(res.message);
    });  };
  // React.useEffect(() => {
  //   generateOTP();
  // }, []);
  if (status === 201) {
    history.push("/auth/login")
  }
  return (
    <Container>
      <Nav>
        <Navicon>
          <Heading> Enter OTP</Heading>
        </Navicon>
      </Nav>
      <RegCont>
        <Box>
          <TextField
            name="otp"
            type="text"
            onChange={handleChange}
            className={classes.text}
            variant="outlined"
            label="Enter OTP"
          />
        </Box>
        {status>0 && status!==200? <div>Generate a new OTP</div>:null}
        <Button onClick={handleResendOtp} disabled={status>0 && status === 200}>Resend OTP!</Button>
        <Box>
          <Button onClick={handleClick} className={classes.text} variant="outlined" color="secondary">
            Submit OTP
          </Button>
        </Box>
      </RegCont>
    </Container>
  );
}
