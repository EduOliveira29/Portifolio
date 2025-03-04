import React from "react";
import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import Avatar from "../../components/Avatar";
import { Descricao, BotaoTema, SideBarContainer } from "./styles";

type Props = {
  trocaTema: () => void;
}

const SideBar = (props: Props) => {
  return (
    <aside>
      <SideBarContainer>
        <Avatar />
        <Titulo fontSize={20}>EduOliveira</Titulo>
        <Paragrafo fontSize={16} tipo="secundario">EduOliveira</Paragrafo>
        <Descricao tipo="secundario" fontSize={12}>Engenherio Front-End</Descricao>
        <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
      </SideBarContainer>
    </aside>
  )
};

export default SideBar;
