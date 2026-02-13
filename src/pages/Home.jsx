import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-5">
      {/* Sección Hero (Principal) */}
      <div className="p-5 mb-4 bg-light rounded-3 shadow-sm text-center">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold text-primary">Bienvenido a Mi Primer React</h1>
          <p className="col-md-8 fs-4 mx-auto">
            Esta es una aplicación web moderna construida con React y Bootstrap. 
            Estamos creando interfaces de usuario rápidas, reactivas y elegantes.
          </p>
          <Link to="/Sobre" className="btn btn-primary btn-lg px-4 mt-3" type="button">
            Conócenos más
          </Link>
        </div>
      </div>

      {/* Sección de Características (3 Columnas) */}
      <div className="row align-items-md-stretch">
        <div className="col-md-4 mb-4">
          <div className="h-100 p-4 text-white bg-dark rounded-3 shadow">
            <h2>Rápido</h2>
            <p>Utilizamos la última tecnología para asegurar que tu experiencia sea fluida y veloz.</p>
            <button className="btn btn-outline-light" type="button">Ver detalles</button>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="h-100 p-4 bg-light border rounded-3 shadow-sm">
            <h2>Moderno</h2>
            <p>Diseño adaptativo que se ve increíble en móviles, tablets y ordenadores de escritorio.</p>
            <button className="btn btn-outline-secondary" type="button">Ver galería</button>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="h-100 p-4 text-white bg-success rounded-3 shadow">
            <h2>Seguro</h2>
            <p>Tus datos están protegidos con las mejores prácticas de seguridad web actuales.</p>
            <button className="btn btn-outline-light" type="button">Saber más</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Home };