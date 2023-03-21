import React from 'react'
import Cards from '../components/Cards'

import './Home.scss';


export const Home = () => {
  return (
    <div className="Home">
      <div className="main-container">
        <header className="header">
          <h1 className='titulo'>OLÁ!</h1>
          <p className='subtitulo'>Seja bem-vindo ao <strong>Grupo Casa das Fechaduras</strong></p>
          <h3 className='texto'>ESCOLHA QUAL DAS LOJAS VOCÊ DESEJA ENTRAR</h3>
        </header>
        <Cards />
      </div>
    </div>
    )
}
