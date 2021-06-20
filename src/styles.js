import styled from "styled-components";

export const BodyStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 5px;
  margin: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  justify-content: center;
  border: 2px solid #264653;
  border-radius: 10px;
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
  cursor: pointer;
`;
export const CardStyled1 = styled.div`
  width: 150px;
  height: 200px;
  background-color: black;
  border-radius: 10px;
`;

export const PTag = styled.p`
  text-align: center;
  vertical-align: middle;
  margin: auto;
`;

export const DivStyled = styled.div`
  justify-content: center;
  text-align: center;
`;

export const ImgStyled = styled.img`
  width: 125px;
  height: 175px;
`;
