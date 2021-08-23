import styled from "styled-components";

export const Container = styled.div`
  background-image: linear-gradient(#c6c5d6, #9b99bd, #3832a8);
  height: 100vh;
  font-family: "Josefin Sans", sans-serif;
`;
export const House = styled.img`
  width: 60%;
  border-radius: 50%;
 
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
export const AuthCont = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 62%;
  margin:4% auto;
`;
export const Nav = styled.div`
  background-color: navy;
  opacity: 50%;
  padding: 20px;
  height: 150px;
  border-bottom-left-radius: 5%;
  border-bottom-right-radius: 99%;
`;
export const Heading = styled.div`
  font-size: 40px;
  font-weight: 600;
  color: beige;
  text-align: center;
  cursor: pointer;
`;
export const Navicon = styled.div`
  display: flex;
  justify-content: space-around;
  width: 25%;
`;
export const ButtonPanel = styled.div`
background-color: #9b99bd;
padding:16% 12%;
border-radius: 50px;
`
export const Btn1 = styled.button`
  font-size: 30px;
  border: none;
  border-radius: 10px;
  padding: 10px 10%;
  margin-bottom: 30px;
  width: 100%;
  color: #c6c5d6;
  background-color: #3832a8;
  &:hover {
    transform: scale(1.1);
    background-color: #c6c5d6;
    color: #3832a8;
  }
`;
