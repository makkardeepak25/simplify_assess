import React from "react";
import { Container, Heading, Nav, Navicon, RegCont } from "./Register.styled";
import { TextField, Button, Box, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  text: {
    width: "100%",
    marginTop: "10px"
  }
});
const society = [
  { soc_name: "candeur rise", val: "cr" },
  { soc_name: "candeur fall", val: "cf" },
  { soc_name: "candeur landmark", val: "cl" },
  { soc_name: "candeur mark", val: "cm" }
];
const obj = {
  name: "",
  password: "",
  mobile: "",
  society: ""
};

export function Register() {
  const classes = useStyles();
    const [societies] = React.useState(society);
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
          <TextField name="society" onChange={handleChange} className={classes.text} select variant="outlined" label="Select Society">
            {societies.map(el => {
              return <MenuItem key={el.val} value={el.soc_name}>{el.soc_name}</MenuItem>;
            })}
          </TextField>
        </Box>
        <Box>
          <TextField name="password" onChange={handleChange} className={classes.text} variant="outlined" label="Password" />
        </Box>
        <Box>
          <TextField name="password" onChange={handleChange} className={classes.text} variant="outlined" label="Confirm Password" />
        </Box>
        <Box>
          <Button onClick={handleClick} className={classes.text} variant="outlined" color="primary">
            Register
          </Button>
        </Box>
      </RegCont>
    </Container>
  );
}
