import { Route } from 'react-router';
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.scss';
import AvaliacaoBB from './pages/AvaliacaoBB';
import AvaliacaoCFER from './pages/AvaliacaoCFER';
import AvaliacaoCFN from './pages/AvaliacaoCFN';
import AvaliacaoCFSG from './pages/AvaliacaoCFSG';
import { Home } from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/grupocfn' element={<Home />}/>
        <Route path='/grupocfn/avaliacaocfn' element={<AvaliacaoCFN />}/>
        <Route path='/avaliacaocfer' element={<AvaliacaoCFER />}/>
        <Route path='/avaliacaocfsg' element={<AvaliacaoCFSG />}/>
        <Route path='/avaliacaobb' element={<AvaliacaoBB />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;