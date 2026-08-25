import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useDrawer } from '../App';

const KoraScreen = () => {
  const { toggleDrawer } = useDrawer();

  return (
    <div className="kora-container">
      <header className="kora-header">
        <span className="header-title">Kora</span>
        <button className="hamburger-btn" onClick={toggleDrawer}>
          <FaBars size={24} color="#80166d" />
        </button>
      </header>

      <div className="kora-content">
        <div className="kora-logo">
          <img src="/logo-horizontal.png" alt="KORA" />
        </div>
        <h1 className="kora-title">¿Qué es Kora?</h1>
        <p className="kora-text">
          La creación de la App inició como una aplicación de seguridad para chiloé en donde las personas podían pedir ayuda desde cualquier lugar en cualquier momento, pero por el costo y la magnitud de la app fue rechazada la idea, luego de una búsqueda de ideas llegamos a kora, la App actual en donde lo que puedes hacer un autodiagnóstico en cómo está tu relación actualmente, así puedes llevar la relación de mejor manera y saber qué está pasando, por que normalmente uno nunca sabe qué es lo que está pasando por el amor de uno hacia otro haciendo difícil entenderse, ahora claramente no daría una explicación o una razón tan clara pero te ayudará a entender lo que está pasando en la relación y saber si es bueno o malo, tambien te ayudara a salir de situaciones peligrosas o tóxicas que uno claramente no desearía estar, nuestra visión es ayudar a las 3 sedes de la universidad en conjunto con Dirección de Género y si va a un buen ritmo puede mejorar la  App usarse en colegios en la  media para que los alumnos no sufran por esto.
        </p>
      </div>
    </div>
  );
};

export default KoraScreen;