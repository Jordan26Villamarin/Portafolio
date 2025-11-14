import { useState } from 'react';

function App({ imagenPerfil }) {
  const [seccionActiva, setSeccionActiva] = useState('inicio');

  const navegarA = (seccion) => {
    setSeccionActiva(seccion);
  };

  return (
    <div className="portfolio-simple">
      {/* Barra de Navegación */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#inicio">
            <i className="bi bi-code-slash me-2"></i>
            Jordan Villamarin
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button
                  className={`nav-link btn btn-link ${seccionActiva === 'inicio' ? 'active' : ''}`}
                  onClick={() => navegarA('inicio')}
                >
                  <i className="bi bi-house-door me-1"></i>
                  Inicio
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link btn btn-link ${seccionActiva === 'sobre-mi' ? 'active' : ''}`}
                  onClick={() => navegarA('sobre-mi')}
                >
                  <i className="bi bi-person me-1"></i>
                  Sobre Mí
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link btn btn-link ${seccionActiva === 'contacto' ? 'active' : ''}`}
                  onClick={() => navegarA('contacto')}
                >
                  <i className="bi bi-envelope me-1"></i>
                  Contacto
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Contenido Principal */}
      <main>
        {/* Sección Inicio */}
        {seccionActiva === 'inicio' && (
          <section className="hero-simple">
            <div className="container text-center">
              <img
                src={imagenPerfil}
                alt="Jordan Villamarin"
                className="profile-img-simple mb-4"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/200";
                }}
              />
              <h1 className="display-4 fw-bold mb-3">Jordan Johan Villamarin Hidalgo</h1>
              <p className="lead text-muted mb-4">
                Estudiante de Tecnología de la Información
              </p>
              <p className="mb-5">
                Bienvenido a mi portafolio personal. Estoy aprendiendo desarrollo web
                y creando proyectos increíbles con React y Bootstrap.
              </p>

              {/* Botones de Redes Sociales */}
              <div className="social-buttons">
                <a
                  href="https://github.com/Jordan26Villamarin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark btn-lg me-3 mb-3"
                >
                  <i className="bi bi-github me-2"></i>
                  GitHub
                </a>
                <a
                  href="https://www.instagram.com/villamarinjordan6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg me-3 mb-3"
                  style={{ backgroundColor: '#E4405F', color: 'white' }}
                >
                  <i className="bi bi-instagram me-2"></i>
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/jordan.villamarin.12?locale=es_LA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg me-3 mb-3"
                >
                  <i className="bi bi-facebook me-2"></i>
                  Facebook
                </a>
                <a
                  href="https://wa.me/593999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success btn-lg mb-3"
                >
                  <i className="bi bi-whatsapp me-2"></i>
                  WhatsApp
                </a>
              </div>

              {/* Botón para ir a Sobre Mí */}
              <div className="mt-5">
                <button
                  onClick={() => navegarA('sobre-mi')}
                  className="btn btn-outline-dark btn-lg"
                >
                  Conoce más sobre mí
                  <i className="bi bi-arrow-right ms-2"></i>
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Sección Sobre Mí */}
        {seccionActiva === 'sobre-mi' && (
          <section className="sobre-mi-simple">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="card shadow-lg border-0">
                    <div className="card-body p-5">
                      <h2 className="card-title text-center mb-4">
                        <i className="bi bi-person-circle me-2"></i>
                        Sobre Mí
                      </h2>

                      <div className="text-center mb-4">
                        <img
                          src={imagenPerfil}
                          alt="Jordan Villamarin"
                          className="profile-img-about mb-3"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/150";
                          }}
                        />
                      </div>

                      <p className="lead text-center mb-4">
                        ¡Hola! Soy Jordan Johan Villamarin Hidalgo
                      </p>

                      <p className="text-muted mb-3">
                        Soy estudiante de la Facultad de Ciencias Informáticas en la carrera de 
                        Tecnología de la Información. Me apasiona el desarrollo web y estoy 
                        constantemente aprendiendo nuevas tecnologías para mejorar mis habilidades 
                        en el diseño de páginas web.
                      </p>

                      <hr className="my-4" />

                      <h4 className="mb-3">
                        <i className="bi bi-info-circle me-2"></i>
                        Información Personal
                      </h4>

                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                          <strong>Ubicación:</strong> Portoviejo, Manabí, Ecuador
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-mortarboard-fill text-primary me-2"></i>
                          <strong>Educación:</strong> Tecnología de la Información
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-book-fill text-primary me-2"></i>
                          <strong>Institución:</strong> Facultad de Ciencias Informáticas
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-star-fill text-primary me-2"></i>
                          <strong>Intereses:</strong> Desarrollo Web, React, JavaScript
                        </li>
                      </ul>

                      <hr className="my-4" />

                      <h4 className="mb-3">
                        <i className="bi bi-lightning-charge-fill me-2"></i>
                        Habilidades
                      </h4>

                      <div className="skills-list">
                        <span className="badge bg-primary me-2 mb-2 p-2">HTML/CSS</span>
                        <span className="badge bg-warning me-2 mb-2 p-2">JavaScript</span>
                        <span className="badge bg-info me-2 mb-2 p-2">React</span>
                        <span className="badge bg-success me-2 mb-2 p-2">Bootstrap</span>
                        <span className="badge bg-danger me-2 mb-2 p-2">Git/GitHub</span>
                        <span className="badge bg-secondary me-2 mb-2 p-2">Node.js</span>
                      </div>

                      <div className="text-center mt-5">
                        <button
                          onClick={() => navegarA('contacto')}
                          className="btn btn-primary btn-lg me-3"
                        >
                          <i className="bi bi-envelope me-2"></i>
                          Contáctame
                        </button>
                        <button
                          onClick={() => navegarA('inicio')}
                          className="btn btn-outline-secondary btn-lg"
                        >
                          <i className="bi bi-arrow-left me-2"></i>
                          Volver al Inicio
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Sección Contacto */}
        {seccionActiva === 'contacto' && (
          <section className="contacto-simple">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="card shadow-lg border-0">
                    <div className="card-body p-5">
                      <h2 className="card-title text-center mb-4">
                        <i className="bi bi-envelope-fill me-2"></i>
                        Contáctame
                      </h2>

                      <p className="text-center text-muted mb-4">
                        ¿Tienes alguna pregunta o propuesta? ¡Me encantaría escucharte!
                      </p>

                      <form>
                        <div className="mb-3">
                          <label htmlFor="nombre" className="form-label">
                            <i className="bi bi-person me-2"></i>
                            Nombre
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="nombre"
                            placeholder="Tu nombre completo"
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">
                            <i className="bi bi-envelope me-2"></i>
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            id="email"
                            placeholder="tu@email.com"
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="mensaje" className="form-label">
                            <i className="bi bi-chat-dots me-2"></i>
                            Mensaje
                          </label>
                          <textarea
                            className="form-control form-control-lg"
                            id="mensaje"
                            rows="5"
                            placeholder="Escribe tu mensaje aquí..."
                          ></textarea>
                        </div>

                        <div className="d-grid gap-2">
                          <button type="submit" className="btn btn-primary btn-lg">
                            <i className="bi bi-send me-2"></i>
                            Enviar Mensaje
                          </button>
                        </div>
                      </form>

                      <hr className="my-4" />

                      <h5 className="text-center mb-3">O encuéntrame en:</h5>

                      <div className="d-flex justify-content-center gap-3 flex-wrap">
                        <a
                          href="https://github.com/Jordan26Villamarin"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-dark"
                        >
                          <i className="bi bi-github me-1"></i>
                          GitHub
                        </a>
                        <a
                          href="https://linkedin.com/in/tu-perfil"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-primary"
                        >
                          <i className="bi bi-linkedin me-1"></i>
                          LinkedIn
                        </a>
                        <a
                          href="mailto:tu@email.com"
                          className="btn btn-outline-danger"
                        >
                          <i className="bi bi-envelope-fill me-1"></i>
                          Email
                        </a>
                      </div>

                      <div className="text-center mt-4">
                        <button
                          onClick={() => navegarA('inicio')}
                          className="btn btn-outline-secondary"
                        >
                          <i className="bi bi-arrow-left me-2"></i>
                          Volver al Inicio
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="footer-simple text-center py-4 bg-dark text-white mt-5">
        <p className="mb-1">© 2024 Jordan Johan Villamarin Hidalgo</p>
        <p className="mb-0 text-muted">
          Hecho con <i className="bi bi-heart-fill text-danger"></i> y React
        </p>
      </footer>
    </div>
  );
}

export default App;