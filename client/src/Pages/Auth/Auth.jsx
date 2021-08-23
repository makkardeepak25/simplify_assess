import React from "react";
import { Container, House, Heading, Nav, Navicon, AuthCont, Btn1, ButtonPanel } from "./Auth.styled";
import {useHistory} from "react-router-dom"
import HomeIcon from "@material-ui/icons/Home";
export function Auth() {
    const history = useHistory();
    const handleReg = () => {
        history.push("/auth/register")
    }
    const handleLog = () => {
            history.push("/auth/login")
        }    
  return (
    <Container>
      <Nav>
        <Navicon>
          {/* <HomeIcon color="secondary" /> */}
          <Heading> Simplify Entry</Heading>
        </Navicon>
      </Nav>
      <AuthCont>
        <House src="/house-logo.png" alt="house" />
        <ButtonPanel>
          <Btn1 onClick={handleReg}>Register</Btn1>
          <br />
          <Btn1 onClick={handleLog}>Login</Btn1>
        </ButtonPanel>
      </AuthCont>
    </Container>
  );
}
