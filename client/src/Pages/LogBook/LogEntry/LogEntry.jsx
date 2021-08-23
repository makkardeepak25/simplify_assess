import React from 'react'
import { Qrreader } from '../../../Components/Qrreader';
import { Container, Heading, Nav, Navicon, LogCont } from "./LogEx.styled";


export function LogEntry() {
    var loggedUser = sessionStorage.getItem("loginData")
    loggedUser = JSON.parse(loggedUser)
    const name=loggedUser.name
    return (
        <Container>
      <Nav>
        <Navicon>
                    <Heading> Welcome, {name}</Heading>
        </Navicon>
          </Nav>
<Qrreader/>          
      
    </Container>
    )
}
