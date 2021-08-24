import React from "react";
import { Container, Heading, Nav, Navicon, RegCont } from "./Register.styled";
import { TextField, Button, Box, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  text: {
    width: "100%",
    marginTop: "10px"
  }
});

const obj = {
  name: "",
  password: "",
  mobile: "",
  societyId: ""
};

export function Register() {
  const classes = useStyles();
  const [societies, setSocieties] = React.useState([]);
  const [state, setState] = React.useState(obj);
  const history = useHistory();
  const [token, setToken] = React.useState("");
  const getSocietyData = () => {
    axios.get(`${process.env.REACT_APP_HOSTNAME}/society`).then(res => {
      setSocieties(res.data);
    });
  };
  React.useEffect(() => {
    getSocietyData();
  }, []);
  console.log(societies);
  const handleChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleClick = () => {
    var payload = {
      name: state.name,
      mobile: Number(state.mobile),
      password: state.password,
      societyId: state.society
    };
    // console.log(payload);
    axios
      .post(`${process.env.REACT_APP_HOSTNAME}/user/register`, payload)
      .then(res => {
        console.log(res.data.data);
        setToken(res.data.token);
        sessionStorage.setItem("user",JSON.stringify(res.data.data))
        // history.push("/user/otpauth")
      })
      .catch(err => {
        console.log(err.message);
      });
  };
  const handleLogin = () => {
    history.push("/auth/login")
  }
  if (token) {
    <Redirect push to={"/auth/otpauth"} />;
    history.push("/auth/otpauth")
    setToken("")
  }
  return (
    <Container>
      <Nav>
        <Navicon>
          <Heading> Register</Heading>
        </Navicon>
      </Nav>
      <RegCont>
        <Box>
          <TextField name="mobile" onChange={handleChange} className={classes.text} variant="outlined" label="Mobile Number" />
        </Box>
        <Box>
          <TextField name="name" onChange={handleChange} className={classes.text} variant="outlined" label="Name" />
        </Box>
        <Box>
          <TextField
            name="society"
            onChange={handleChange}
            className={classes.text}
            select
            variant="outlined"
            label="Select Society"
          >
            {societies.map(el => {
              return <MenuItem value={el._id}>{el.name}</MenuItem>;
            })}
          </TextField>
        </Box>
        <Box>
          <TextField name="password" type="password" onChange={handleChange} className={classes.text} variant="outlined" label="Password" />
        </Box>
        
        <Box>
          <Button onClick={handleClick} className={classes.text} variant="outlined" color="secondary">
            Register
          </Button>
        </Box>
        <Box>
          <Button onClick={handleLogin} color="primary">
            GO to Login
          </Button>
        </Box>
      </RegCont>
    </Container>
  );
}
