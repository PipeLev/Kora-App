import React, { useState, createContext, useContext } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

import HomeScreen from './screens/HomeScreen';
import KoraScreen from './screens/KoraScreen';
import CuestionarioScreen from './screens/CuestionarioScreen';
import SemaforoScreen from './screens/SemaforoScreen';
import ResultadosScreen from './screens/ResultadosScreen';
import NosotrosScreen from './screens/NosotrosScreen';

const DrawerContext = createContext();

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error('useDrawer debe usarse dentro de App');
  }
  return context;
};

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(prev => !prev);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <DrawerContext.Provider value={{ drawerOpen, toggleDrawer, closeDrawer }}>
      <div className="app">
        {drawerOpen && <div className="drawer-overlay" onClick={closeDrawer} />}

        <nav className="drawer" style={{ transform: drawerOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
          <div className="drawer-header">
            <span className="drawer-logo">KORA</span>
            <button className="drawer-close" onClick={closeDrawer}>
              <FaTimes />
            </button>
          </div>
          <ul className="drawer-menu">
            <li><NavLink to="/" onClick={closeDrawer} end>Principal</NavLink></li>
            <li><NavLink to="/resultados" onClick={closeDrawer}>Resultados</NavLink></li>
            <li><NavLink to="/semaforo" onClick={closeDrawer}>Violentómetro</NavLink></li>
            <li><NavLink to="/nosotros" onClick={closeDrawer}>Nosotros</NavLink></li>
            <li><NavLink to="/kora" onClick={closeDrawer}>Kora</NavLink></li>
          </ul>
        </nav>

        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/cuestionario" element={<CuestionarioScreen />} />
            <Route path="/resultados" element={<ResultadosScreen />} />
            <Route path="/semaforo" element={<SemaforoScreen />} />
            <Route path="/nosotros" element={<NosotrosScreen />} />
            <Route path="/kora" element={<KoraScreen />} />
          </Routes>
        </main>
      </div>
    </DrawerContext.Provider>
  );
}

export default App;