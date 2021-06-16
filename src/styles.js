import styled from "styled-components";

export const BodyStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
  margin: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
  justify-content: center;
  border: 2px solid black;
  border-radius: 15px;
`;
export const HeaderStyled = styled.h1`
  font-size: 40px;
  text-align: center;
`;
export const SubheadingStyled = styled.p`
  font-size: 20px;
  text-align: center;
`;

export const CardStyled = styled.div`
  width: 125px;
  height: 175px;
  background-color: #264653;
  border-radius: 10px;
`;
