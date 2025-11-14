import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// Importar Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

// Importar la imagen desde src/assets/perfil/Perfil1.jpg
import perfil from './assets/perfil/Perfil1.jpg';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App imagenPerfil={perfil} />
  </React.StrictMode>
);