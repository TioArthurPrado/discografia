import React from "react";
import background from "../Assets/background.png";
import logo from "../Assets/logo.png";
import {
  BackGroundImage,
  ButtonStyle,
  DivMainStyle,
  DivStyleInput,
  HeaderDiscografia,
  InputStyle,
  LogoHeaderStyle,
  MainStyle,
  TitleHeaderStyle,
} from "./FeedPageStyle";
import { Playlists } from "../Components/Playlists/Playlist";

export function FeedPage() {
  return (
    <main>
      <HeaderDiscografia>
        <LogoHeaderStyle src={logo} alt="" />
        <TitleHeaderStyle>Discografia</TitleHeaderStyle>
      </HeaderDiscografia>
      <MainStyle>
        <DivMainStyle>
          <span>Digite uma palavra chave</span>
        </DivMainStyle>
        <DivStyleInput>
          <InputStyle placeholder="Digite sua pesquisa aqui" type="text" />
          <ButtonStyle>Procurar</ButtonStyle>
        </DivStyleInput>
        <Playlists />
      </MainStyle>
    </main>
  );
}
