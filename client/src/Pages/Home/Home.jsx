import React from "react";
import { Container, House, Heading, Nav,Navicon } from "./Home.styled";
import HomeIcon from "@material-ui/icons/Home";
import { useHistory } from "react-router-dom";

export function Home() {
const history=useHistory()
    const handleClick = () => {
        history.push("/auth")
    }
  return (
    <Container>
      <Nav>
        <Navicon>
          {/* <HomeIcon color="secondary" /> */}
          <Heading> Simplify Entry</Heading>
        </Navicon>
      </Nav>
      <House onClick={handleClick} src="/house-logo.png" alt="house" />
    </Container>
  );
}
