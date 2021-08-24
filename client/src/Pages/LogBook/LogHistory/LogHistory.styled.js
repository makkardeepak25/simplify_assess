import styled from "styled-components";

export const Container = styled.div`
  background-image: linear-gradient(#c6c5d6, #9b99bd, #3832a8);
  min-height: 100vh;
  font-family: "Josefin Sans", sans-serif;
`;
export const Nav = styled.div`
  background-color: navy;
  opacity: 50%;
  padding: 20px;
  height: 100px;
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
  width: 40%;
`;
export const GridBox = styled.div`
  display: grid;
  width: 60%;
  margin: 10px auto;
  background-color: #c6c5d6;
  color: white;
  grid-template-columns: 70% 20%;
  padding: 20px;
  border-radius: 10px;
  font-size: 26px;
  font-weight: bold;
  text-transform: capitalize;
`;
export const ButtonDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 30%;
  margin: 10px auto;
`;
