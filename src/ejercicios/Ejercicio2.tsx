import React, { useState } from 'react';

const Ejercicio2: React.FC = () => {
  const [numeros, setNumeros] = useState('');
  const [suma, setSuma] = useState<number | null>(null);
  const [arreglo, setArreglo] = useState<number[]>([]);

  const calcularSuma = (e: React.FormEvent) => {
    e.preventDefault();
    const numerosArray = numeros.split(',').map(num => parseFloat(num.trim()));
    const numerosValidos = numerosArray.filter(num => !isNaN(num));
    
    if (numerosValidos.length > 0) {
      setArreglo(numerosValidos);
      const resultado = numerosValidos.reduce((acc, num) => acc + num, 0);
      setSuma(resultado);
    } else {
      setSuma(null);
      setArreglo([]);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Ejercicio 2: Suma de Elementos de un Arreglo</h2>
      <form onSubmit={calcularSuma} className="mb-3">
        <div className="mb-3">
          <label htmlFor="numeros" className="form-label">
            Ingresa los números separados por comas:
          </label>
          <input
            type="text"
            className="form-control"
            id="numeros"
            value={numeros}
            onChange={e => setNumeros(e.target.value)}
            placeholder="Ejemplo: 1, 2, 3, 4, 5"
            required
          />
          <div className="form-text">
            Ingresa números separados por comas (ej: 1, 2, 3, 4, 5)
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Calcular suma</button>
      </form>
      
      {arreglo.length > 0 && (
        <div className="alert alert-info">
          <strong>Arreglo ingresado:</strong> [{arreglo.join(', ')}]
        </div>
      )}
      
      {suma !== null && (
        <div className="alert alert-success">
          <strong>La suma de los elementos es:</strong> {suma}
        </div>
      )}
    </div>
  );
};

export default Ejercicio2;
