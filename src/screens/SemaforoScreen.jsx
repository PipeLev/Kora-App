import React, { useState } from 'react';
import { FaFilePdf, FaBars } from 'react-icons/fa';
import { useDrawer } from '../App';

const DATOS_VIOLENTOMETRO = [
  // FASE 1: TEN CUIDADO (Amarillos / Alertas tempranas)
  { id: 1, nivel: '1', titulo: 'Chantajear', descripcion: 'Manipulación emocional para hacerte sentir culpa y obligarte a hacer cosas que no quieres hacer.', color: '#FFD166' },
  { id: 2, nivel: '2', titulo: 'Mentir / Engañar', descripcion: 'Ocultar información importante o distorsionar la realidad para mantener el control sobre ti y tus decisiones.', color: '#FFC857' },
  { id: 3, nivel: '3', titulo: 'Ignorar / Ley del hielo', descripcion: 'Castigarte con el silencio o la indiferencia absoluta para que cedas durante o después de una discusión.', color: '#FFB703' },
  { id: 4, nivel: '4', titulo: 'Celar', descripcion: 'Reclamar atención exclusiva de forma exagerada, mostrando desconfianza constante sin ningún motivo real.', color: '#FFA200' },
  { id: 5, nivel: '5', titulo: 'Ofender / Humillar', descripcion: 'Usar insultos, gritos o descalificaciones verbales para degradar la dignidad de la persona y hacerla sentir inferior o incapaz.', color: '#FF8E00' },
  { id: 6, nivel: '6', titulo: 'Intimidar / Amenazar', descripcion: 'Generar miedo mediante miradas, gestos o advertencias verbales sobre posibles consecuencias negativas si no se obedece su voluntad.', color: '#FF7B00' },

  // FASE 2: REACCIONA (Naranjas / Abuso evidente)
  { id: 7, nivel: '7', titulo: 'Controlar / Prohibir / Aislar', descripcion: 'Restringir las amistades, vestimenta, redes sociales, horarios o decisiones económicas para anular por completo la autonomía de la persona.', color: '#FF6D00' },
  { id: 8, nivel: '8', titulo: 'Destruir artículos personales', descripcion: 'Romper tus cosas, regalos, ropa o celular durante un arranque de ira para generar terror y demostrar poder.', color: '#FA5400' },
  { id: 9, nivel: '9', titulo: 'Intimidar', descripcion: 'Hacer comentarios denigrantes, gritarte o exponer tus intimidades frente a otras personas para avergonzarte.', color: '#F03A00' },
  { id: 10, nivel: '10', titulo: 'Agredir "jugando"', descripcion: 'Agresiones físicas disfrazadas de "juego" o "bromas pesadas" para normalizar el contacto violento y el dolor.', color: '#E62500' },
  { id: 11, nivel: '11', titulo: 'Empujar / Jalonear', descripcion: 'Uso de la fuerza física para moverte, retenerte para que no te vayas, o sacudirte durante una discusión.', color: '#DC1400' },
  { id: 12, nivel: '12', titulo: 'Golpear', descripcion: 'Ejercer fuerza física directa mediante manotazos, bofetadas o patadas, causando daño corporal evidente y rompiendo límites de seguridad básicos.', color: '#D00000' },

  // FASE 3: NECESITAS AYUDA URGENTE (Rojos / Violencia física y peligro extremo)
  { id: 13, nivel: '13', titulo: 'Encerrar / Secuestrar', descripcion: 'Privar de la libertad de movimiento, impidiendo que la persona salga de un espacio físico o contacte al exterior.', color: '#B30000' },
  { id: 14, nivel: '14', titulo: 'Amenazar con Objetos', descripcion: 'Utilizar objetos punzantes, cortantes o armas de fuego para aterrorizar y coaccionar bajo la promesa implícita de muerte.', color: '#990000' },
  { id: 15, nivel: '15', titulo: 'Amenazar de Muerte', descripcion: 'Advertir verbalmente o con gestos la intención de quitar la vida, infundiendo un miedo extremo para someter a la víctima.', color: '#800000' },
  { id: 16, nivel: '16', titulo: 'Abusar Sexualmente', descripcion: 'Forzar u obligar a realizar actos de carácter sexual sin consentimiento explícito, utilizando la fuerza, el chantaje o las amenazas.', color: '#660000' },
  { id: 17, nivel: '17', titulo: 'Violar', descripcion: 'Forzar a realizar actos de carácter sexual o mantener relaciones mediante el uso de la fuerza física, chantaje o amenazas.', color: '#4D0000' },
  { id: 18, nivel: '18', titulo: 'Asesinar', descripcion: 'Quitar la vida a la pareja de forma violenta, siendo el desenlace definitivo y más extremo de este ciclo destructivo.', color: '#330000' },
];

const SemaforoScreen = () => {
  const { toggleDrawer } = useDrawer();
  const [selected, setSelected] = useState(null);

  const openModal = (item) => setSelected(item);
  const closeModal = () => setSelected(null);
  const openPDF = () => window.open('https://www.indh.cl/bb/wp-content/uploads/2017/01/Violentometro.pdf', '_blank');

  return (
    <div className="semaforo-container">
      <header className="semaforo-header">
        <span className="header-title">Violentómetro</span>
        <button className="hamburger-btn" onClick={toggleDrawer}>
          <FaBars size={24} color="#80166d" />
        </button>
      </header>

      <h1 className="semaforo-title">Violentómetro</h1>
      <p className="semaforo-subtitle">Toca cualquier nivel para conocer más sobre estas señales de alerta.</p>

      <div className="semaforo-list">
        {DATOS_VIOLENTOMETRO.map((item) => (
          <button key={item.id} className="semaforo-item" onClick={() => openModal(item)}>
            <div className="semaforo-circle" style={{ backgroundColor: item.color }}>
              <span className="semaforo-circle-text">{item.nivel}</span>
            </div>
            <span className="semaforo-item-title">{item.titulo}</span>
          </button>
        ))}
      </div>

      {selected && (
        <div className="semaforo-modal-overlay" onClick={closeModal}>
          <div className="semaforo-modal" onClick={(e) => e.stopPropagation()}>
            <div className="semaforo-modal-header" style={{ backgroundColor: selected.color }}>
              <span className="modal-level">Nivel {selected.nivel}</span>
            </div>
            <div className="semaforo-modal-body">
              <h2 className="modal-title">{selected.titulo}</h2>
              <p className="modal-desc">{selected.descripcion}</p>
              <button className="modal-btn" onClick={closeModal}>Entendido</button>
            </div>
          </div>
        </div>
      )}

      <button className="semaforo-floating-btn" onClick={openPDF}>
        <FaFilePdf size={24} color="#FFFFFF" />
      </button>
    </div>
  );
};

export default SemaforoScreen;