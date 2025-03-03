import React from 'react';
import Titulo from '../Titulo';
import Paragrafo from '../Paragrafo';
import { Card, LinkBotao } from '../../container/Projetos/styles';

const Projeto = () => {
  return (
  <Card>
    <Titulo>Lista de Tarefas</Titulo>
    <Paragrafo tipo='secundario'>
      Lista de tarefas feita em Vue
    </Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
  )
}

export default Projeto;
