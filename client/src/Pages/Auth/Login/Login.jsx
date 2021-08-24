import React from "react";
import { Container, Heading, Nav, Navicon, RegCont } from "./Login.styled";
import { TextField, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import {useHistory} from "react-router-dom"
const useStyles = makeStyles({
  text: {
    width: "100%",
    marginTop: "10px"
  }
});
const obj = {
  password: "",
  mobile: ""
};
console.log(process.env.REACT_APP_AUTH_DOMAIN)
export function Login() {
  const classes = useStyles();
  const [state, setState] = React.useState(obj);
  const [token, setToken] = React.useState("")
  const history = useHistory()
  const handleRegister = () => {
    history.push("/auth/register")
  }
  const handleChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleClick = e => {
    var payload = {
      mobile: Number(state.mobile),
      password:state.password
    };
    axios
      .post(`${process.env.REACT_APP_HOSTNAME}/user/login`, payload)
      .then(res => {
        console.log(res);
        setToken(res.data.token)
        sessionStorage.setItem("loginData",JSON.stringify(res.data.data))
      })
      .catch(err => {
        console.log(err.response);
      });
  };
  if (token.length > 0) {
    history.push("/logbook")
  }
  return (
    <Container>
      <Nav>
        <Navicon>
          <Heading> Login</Heading>
        </Navicon>
      </Nav>
      <RegCont>
        <Box>
          <TextField
            name="mobile"
            type="text"
            onChange={handleChange}
            className={classes.text}
            variant="outlined"
            label="Mobile Number"
          />
        </Box>
        <Box>
          <TextField
            name="password"
            type="password"
            onChange={handleChange}
            className={classes.text}
            variant="outlined"
            label="Password"
          />
        </Box>
        <Box>
          <Button onClick={handleClick} className={classes.text} variant="outlined" color="secondary">
            Login
          </Button>
        </Box>
        <Box>
          <Button onClick={handleRegister} color="primary">
            GO to register
          </Button>
        </Box>
      </RegCont>
    </Container>
  );
}
