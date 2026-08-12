import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Importación de todos los estilos organizados
import './styles/index.css';
import './styles/navbar.css';
import './styles/home.css';
import './styles/kora.css';
import './styles/cuestionario.css';
import './styles/semaforo.css';
import './styles/resultados.css';
import './styles/nosotros.css';
import './styles/animations.css';
import './styles/responsive.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);