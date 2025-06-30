import React, { useState } from 'react';

const Ejercicio3: React.FC = () => {
  const [mostrarResultado, setMostrarResultado] = useState(false);
  
  const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  
  const dividirPorCinco = (arr: number[]): number[] => {
    return arr.map(numero => numero / 5);
  };
  
  const resultado = dividirPorCinco(arreglo);

  return (
    <div className="container mt-5">
      <h2>Ejercicio 3: Dividir Arreglo por 5 usando Map</h2>
      
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-header">
              <h5>Arreglo Original</h5>
            </div>
            <div className="card-body">
              <code>[{arreglo.join(', ')}]</code>
            </div>
          </div>
        </div>
        
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-header">
              <h5>Resultado (dividido por 5)</h5>
            </div>
            <div className="card-body">
              <code>[{resultado.join(', ')}]</code>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h5>Código de la Función</h5>
        </div>
        <div className="card-body">
          <pre className="bg-light p-3 rounded">
{`const dividirPorCinco = (arr: number[]): number[] => {
  return arr.map(numero => numero / 5);
};`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Ejercicio3;
