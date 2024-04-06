import React, { useEffect, useState } from "react";
import { Investor } from "../../../components/Invesor";
import "./sty.css"
const Personalizar = () => {
  const [datos, setDatos] = useState([]);
  
const [correo, setcorreo] = useState("");
const [tratamiento, settratamiento] = useState("");
const [numero, setnumero] = useState("");
const [password, setpassword]=useState("")
const [id,setid]=useState("")
  
  useEffect(() => {
    const ejec = () => {
      const ide = localStorage.getItem("id");

      fetch("http://localhost:4200/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: ide })
      })
        .then(res => res.json())
        .then(cred => {
          console.log(cred);
          setDatos(cred);
        });
    };
    ejec();
  }, []);

  const handleModificar = e => {
    const { name, value } = e.target;
    if (name === "correo") {
      setcorreo(value);
    } else if (name === "password") {
      setpassword(value);
    } else if (name === "tratamiento") {
      settratamiento(value);
    }
  };


const modificar =  (e, id)=>{
    e.preventDefault()
    
    e.target.className ="boton-none"
   
  console.log(id);
    e.currentTarget.parentNode.parentNode.classList.remove("mm") 
    e.currentTarget.parentNode.parentNode.classList.add("ml") 
    e.currentTarget.parentNode.classList.remove("contenedorbotones")
    e.currentTarget.parentNode.classList.add("contenedorbotones2")
  
    setpassword(id.password)
   setnumero(id.numero)
   settratamiento(id.tratamiento)
   setcorreo(id.correo)
   setid(id.id)
  


   


   
}

  
const as = async()=>{
    
    const obj={correo,password,id}
    console.log(obj);
    fetch("http://localhost:4200/userdatos", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(obj) 
          })
           
    
}

  const handleEliminar = (evento, id_personal) => {
    evento.preventDefault();
    alert("solo admin pueden borrar cuentas ")
  };

  return (
    <>
    <Investor> 
      <center>
        <h1 className="h1">Clientes </h1>
      </center>
      
        <div className="padre-1">
          {datos.map((e, index) => (
            <div className="contenedor-1" name="contenedor" key={index}>
              <center>
                <h1 className="h1contenedor">{e.cliente}</h1>
             
              <div className="mm">
                <div className="mm2">
                  <p className="p-referido">Correo: {e.correo}</p>
                  <p className="p-referido">contraseña: {e.password}</p>
                  <p className="p-referido">Tratamiento: brackets</p>
                </div>

                <div className="mm1">
                  <p>Introduce nuevo correo</p>
                  <input
                    type="text"
                    onChange={handleModificar}
                    value={correo}
                    name="correo"
                  />
                  <p>contraseña</p>
                  <input
                    type="text"
                    value={password}
                    onChange={handleModificar}
                    name="password"
                  />
                  <p>Tratamiento</p>
                  <input
                    type="text"
                    onChange={handleModificar}
                    value="brackets"
                    name="tratamiento"
                    disabled="true"
                  />
                </div>

                <div className="contenedorbotones">
                  <a
                    href=""
                    className="action"
                    onClick={event => modificar(event, e)}
                  >
                    Modificar
                  </a>
                  <button className="o" onClick={as}>
                    Enviar
                  </button>
                  <button
                    className="botoneliminar"
                    onClick={evento => handleEliminar(evento, e.id_personal)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
              </center>
            </div>
          ))}
        </div>
    
      </Investor>
    </>
  );
};

export default Personalizar;
