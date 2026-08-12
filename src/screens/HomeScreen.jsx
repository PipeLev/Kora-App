import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaThermometerHalf, FaBars } from 'react-icons/fa';
import { useDrawer } from '../App';

const HomeScreen = () => {
  const navigate = useNavigate();
  const { toggleDrawer } = useDrawer();

  return (
    <div className="home-container">
      <header className="home-header">
        <span className="header-title">Principal</span>
        <button className="hamburger-btn" onClick={toggleDrawer}>
          <FaBars size={24} color="#80166d" />
        </button>
      </header>

      <div className="home-logo-wrapper">
        <img src="/logo-horizontal.png" alt="KORA" className="home-logo-img" />
      </div>

      <p className="home-subtitle">Mi termómetro Relacional</p>

      <button className="home-main-btn" onClick={() => navigate('/cuestionario')}>
        <FaThermometerHalf size={20} />
        <span>Mi Termómetro Relacional</span>
      </button>

      <div className="home-grid">
        <button className="home-grid-btn" onClick={() => navigate('/resultados')}>
          Resumen de<br />resultados
        </button>
        <button className="home-grid-btn" onClick={() => navigate('/semaforo')}>
          Violentómetro y<br />sus niveles
        </button>
      </div>

      <div className="home-footer">
        <button className="home-footer-btn" onClick={() => navigate('/kora')}>
          Kora
        </button>
        <button className="home-footer-btn" onClick={() => navigate('/nosotros')}>
          ¿Quienes Somos?
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;