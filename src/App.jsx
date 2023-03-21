import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import AvaliacaoBB from './pages/AvaliacaoBB';
import AvaliacaoCFER from './pages/AvaliacaoCFER';
import AvaliacaoCFN from './pages/AvaliacaoCFN';
import AvaliacaoCFSG from './pages/AvaliacaoCFSG';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/grupocasadasfechaduras' element={<Home />}/>
        <Route path='/grupocasadasfechaduras/avaliacaocfn' element={<AvaliacaoCFN />}/>
        <Route path='/grupocasadasfechaduras/avaliacaocfer' element={<AvaliacaoCFER />}/>
        <Route path='/grupocasadasfechaduras/avaliacaocfsg' element={<AvaliacaoCFSG />}/>
        <Route path='/grupocasadasfechaduras/avaliacaobb' element={<AvaliacaoBB />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;