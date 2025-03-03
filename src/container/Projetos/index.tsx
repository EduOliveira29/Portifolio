import React from "react";
import Titulo from "../../components/Titulo";
import Projeto from "../../components/Projeto";
import { Lista } from "../../components/Projeto/stytles";

const Projetos = () => {
  return (
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>
      <Lista>
        <li>
          <Projeto/>
        </li>
        <li>
          <Projeto/>
        </li>
        <li>
          <Projeto/>
        </li>
        <li>
          <Projeto/>
        </li>
        <li>
          <Projeto/>
        </li>
        <li>
          <Projeto/>
        </li>
        <li>
          <Projeto/>
        </li>
        <li>
          <Projeto/>
        </li>
      </Lista>
    </section>
  )
}

export default Projetos;
