import React from "react";
import { Container, Heading, Nav, Navicon, GridBox, ButtonDiv } from "./LogHistory.styled";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  btn: {
    width: "60%",
    fontSize: "24px",
    fontWeight: "600",
    color: "#050547",
    margin: "10px auto",
    "&:hover": {
      color: "beige",
      backgroundColor: "#050547"
    },
    "&:focus": { color: "beige", backgroundColor: "#050547" }
  },
  btnlog: {
    width: "100%",
    fontSize: "24px",
    fontWeight: "600",
    backgroundColor: "beige",
    color: "black",
    margin: "10px auto",
    "&:hover": {
      color: "beige",
      backgroundColor: "#050547"
    }
  },
  box: {
    width: "20%",
    margin: "10px auto"
  }
});

export function LogHistory() {
  const classes = useStyles()
  var loggedUser = sessionStorage.getItem("loginData");
  loggedUser = JSON.parse(loggedUser);
  const history = useHistory();
  const userId = loggedUser._id;
  const name = loggedUser.name;
  const [entry, setEntry] = React.useState([]);
  const [exit, setExit] = React.useState([]);
  const [flag, setFlag] = React.useState(true);

  const getEntryData = () => {
    axios.get(`${process.env.REACT_APP_HOSTNAME}/user/entry/log/${userId}`).then(res => {
      console.log(res);
      setEntry(res.data);
    });
  };
  const getExitData = () => {
    axios.get(`${process.env.REACT_APP_HOSTNAME}/user/exit/log/${userId}`).then(res => {
      console.log(res);
      setExit(res.data);
    });
  };
  React.useEffect(() => {
    getEntryData();
    getExitData();
  }, []);
  const handleLog = () => {
    history.push("/logbook");
  };
  function time(t) {
    var date = new Date(t);
    return date.toString().slice(0, 25);
  }
  return (
    <Container>
      <Nav>
        <Navicon>
          <Heading> Log History</Heading>
        </Navicon>
      </Nav>
      <ButtonDiv>
        <Box>
          <Button className={classes.btn}
            onClick={() => {
              setFlag(true);
            }}
          >
            Entries
          </Button>
        </Box>
        <Box>
          <Button className={classes.btn}
            onClick={() => {
              setFlag(false);
            }}
          >
            Exit
          </Button>
        </Box>
      </ButtonDiv>
      <div>
        {flag ? (
          <div>
            {entry?.map(el => {
              return (
                <GridBox>
                  <div>
                    <div>{el.userId.name}</div>
                    <br />
                    <div>{el.userId.societyId.name}</div>
                  </div>
                  <div>{time(el.inTime)}</div>
                </GridBox>
              );
            })}
          </div>
        ) : (
          <div>
            {exit?.map(el => {
              return (
                <GridBox>
                  <div>
                    <div>{el.userId.name}</div>
                    <div>{el.userId.societyId.name}</div>
                  </div>
                  <div>{time(el.outTime)}</div>
                </GridBox>
              );
            })}
          </div>
        )}
      </div>
      <Box className={classes.box}>
        <Button className={classes.btnlog} color="secondary" onClick={handleLog}>
          Return to LogBook
        </Button>
      </Box>
    </Container>
  );
}
