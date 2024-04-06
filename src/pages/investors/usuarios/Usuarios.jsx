import React, { Fragment, useState } from "react";
import "./usuariosestilos.css";
import { Investor } from '../../../components/Invesor';

const J = () => {
    
  const [contador, setContador] = useState(1);
  const [citas, setCitas] = useState([
    { id: contador, cliente: "Martin", hora: 1, minutos: 0 },
    { id: contador + 1, cliente: "Jose", hora: 1, minutos: 30 },
    { id: contador+2, cliente: "julian", hora: 2, minutos: 0 },
    { id: contador + 3, cliente: "aron", hora: 2, minutos: 30 },
    { id: contador +4, cliente: "jaret", hora: 3, minutos: 20 },
    { id: contador + 5, cliente: "cristian", hora: 3, minutos: 50 },
    { id: contador +6, cliente: "gerardo", hora: 4, minutos: 40 },
    { id: contador + 7, cliente: "gustavo", hora: 4, minutos: 30 }
    
  ]);
  const [minutosInput, setMinutosInput] = useState(0);
  const [citaAtrasadaId, setCitaAtrasadaId] = useState(null);

  const atrasarCita = (e, id) => {
    setMinutosInput(parseInt(e.target.value, 10));
    setCitaAtrasadaId(id);
  };

  const confirmarAtraso = () => {
    setCitas((prevCitas) => {
      const nuevasCitas = prevCitas.map((cita) => {
        if (cita.id >= citaAtrasadaId) {
          return {
            ...cita,
            minutos: cita.minutos + minutosInput,
          };
        } else {
          return cita;
        }
      });

      setContador((prevContador) => prevContador + 2);

      return nuevasCitas;
    });
  };

  return (
    <Fragment>
        <Investor> 
      <div className="padre1">
        

        <div className="containeri">
          <div className="dere">
            <h1 className="a">Citas del día</h1>
            <table className="tabla-usuarios">
              <thead>
                <tr>
                  <th className="td-usuarios">Cliente</th>
                  <th className="td-usuarios">Hora de cita</th>
                  <th className="td-usuarios">Atrasar</th>
                </tr>
              </thead>
              <tbody>
                {citas.map((cita) => (
                  <tr key={cita.id} className="tr-usuarios">
                    <td className="td-usuarios">{cita.cliente}</td>
                    <td className="td-usuarios">
                      {cita.hora}:{cita.minutos}
                    </td>
                    <td className="td-usuarios">
                      <input
                        type="number"
                        onChange={(e) => atrasarCita(e, cita.id)}
                        placeholder="Atrasar en minutos"
                      />
                      <button onClick={confirmarAtraso}>Confirmar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            
          </div>
        </div>
      </div>
      </Investor>
    </Fragment>
  );
};

export default J;
