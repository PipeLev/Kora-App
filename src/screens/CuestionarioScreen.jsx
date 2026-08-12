import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaRegStar, FaBars } from 'react-icons/fa';
import { useDrawer } from '../App';
import preguntasData from '../data/questions.json';

const PREGUNTAS_POR_INTENTO = 54;

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const CuestionarioScreen = () => {
  const navigate = useNavigate();
  const { toggleDrawer } = useDrawer();
  const [preguntas, setPreguntas] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [respuestas, setRespuestas] = useState([]);
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    localStorage.removeItem('ultimoResultado');

    if (!preguntasData || preguntasData.length === 0) {
      setLoading(false);
      return;
    }

    const mezcladas = shuffleArray(preguntasData);
    const seleccionadas = mezcladas.slice(0, PREGUNTAS_POR_INTENTO);
    setPreguntas(seleccionadas);
    setRespuestas(Array(seleccionadas.length).fill(0));
    setLoading(false);
  }, []);

  const handleRating = (value) => {
    setRating(value);
    const newRespuestas = [...respuestas];
    newRespuestas[currentIndex] = value;
    setRespuestas(newRespuestas);
  };

  const handleNext = () => {
    if (currentIndex < preguntas.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setRating(respuestas[currentIndex + 1] || 0);
    } else {
      const totalScore = respuestas.reduce((a, b) => a + b, 0);
      const minScore = 54;
      const maxScore = 270;
      const porcentaje = ((totalScore - minScore) / (maxScore - minScore)) * 100;

      // Calcular nivel del Violentómetro (1 al 18)
      let nivel = Math.floor((porcentaje / 100) * 18) + 1;
      if (nivel < 1) nivel = 1;
      if (nivel > 18) nivel = 18;

      // Asignar color según el nivel (verde->amarillo->naranja->rojo)
      let color;
      if (nivel <= 4) color = '#4CAF50';
      else if (nivel <= 8) color = '#8BC34A';
      else if (nivel <= 12) color = '#FFC107';
      else if (nivel <= 15) color = '#FF9800';
      else color = '#F44336';

      const resultado = {
        puntaje: totalScore,
        totalPreguntas: preguntas.length,
        nivel: nivel,
        color: color,
        porcentaje: Math.round(porcentaje),
        timestamp: Date.now()
      };
      localStorage.setItem('ultimoResultado', JSON.stringify(resultado));

      setCurrentIndex(0);
      setRespuestas(Array(preguntas.length).fill(0));
      setRating(0);

      navigate('/resultados', { state: resultado });
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setRating(respuestas[currentIndex - 1] || 0);
    }
  };

  if (loading) {
    return (
      <div className="cuestionario-container">
        <header className="cuestionario-header">
          <span className="header-title">Cuestionario</span>
          <button className="hamburger-btn" onClick={toggleDrawer}>
            <FaBars size={24} color="#80166d" />
          </button>
        </header>
        <div className="loading-container">
          <p>Cargando preguntas...</p>
        </div>
      </div>
    );
  }

  if (preguntas.length === 0) {
    return (
      <div className="cuestionario-container">
        <header className="cuestionario-header">
          <span className="header-title">Cuestionario</span>
          <button className="hamburger-btn" onClick={toggleDrawer}>
            <FaBars size={24} color="#80166d" />
          </button>
        </header>
        <div className="loading-container">
          <p>No hay preguntas disponibles.</p>
        </div>
      </div>
    );
  }

  const progress = ((currentIndex + 1) / preguntas.length) * 100;
  const currentQuestion = preguntas[currentIndex];
  const total = preguntas.length;

  return (
    <div className="cuestionario-container">
      <header className="cuestionario-header">
        <span className="header-title">Cuestionario</span>
        <button className="hamburger-btn" onClick={toggleDrawer}>
          <FaBars size={24} color="#80166d" />
        </button>
      </header>

      <div className="progress-wrapper">
        <span className="progress-text">Pregunta {currentIndex + 1} de {total}</span>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="question-card">
        <p className="question-text">{currentQuestion.texto}</p>
        <div className="stars-container">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              className="star-btn"
              onClick={() => handleRating(num)}
              aria-label={`${num} estrellas`}
            >
              {num <= rating ? (
                <FaStar size={42} color="#FFB703" />
              ) : (
                <FaRegStar size={42} color="#CCCCCC" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="nav-buttons">
        {currentIndex > 0 && (
          <button className="btn-previous" onClick={handlePrevious}>
            Anterior
          </button>
        )}
        <button
          className="btn-next"
          onClick={handleNext}
          disabled={rating === 0}
          style={{ opacity: rating === 0 ? 0.5 : 1 }}
        >
          {currentIndex === total - 1 ? 'Finalizar' : 'Siguiente'}
        </button>
      </div>
    </div>
  );
};

export default CuestionarioScreen;