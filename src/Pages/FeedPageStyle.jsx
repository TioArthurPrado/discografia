import styled from "styled-components";

//BodyStyle
export const BackGroundImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url('/Assets/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

//HeaderStyle
export const HeaderDiscografia = styled.header`
  display: grid;
  margin-top: 3vh;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  background-color: white;
  width: 75vw;
  height: 8rem;
`;

export const LogoHeaderStyle = styled.img`
  height: 11vh;
  padding-left: 1.5vw;
`;

export const TitleHeaderStyle = styled.span`
  display: flex;
  grid-column: 3/4;
  justify-content: flex-end;
  margin-right: 1vw;
  font-size: 3.5rem;
  font-family: arial;
  color: #737374;
`;

//MainStyle
export const MainStyle = styled.main`
  width: 75vw;
  height: 43rem;
  background-color: rgba(255, 255, 255, 0.6);
`;

export const DivMainStyle = styled.div`
  display: flex;
  align-items: center;
  font-family: arial;
  margin-left: 2.2vw;
  height: 5vh;
  font-weight: 550;
  color: #737374;
`;

export const DivStyleInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  width: 75vw;
  gap: 20px;
`;
export const InputStyle = styled.div`
  width: 55vw;
  height: 5vh;
  background-color: white;
  border-radius: 25px;
`;

export const ButtonStyle = styled.button`
  width: 15vw;
  height: 5vh;
  background-color: #149ae7;
  border-radius: 25px;
  border: none;
  color: white;
  font-family: arial;
  font-size: 18px;
`;
