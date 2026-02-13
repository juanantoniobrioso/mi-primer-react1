import React from 'react';

function Contacto() {
  
  // Función simple para evitar que la página se recargue al enviar
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Gracias por contactarnos! (Esto es una demo)");
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow-lg border-0">
            <div className="card-body p-5">
              <h1 className="text-center mb-4 text-primary fw-bold">Contáctanos</h1>
              
              <div className="row">
                {/* Columna del Formulario */}
                <div className="col-md-6 border-end">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="nombre" className="form-label">Nombre completo</label>
                      <input type="text" className="form-control" id="nombre" placeholder="Tu nombre" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Correo electrónico</label>
                      <input type="email" className="form-control" id="email" placeholder="nombre@ejemplo.com" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="mensaje" className="form-label">Mensaje</label>
                      <textarea className="form-control" id="mensaje" rows="4" placeholder="¿En qué podemos ayudarte?"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Enviar Mensaje</button>
                  </form>
                </div>

                {/* Columna de Información */}
                <div className="col-md-6 d-flex flex-column justify-content-center ps-md-5 mt-4 mt-md-0">
                  <h4 className="mb-3">Información de contacto</h4>
                  <p className="mb-2"><strong>Dirección:</strong></p>
                  <p className="text-muted">Calle Falsa 123, Sevilla, España</p>

                  <p className="mb-2"><strong>Teléfono:</strong></p>
                  <p className="text-muted">+34 123 456 789</p>

                  <p className="mb-2"><strong>Email:</strong></p>
                  <p className="text-muted">hola@mi-primer-react.com</p>
                  
                  <div className="alert alert-info mt-3" role="alert">
                    <small>Horario de atención: Lunes a Viernes, 9:00 - 18:00</small>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Contacto };