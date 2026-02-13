import React from 'react';

function Sobre() {
  return (
    <div className="container py-5">
      <div className="row text-center mb-5">
        <div className="col-lg-8 mx-auto">
          <h1 className="display-4 fw-bold">Sobre Nosotros</h1>
          <p className="lead text-muted">
            Somos un equipo apasionado de desarrolladores aprendiendo React. 
            Nuestra misión es crear código limpio y aplicaciones útiles.
          </p>
        </div>
      </div>

      {/* Sección del Equipo */}
      <div className="row text-center">
        {/* Miembro 1 */}
        <div className="col-xl-3 col-sm-6 mb-5">
          <div className="bg-white rounded shadow-sm py-5 px-4">
            <img 
              src="https://bootdey.com/img/Content/avatar/avatar7.png" 
              alt="" 
              width="100" 
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 className="mb-0">Juan Pérez</h5>
            <span className="small text-uppercase text-muted">CEO - Fundador</span>
          </div>
        </div>

        {/* Miembro 2 */}
        <div className="col-xl-3 col-sm-6 mb-5">
          <div className="bg-white rounded shadow-sm py-5 px-4">
            <img 
              src="https://bootdey.com/img/Content/avatar/avatar3.png" 
              alt="" 
              width="100" 
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 className="mb-0">Ana García</h5>
            <span className="small text-uppercase text-muted">Desarrolladora React</span>
          </div>
        </div>

        {/* Miembro 3 */}
        <div className="col-xl-3 col-sm-6 mb-5">
          <div className="bg-white rounded shadow-sm py-5 px-4">
            <img 
              src="https://bootdey.com/img/Content/avatar/avatar8.png" 
              alt="" 
              width="100" 
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 className="mb-0">Carlos Ruiz</h5>
            <span className="small text-uppercase text-muted">Diseñador Web</span>
          </div>
        </div>

        {/* Miembro 4 */}
        <div className="col-xl-3 col-sm-6 mb-5">
          <div className="bg-white rounded shadow-sm py-5 px-4">
            <img 
              src="https://bootdey.com/img/Content/avatar/avatar2.png" 
              alt="" 
              width="100" 
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 className="mb-0">Laura López</h5>
            <span className="small text-uppercase text-muted">Marketing</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Sobre };