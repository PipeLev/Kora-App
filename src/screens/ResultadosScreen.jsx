import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaRedo, FaHome, FaBars } from 'react-icons/fa';
import { useDrawer } from '../App';

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

    if (data && data.puntaje !== undefined) {
      setResultado(data);
    } else {
      setResultado(null);
    }
    setLoading(false);
  }, [location.state]);

  const goToHome = () => navigate('/');
  const goToCuestionario = () => navigate('/cuestionario');
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

  const {
    puntaje,
    totalPreguntas,
    maxPuntaje,
    porcentaje,
    nombre,
    zona,
    color,
    colorFondo,
    descripcion,
    conductas = [],
    riesgo,
    recomendaciones = [],
    timestamp,
    id // nivel id (verde, amarillo, etc.)
  } = resultado;

  // Número del nivel (1-4 según el orden en los niveles)
  const nivelNumero = (() => {
    const niveles = ['verde', 'amarillo', 'naranja', 'rojo'];
    const idx = niveles.indexOf(id);
    return idx !== -1 ? idx + 1 : 0;
  })();

  return (
    <div className="resultados-container">
      <header className="resultados-header">
        <span className="header-title">Resultados</span>
        <button className="hamburger-btn" onClick={toggleDrawer}>
          <FaBars size={24} color="#80166d" />
        </button>
      </header>

      <div className="resultados-info">
        <p>
          Este resultado se basa en los niveles del Violentómetro.
          El puntaje obtenido determina en qué zona se encuentra tu relación.
        </p>
      </div>

      <div
        className="resultado-principal"
        style={{
          borderLeftColor: color,
          backgroundColor: colorFondo || '#ffffff'
        }}
      >
        <div className="resultado-header">
          <span className="resultado-label" style={{ color }}>{zona}</span>
          <span className="resultado-nivel" style={{ color }}>{nombre}</span>
        </div>
        <div className="resultado-puntaje">
          <span>Puntaje: {puntaje} / {maxPuntaje}</span>
          <span>Porcentaje: {porcentaje}%</span>
        </div>
        <div className="resultado-riesgo" style={{ color }}>
          <strong>Riesgo: {riesgo}</strong>
        </div>
        <p className="resultado-desc">{descripcion}</p>

        {conductas.length > 0 && (
          <div className="resultado-recomendaciones">
            <h4>Conductas asociadas:</h4>
            <ul>
              {conductas.map((c, i) => <li key={i}>• {c}</li>)}
            </ul>
          </div>
        )}

        {recomendaciones.length > 0 && (
          <div className="resultado-recomendaciones">
            <h4>Recomendaciones:</h4>
            <ul>
              {recomendaciones.map((rec, i) => <li key={i}>• {rec}</li>)}
            </ul>
          </div>
        )}

        <div className="resultado-fecha">
          {timestamp ? new Date(timestamp).toLocaleDateString('es-CL') + ' a las ' + new Date(timestamp).toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' }) : 'Fecha no disponible'}
        </div>
      </div>

      <div className="resultado-actions">
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