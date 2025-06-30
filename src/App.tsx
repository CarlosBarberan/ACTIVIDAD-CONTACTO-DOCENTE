import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ejercicio1 from './ejercicios/Ejercicio1';
import Ejercicio2 from './ejercicios/Ejercicio2';
import Ejercicio3 from './ejercicios/Ejercicio3';
import Ejercicio4 from './ejercicios/Ejercicio4';
import Ejercicio5 from './ejercicios/Ejercicio5';
import Ejercicio6 from './ejercicios/Ejercicio6';
import Ejercicio7 from './ejercicios/Ejercicio7';

const Home: React.FC = () => (
  <div className="container mt-5">
    <div className="text-center mb-4">
      <h1>Actividad en Contacto con el Docente</h1>
      <p className="lead">Selecciona un ejercicio para comenzar:</p>
    </div>
    <div className="row justify-content-center">
      {[1,2,3,4,5,6,7].map(num => (
        <div className="col-12 col-md-4 mb-3" key={num}>
          <Link to={`/ejercicio${num}`} className="btn btn-primary w-100">
            Ejercicio {num}
          </Link>
        </div>
      ))}
    </div>
  </div>
);

const Ejercicio = ({ num }: { num: number }) => (
  <div className="container mt-5 text-center">
    <h2>Ejercicio {num}</h2>
    <p>Aquí irá el contenido del ejercicio {num}.</p>
    <Link to="/" className="btn btn-secondary mt-3">Volver al inicio</Link>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ejercicio1" element={<Ejercicio1 />} />
        <Route path="/ejercicio2" element={<Ejercicio2 />} />
        <Route path="/ejercicio3" element={<Ejercicio3 />} />
        <Route path="/ejercicio4" element={<Ejercicio4 />} />
        <Route path="/ejercicio5" element={<Ejercicio5 />} />
        <Route path="/ejercicio6" element={<Ejercicio6 />} />
        <Route path="/ejercicio7" element={<Ejercicio7 />} />
      </Routes>
    </Router>
  );
}

export default App;
