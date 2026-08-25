import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaRedo, FaHome, FaBars } from 'react-icons/fa';
import { useDrawer } from '../App';
import { obtenerNivel } from './SemaforoScreen';

const ResultadosScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toggleDrawer } = useDrawer();
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let data = location.state;

    if (!data) {
      const stored = localStorage.getItem('ultimoResultado');
      if (stored) {
        try {
          data = JSON.parse(stored);
        } catch (e) {
          data = null;
        }
      }
    }

    if (data && data.nivel !== undefined) {
      const nivelData = obtenerNivel(data.nivel);
      setResultado({
        ...data,
        titulo: nivelData ? nivelData.titulo : 'Nivel no encontrado',
        color: nivelData ? nivelData.color : '#000000',
        descripcion: nivelData ? nivelData.descripcion : ''
      });
    } else {
      setResultado(null);
    }
    setLoading(false);
  }, [location.state]);

  const goToHome = () => navigate('/');
  const goToCuestionario = () => navigate('/cuestionario');
  const goToSemaforo = () => navigate('/semaforo');
  const repetirCuestionario = () => {
    localStorage.removeItem('ultimoResultado');
    navigate('/cuestionario');
  };

  if (loading) {
    return (
      <div className="resultados-container">
        <header className="resultados-header">
          <span className="header-title">Resultados</span>
          <button className="hamburger-btn" onClick={toggleDrawer}>
            <FaBars size={24} color="#80166d" />
          </button>
        </header>
        <div className="loading-container">
          <p>Cargando resultados...</p>
        </div>
      </div>
    );
  }

  if (!resultado) {
    return (
      <div className="resultados-container">
        <header className="resultados-header">
          <span className="header-title">Resultados</span>
          <button className="hamburger-btn" onClick={toggleDrawer}>
            <FaBars size={24} color="#80166d" />
          </button>
        </header>
        <div className="resultados-empty">
          <div className="empty-icon">📋</div>
          <h2>No hay resultados disponibles</h2>
          <p>Completa el cuestionario para obtener un diagnóstico de tu relación.</p>
          <button className="btn-empty-action" onClick={goToCuestionario}>
            Ir al cuestionario
          </button>
        </div>
      </div>
    );
  }

  const { nivel, color, titulo, puntaje, porcentaje } = resultado;

  return (
    <div className="resultados-container">
      <header className="resultados-header">
        <span className="header-title">Resultados</span>
        <button className="hamburger-btn" onClick={toggleDrawer}>
          <FaBars size={24} color="#80166d" />
        </button>
      </header>

      <div className="resultados-info">
        <p>El resultado del cuestionario indica que te encuentras en el siguiente nivel del Violentómetro:</p>
      </div>

      <div className="resultado-nivel-principal" style={{ borderColor: color }}>
        <div className="nivel-grande" style={{ color: color }}>
          Nivel {nivel}
        </div>
        <div className="nivel-titulo" style={{ color: color }}>
          {titulo}
        </div>
        <div className="nivel-detalle">
          <span>Puntaje: {puntaje} / 270</span>
          <span>Porcentaje: {porcentaje}%</span>
        </div>
      </div>

      <div className="resultado-actions">
        <button className="btn-secondary" onClick={goToSemaforo}>
          Ver Violentómetro
        </button>
        <button className="btn-secondary" onClick={repetirCuestionario}>
          <FaRedo /> Repetir cuestionario
        </button>
        <button className="btn-secondary" onClick={goToHome}>
          <FaHome /> Volver al inicio
        </button>
      </div>
    </div>
  );
};

export default ResultadosScreen;