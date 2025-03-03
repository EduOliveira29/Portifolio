import React from 'react'
import EstiloGlobal, { Container } from './styles'
import SideBar from './container/Sidebar'
import Sobre from './container/Sobre'
import Projetos from './container/Projetos'

function App() {
  return (
    <>
    <EstiloGlobal />
    <Container >
      <SideBar />
        <main>
          <Sobre />
          <Projetos/>
        </main>
    </Container >
    </>
  )
}

export default App
