import React from "react";
import { Container, Heading, Nav, Navicon } from "./LogEx.styled";
import QrReader from "react-qr-reader";
import axios from "axios";
import {useHistory} from "react-router-dom"

export function LogExit() {
  var loggedUser = sessionStorage.getItem("loginData");
  loggedUser = JSON.parse(loggedUser);
  const history = useHistory();
  const userId = loggedUser._id;
  const societyName = loggedUser.societyId.name;
  const name = loggedUser.name;
  const [result, setResult] = React.useState("No result");

  const handleScan = data => {
    if (data) {
      setResult(data);
    }
  };
  console.log(result);
  const handleError = err => {
    console.error(err);
  };
  const handleExit = () => {
    var payload = {
      userId: userId,
      exit: true
    };
    axios
      .post(`${process.env.REACT_APP_HOSTNAME}/user/exit`, payload)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };
  if (societyName === result) {
    handleExit();
    history.push("/exit/thanks");
  }
  return (
    <Container>
      <Nav>
        <Navicon>
          <Heading> Thank you, {name}</Heading>
        </Navicon>
      </Nav>
      <div>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "30%", height: "30%", margin: "50px auto" }}
        />
        <p>{result}</p>
      </div>
    </Container>
  );
}
