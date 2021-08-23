import styled from "styled-components";


export const Container = styled.div`
 background-image: linear-gradient(#c6c5d6, #9b99bd, #3832a8);
 height: 100vh;
 font-family: 'Josefin Sans', sans-serif;
`
export const House = styled.img`
width: 20%;
border-radius:50%;
margin-left: 40%;
cursor: pointer;
&:hover{
    transform: scale(1.1);
}
`
export const Nav = styled.div`
background-color: navy;
opacity: 50%;
padding:20px;
height: 150px;
border-bottom-left-radius:5% ;
border-bottom-right-radius:99%;
`
export const Heading = styled.div`
font-size:40px;
font-weight:600;
color: beige;
text-align: center;
cursor: pointer;
`
export const Navicon = styled.div`
display:flex;
justify-content:space-around;
width:25%;
`