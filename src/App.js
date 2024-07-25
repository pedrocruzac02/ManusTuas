import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Início from './pages/Home';
import ManusTuas from './pages/Manustuas';
import Especialidades from './pages/Speciality-home';
import Equipa from './pages/Team';
import Contactos from './pages/User-help';
import Informacoes from './pages/About';
import Espaco from './pages/Space';
import X from './pages/specialities/Speciality1';
import NavBar from './components/navbar/NavBar';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Início />} />
        <Route path='/manustuas' element={<ManusTuas />} />
        <Route path='/especialidades' element={<Especialidades  />} />
        <Route path='/equipa' element={<Equipa  />} />
        <Route path='/apoio-utente' element={<Contactos />} />
        <Route path='/sobre-nos' element={<Informacoes />} />
        <Route path='/espaco' element={<Espaco />} />
        <Route path='/especialidade-1' element={<X />} />
      </Routes>
    </Router>
  );
}

export default App;

