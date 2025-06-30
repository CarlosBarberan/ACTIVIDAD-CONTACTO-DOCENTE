import React, { useState } from 'react';

const Ejercicio1: React.FC = () => {
  const [lado, setLado] = useState('');
  const [area, setArea] = useState<number | null>(null);

  const calcularArea = (e: React.FormEvent) => {
    e.preventDefault();
    const valor = parseFloat(lado);
    if (!isNaN(valor)) {
      setArea(valor * valor);
    } else {
      setArea(null);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Ejercicio 1: Área de un Cuadrado</h2>
      <form onSubmit={calcularArea} className="mb-3">
        <div className="mb-3">
          <label htmlFor="lado" className="form-label">Lado del cuadrado:</label>
          <input
            type="number"
            className="form-control"
            id="lado"
            value={lado}
            onChange={e => setLado(e.target.value)}
            min="0"
            step="any"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Calcular área</button>
      </form>
      {area !== null && (
        <div className="alert alert-info">El área del cuadrado es: <strong>{area}</strong></div>
      )}
    </div>
  );
};

export default Ejercicio1; 