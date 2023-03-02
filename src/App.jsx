import './App.scss';
import Cards from './components/Cards';


function App() {
  return (
    <div className="App">
      <div className="main-container">
        <header className="header">
          <h1 className='titulo'>OLÁ!</h1>
          <p className='subtitulo'>Seja bem-vindo ao <strong>Grupo Casa das Fechaduras</strong></p>
          <h3 className='texto'>ESCOLHA QUAL DAS LOJAS VOCÊ DESEJA ENTRAR</h3>
        </header>
        <Cards />
      </div>
    </div>
  );
}

export default App;