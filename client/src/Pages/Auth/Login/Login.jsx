import React from "react";
import { Container, Heading, Nav, Navicon, RegCont } from "./Login.styled";
import { TextField, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

export function Login() {
  const classes = useStyles();
    const [state, setState] = React.useState(obj);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state,[name]:value})
    }
    const handleClick = (e) => {
        var payload = {
            ...state
        }
        console.log(payload)
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
          <TextField name="mobile" type="text" onChange={handleChange} className={classes.text} variant="outlined" label="Mobile Number" />
        </Box>
        <Box>
          <TextField name="password" type="password" onChange={handleChange} className={classes.text} variant="outlined" label="Password" />
              </Box>
              <Box>
          <Button onClick={handleClick} className={classes.text} variant="outlined" color="primary">
            Login
          </Button>
        </Box>
      </RegCont>
    </Container>
  );
}
