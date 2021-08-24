import React from "react";
import { Container, Heading1, Nav1, Navicon2 } from "./LogEx.styled";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  btn: {
    width: "40%",
    fontSize: "24px",
    fontWeight: "600",
    backgroundColor: "beige",
    color: "#050547",
    margin: "10px auto",
    "&:hover": {
      color: "beige",
      backgroundColor: "#050547"
    },
    box: {
      width: "20%",
      margin: "10px 20%"
    }
  }
});

export function ExitThanks() {
    const classes=useStyles();
  var loggedUser = sessionStorage.getItem("loginData");
  loggedUser = JSON.parse(loggedUser);
  const history = useHistory();
  const userId = loggedUser._id;
  const societyName = loggedUser.societyId.name;
  const name = loggedUser.name;
  const hanldeLog = () => {
    history.push("/logbook");
  };
  return (
    <Container>
      <Nav1>
        <Navicon2>
          <Heading1>
            {" "}
            Thank you for Visiting  {societyName}, {name}
          </Heading1>
        </Navicon2>
      </Nav1>
      <div style={{ width: "30%", height: "30%", margin: "50px auto" }}>
        <Button className={classes.btn} color="secondary" onClick={hanldeLog}>
          Okay!
        </Button>
      </div>
    </Container>
  );
}
