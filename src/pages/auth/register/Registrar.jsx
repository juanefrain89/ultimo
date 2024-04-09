
import React, { useState } from 'react';
import "./sd.css"
import imagen from "./th.jpeg"
const Registrar = () => {
    const [datos, set]=useState({
        correo:"",
        password:"",
        tratamiento:""
        
    })

    const x =(e)=>{
        set({
            ...datos,
            [e.target.name]:e.target.value
        })

    }

    const y=()=>{
        

    const obj={
        correo:datos.correo,
        password:datos.password,
        tratamiento:datos.tratamiento
    }
    e.preventDefault()
    fetch("https://ddcd-5.onrender.com//registrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify( obj) 
      })
    
    }

    return ( 
        <>
            <div className="contenedor-box">
                <h1 className="huno">Registrarme aquí</h1>
                <img src={imagen} alt="" className="avatar"/>
    <form  action="http://localhost:4200/registrar" method="post">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" className="usuarios" placeholder="Introduce tu nombre"/>
                    <label htmlFor="                apellidos">Apellidos</label>
                    <input type="text" name="apellidos" className="usuarios" placeholder="Introduce tus apellidos"/>
                    <label htmlFor="correo">Correo</label>
                    <input type="text"  name="correo" className="usuarios" placeholder="Introduce tu correo"/>
                   
                    <label htmlFor="password">numero</label>
                    <input type="text" name="numero" className="usuarios" placeholder="Introduce tu numero"/>
                    <label htmlFor="password">tratamiento</label>
                    <input type="text" onChange={x} name="tratamiento" className="usuarios" placeholder="Introduce tu tratamiento"/>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" onChange={x} name="password" className="usuarios" placeholder="Introduce tu contraseña"/>
                    <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                    <input type="password" name="confirmPassword" className="usuarios" placeholder="Confirma tu contraseña"/>
                    
                    <button className='buttone' type="submit">Registrarme</button>
                    
                </form>
            </div>
        </>
     );
}
 
export default Registrar;
