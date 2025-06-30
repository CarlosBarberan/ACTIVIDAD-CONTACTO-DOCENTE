import React, { useState } from 'react';

const Ejercicio5: React.FC = () => {
  const [mostrarResultado, setMostrarResultado] = useState(false);
  
  const datos = [7, 5, "sistemas", "hola", "adios", 2];
  
  const determinarTextoMayor = (arr: any[]): string => {
    const textos = arr.filter(item => typeof item === 'string');
    return textos.reduce((mayor, actual) => 
      actual > mayor ? actual : mayor
    );
  };
  
  const realizarOperacionesMatematicas = (arr: any[]): any => {
    const numeros = arr.filter(item => typeof item === 'number');
    const [a, b, c] = numeros;
    
    return {
      suma: a + b + c,
      resta: a - b - c,
      multiplicacion: a * b * c,
      division: a / b / c,
      modulo: a % b % c
    };
  };
  
  const textoMayor = determinarTextoMayor(datos);
  const operaciones = realizarOperacionesMatematicas(datos);
  const numeros = datos.filter(item => typeof item === 'number');
  const textos = datos.filter(item => typeof item === 'string');

  return (
    <div className="container mt-5">
      <h2>Ejercicio 5: Análisis de Array Mixto</h2>
      
      <div className="card mb-4">
        <div className="card-header">
          <h5>Array Original</h5>
        </div>
        <div className="card-body">
          <code>[{datos.map(item => typeof item === 'string' ? `"${item}"` : item).join(', ')}]</code>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-header">
              <h5>Datos de Texto</h5>
            </div>
            <div className="card-body">
              <p><strong>Textos encontrados:</strong> [{textos.map(t => `"${t}"`).join(', ')}]</p>
              <p><strong>Texto mayor:</strong> <span className="text-success">"{textoMayor}"</span></p>
            </div>
          </div>
        </div>
        
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-header">
              <h5>Datos Numéricos</h5>
            </div>
            <div className="card-body">
              <p><strong>Números encontrados:</strong> [{numeros.join(', ')}]</p>
              <p><strong>Valores:</strong> a={numeros[0]}, b={numeros[1]}, c={numeros[2]}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header">
          <h5>Operaciones Matemáticas</h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <p><strong>Suma:</strong> {numeros[0]} + {numeros[1]} + {numeros[2]} = <span className="text-primary">{operaciones.suma}</span></p>
            </div>
            <div className="col-md-4">
              <p><strong>Resta:</strong> {numeros[0]} - {numeros[1]} - {numeros[2]} = <span className="text-primary">{operaciones.resta}</span></p>
            </div>
            <div className="col-md-4">
              <p><strong>Multiplicación:</strong> {numeros[0]} × {numeros[1]} × {numeros[2]} = <span className="text-primary">{operaciones.multiplicacion}</span></p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p><strong>División:</strong> {numeros[0]} ÷ {numeros[1]} ÷ {numeros[2]} = <span className="text-primary">{operaciones.division.toFixed(4)}</span></p>
            </div>
            <div className="col-md-6">
              <p><strong>Módulo:</strong> {numeros[0]} % {numeros[1]} % {numeros[2]} = <span className="text-primary">{operaciones.modulo}</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h5>Código de las Funciones</h5>
        </div>
        <div className="card-body">
          <pre className="bg-light p-3 rounded">
{`Determinar texto mayor

const determinarTextoMayor = (arr: any[]): string => {
  const textos = arr.filter(item => typeof item === 'string');
  return textos.reduce((mayor, actual) => 
    actual > mayor ? actual : mayor
  );
};

Realizar operaciones matemáticas

const realizarOperacionesMatematicas = (arr: any[]): any => {
  const numeros = arr.filter(item => typeof item === 'number');
  const [a, b, c] = numeros;
  
  return {
    suma: a + b + c,
    resta: a - b - c,
    multiplicacion: a * b * c,
    division: a / b / c,
    modulo: a % b % c
  };
};`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Ejercicio5; 