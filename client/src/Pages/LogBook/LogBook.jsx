import React from "react";
import { Container, Heading, Nav, Navicon, LogCont } from "./LogBook.styled";
import { TextField, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {GiEntryDoor} from "react-icons/gi"
import {ImExit} from "react-icons/im"
import {VscHistory} from "react-icons/vsc"
import {FiLogOut} from "react-icons/fi"

const useStyles = makeStyles({
  text: {
    width: "100%",
    marginTop: "10px"
    },
    btn: {
        width: "100%",
        fontSize: "20px",
        color: "beige",
        background: "#4f4d77",
        marginBottom: "30px",
            "&:hover": {
                backgroundColor: "#171447",
                color: "#a6a3d4",
        }
    }
});
const obj = {
  otp: ""
};

export function LogBook() {
  const classes = useStyles();
    const history = useHistory();
    const handleEntry = () => {
        history.push("/logentry")
  }
  const handleLogout = () => {
    sessionStorage.clear()
    history.push("/")
  }
  return (
    <Container>
      <Nav>
        <Navicon>
          <Heading> Log Book</Heading>
        </Navicon>
          </Nav>
          <LogCont>
              <Box>
                  <Button onClick={handleEntry} className={classes.btn} startIcon={<GiEntryDoor/>}>LogBook Entry</Button>
              </Box>
              <Box>
                  <Button onClick={()=>{history.push("/logexit")}} className={classes.btn} startIcon={<ImExit/>}>LogBook Exit</Button>
              </Box>
              <Box>
                  <Button onClick={()=>{history.push("/loghistory")}} className={classes.btn} startIcon={<VscHistory/>}>Log History</Button>
              </Box>
              <Box>
                  <Button onClick={handleLogout} className={classes.btn} startIcon={<FiLogOut/>}>Log out</Button>
              </Box>
          </LogCont>
    </Container>
  );
}
