import React from "react";
import { Qrreader } from "../../../Components/Qrreader";
import { Container, Heading, Nav, Navicon } from "./LogHistory.styled";

export function LogHistory() {
  var loggedUser = sessionStorage.getItem("loginData");
  loggedUser = JSON.parse(loggedUser);
  const name = loggedUser.name;
  return (
    <Container>
      <Nav>
        <Navicon>
          <Heading> Log History</Heading>
        </Navicon>
      </Nav>
    </Container>
  );
}
