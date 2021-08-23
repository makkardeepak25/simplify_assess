import React from 'react'
import { Qrreader } from '../../../Components/Qrreader'
import { Container, Heading, Nav, Navicon } from "./LogEx.styled";


export function LogExit() {
    var loggedUser = sessionStorage.getItem("loginData")
    loggedUser = JSON.parse(loggedUser)
    const name=loggedUser.name
    return (
        <Container>
      <Nav>
        <Navicon>
                    <Heading> Thank you, {name}</Heading>
        </Navicon>
          </Nav>
        <Qrreader/>
          
      
    </Container>
    )
}
