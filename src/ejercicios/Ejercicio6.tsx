import React, { useState } from 'react';

interface Alumno {
  name: string;
  edad: number;
  calificacion: number;
}

const Ejercicio6: React.FC = () => {
  const [mostrarResultado, setMostrarResultado] = useState(false);
  
  const alumnos: Alumno[] = [
    {
      name: "Viviana",
      edad: 19,
      calificacion: 10,
    },
    {
      name: "Wendy",
      edad: 20,
      calificacion: 8,
    },
    {
      name: "Gerson",
      edad: 18,
      calificacion: 9,
    }
  ];
  
  const calcularPromedioCalificaciones = (alumnos: Alumno[]): number => {
    const sumaCalificaciones = alumnos.reduce((suma, alumno) => suma + alumno.calificacion, 0);
    return sumaCalificaciones / alumnos.length;
  };
  
  const promedio = calcularPromedioCalificaciones(alumnos);

  return (
    <div className="container mt-5">
      <h2>Ejercicio 6: Promedio de Calificaciones de Alumnos</h2>
      
      <div className="card mb-4">
        <div className="card-header">
          <h5>Arreglo de Alumnos</h5>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Edad</th>
                  <th>Calificación</th>
                </tr>
              </thead>
              <tbody>
                {alumnos.map((alumno, index) => (
                  <tr key={index}>
                    <td>{alumno.name}</td>
                    <td>{alumno.edad}</td>
                    <td>{alumno.calificacion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-header">
              <h5>Resumen de Calificaciones</h5>
            </div>
            <div className="card-body">
              <p><strong>Total de alumnos:</strong> {alumnos.length}</p>
              <p><strong>Suma de calificaciones:</strong> {alumnos.reduce((suma, alumno) => suma + alumno.calificacion, 0)}</p>
              <p><strong>Promedio:</strong> <span className="text-success fw-bold">{promedio.toFixed(2)}</span></p>
            </div>
          </div>
        </div>
        
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-header">
              <h5>Detalles por Alumno</h5>
            </div>
            <div className="card-body">
              {alumnos.map((alumno, index) => (
                <div key={index} className="mb-2">
                  <strong>{alumno.name}</strong> ({alumno.edad} años): {alumno.calificacion}/10
                </div>
              ))}
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
{`interface Alumno {
  name: string;
  edad: number;
  calificacion: number;
}

const calcularPromedioCalificaciones = (alumnos: Alumno[]): number => {
  const sumaCalificaciones = alumnos.reduce((suma, alumno) => 
    suma + alumno.calificacion, 0
  );
  return sumaCalificaciones / alumnos.length;
};`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Ejercicio6; 