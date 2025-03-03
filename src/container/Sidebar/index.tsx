import React from "react";
import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import Avatar from "../../components/Avatar";
import { Descricao, BotaoTema, SideBarContainer } from "./styles";

const SideBar = () => {
  return (
    <aside>
      <SideBarContainer>
        <Avatar />
        <Titulo fontSize={20}>EduOliveira</Titulo>
        <Paragrafo fontSize={16} tipo="secundario">EduOliveira</Paragrafo>
        <Descricao tipo="principal" fontSize={12}>Engenherio Front-End</Descricao>
        <BotaoTema>Trocar tema</BotaoTema>
      </SideBarContainer>
    </aside>
  )
};

export default SideBar;
