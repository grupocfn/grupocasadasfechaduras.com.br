import { Route } from 'react-router';
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.scss';
import AvaliacaoCFN from './pages/AvaliacaoCFN';
import { Home } from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/avaliacaocfn' element={<AvaliacaoCFN />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;