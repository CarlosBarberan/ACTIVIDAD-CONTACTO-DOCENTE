import React, { useState } from 'react';

const Ejercicio7: React.FC = () => {
  const [valor, setValor] = useState(25);

  return (
    <div className="container mt-5">
      <h2>Ejercicio 7: Acumulador con useState</h2>
      <div className="row justify-content-center mt-4">
        <div className="col-md-4">
          <div className="card text-center mb-4">
            <div className="card-header">
              <strong>Valor actual del acumulador</strong>
            </div>
            <div className="card-body">
              <div className="display-4 mb-3 border rounded py-2" style={{borderColor: '#4CAF50', borderWidth: 2, borderStyle: 'solid'}}>
                {valor}
              </div>
              <div className="d-flex justify-content-center gap-3">
                <button
                  className="btn btn-primary"
                  onClick={() => setValor(valor + 5)}
                >
                  +5
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => setValor(valor - 5)}
                >
                  -5
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-header">
          <h5>Código del Acumulador</h5>
        </div>
        <div className="card-body">
          <pre className="bg-light p-3 rounded">
{`const [valor, setValor] = useState(25);

<button onClick={() => setValor(valor + 5)}>+5</button>
<button onClick={() => setValor(valor - 5)}>-5</button>`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Ejercicio7; 