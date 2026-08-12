import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useDrawer } from '../App';

const EQUIPO = [
  {
    id: '1',
    nombre: 'Eduard',
    foto: '/eduard.jpg',
    biografia: 'Soy Eduard Antony Contreras Miranda y soy estudiante de la carrera ingeniería civil en informática. En el mes de Abril, yo y mi equipo nos unimos fuerzas para desarrollar el proyecto titulado Kora. Este trabajo nació con el propósito de ayudar a las parejas con mala relación o problemas tóxico, este era un problemática tan grande que quisimos resolver para la gente que sufre; irritación, miedo, abusos y violencias en estos tipos de relaciones. Durante la realización del proyecto, cada miembro aportó desde sus fortalezas individuales: Martin se enfocó en el código y la página de la aplicación, Piper lideró Diseñarlo y responsabilidad de la app, mientras que Ignición y Yo nos encargamos de investigación y apoyo del trabajo. El desafío del trabajo fue ubicarnos en cada rol e identificar los problemas de la app.'
  },
  {
    id: '2',
    nombre: 'Felipe',
    foto: '/felipe.jpg',
    biografia: 'Buenas mi nombre es Felipe Levicán Barría, estudiante de Ingeniería Civil en Informática, y desde el mes de Abril que tenemos este proyecto, me dedique en estar encargado en la parte de liderar el equipo por parte de Diseño y en que se haga los trabajos necesarios para que este proyecto vaya por un buen camino'
  },
  {
    id: '3',
    nombre: 'Martín',
    foto: '/martin.jpg',
    biografia: 'Soy Martin Renato Aguirre Salazar y estoy cursando el primer año de ingeniería civil en informática, junto a mi equipo nos reunimos para crear esta App llamada Kora, yo principalmente en enfoque en el desarrollo interno de la App para que funcione y sea fácil de entender, mis compañeros me ayudaron a lograr a lo que llegamos hasta ahora, aun tiene sus fallos pero esta funcionando al 100%'
  },
  {
    id: '4',
    nombre: 'Ignacío',
    foto: '/nacho.jpg',
    biografia: 'Hola soy Ignacio Marcelo Saez Straussmann soy estudiante de primer año de la ulagos, estudio ingenieria civil informatica,  con mi grupo del proyecto integrador nos juntamos para crear y diseñar KoraApp una aplicacion que es una herramienta que ayuda a identificar conductas de manipulacion psicologica y de control en relaciones durante la etapa universitaria, en este trabajo me enfoque en parte de creacion del codigo de la app osea el desarrollo interno y tambien me encargue del diseño del logo de la app.'
  },
];

const NosotrosScreen = () => {
  const { toggleDrawer } = useDrawer();
  const [selected, setSelected] = useState(null);

  const openModal = (miembro) => setSelected(miembro);
  const closeModal = () => setSelected(null);

  return (
    <div className="nosotros-container">
      <header className="nosotros-header">
        <span className="header-title">Nosotros</span>
        <button className="hamburger-btn" onClick={toggleDrawer}>
          <FaBars size={24} color="#80166d" />
        </button>
      </header>

      <h1 className="nosotros-title">Nuestro Equipo</h1>
      <p className="nosotros-subtitle">Conoce a las personas detrás del desarrollo y creación de Kora. Toca una foto para leer su historia.</p>

      <div className="nosotros-grid">
        {EQUIPO.map((m) => (
          <button key={m.id} className="nosotros-card" onClick={() => openModal(m)}>
            <img src={m.foto} alt={m.nombre} className="card-image" />
            <div className="card-name-container">
              <span className="card-name">{m.nombre}</span>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div className="nosotros-modal-overlay" onClick={closeModal}>
          <div className="nosotros-modal" onClick={(e) => e.stopPropagation()}>
            <img src={selected.foto} alt={selected.nombre} className="modal-image" />
            <div className="modal-body">
              <h2 className="modal-name">{selected.nombre}</h2>
              <p className="modal-bio">{selected.biografia}</p>
              <button className="modal-close-btn" onClick={closeModal}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NosotrosScreen;