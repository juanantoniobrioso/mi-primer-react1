import './Footer.css';

function Footer(){
  return(
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-start">
        <div className="row text-center text-md-start">
          
          {/* Columna 1: Información / Logo */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Mi Primer React</h5>
            <p>
              Aquí puedes escribir una breve descripción de tu empresa o sitio web. Es un buen lugar para poner tu misión o eslogan.
            </p>
          </div>

          {/* Columna 2: Enlaces útiles */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Productos</h5>
            <p><a href="#" className="text-white text-decoration-none">Servicios</a></p>
            <p><a href="#" className="text-white text-decoration-none">Portafolio</a></p>
            <p><a href="#" className="text-white text-decoration-none">Precios</a></p>
            <p><a href="#" className="text-white text-decoration-none">FAQ</a></p>
          </div>

          {/* Columna 3: Enlaces de ayuda */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Enlaces Útiles</h5>
            <p><a href="#" className="text-white text-decoration-none">Tu cuenta</a></p>
            <p><a href="#" className="text-white text-decoration-none">Afiliados</a></p>
            <p><a href="#" className="text-white text-decoration-none">Envío</a></p>
            <p><a href="#" className="text-white text-decoration-none">Ayuda</a></p>
          </div>

          {/* Columna 4: Contacto */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contacto</h5>
            <p><i className="fas fa-home mr-3"></i> Sevilla, España</p>
            <p><i className="fas fa-envelope mr-3"></i> info@ejemplo.com</p>
            <p><i className="fas fa-phone mr-3"></i> +34 123 456 789</p>
          </div>
          
        </div>

        <hr className="mb-4" />

        {/* Sección Copyright */}
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p> Copyright © 2024 Todos los derechos reservados por:
              <a href="#" className="text-warning text-decoration-none">
                <strong> TuEmpresa</strong>
              </a>
            </p>
          </div>

          {/* Iconos Redes Sociales */}
          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-end">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}>
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}>
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}>
                    <i className="bi bi-google"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}>
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  ) 
}

export {Footer};