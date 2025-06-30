import React, { useState } from 'react';

const Ejercicio4: React.FC = () => {
  const [mostrarResultado, setMostrarResultado] = useState(false);
  
  const numeros = [1, 2, 3, 4];
  
  const identificarParImpar = (arr: number[]): string[] => {
    return arr.map(numero => {
      return numero % 2 === 0 ? 'par' : 'impar';
    });
  };
  
  const resultado = identificarParImpar(numeros);

  return (
    <div className="container mt-5">
      <h2>Ejercicio 4: Identificar Números Pares e Impares</h2>
      
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-header">
              <h5>Arreglo Original</h5>
            </div>
            <div className="card-body">
              <code>[{numeros.join(', ')}]</code>
            </div>
          </div>
        </div>
        
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-header">
              <h5>Resultado (par/impar)</h5>
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
{`const identificarParImpar = (arr: number[]): string[] => {
  return arr.map(numero => {
    return numero % 2 === 0 ? 'par' : 'impar';
  });
};`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Ejercicio4; 