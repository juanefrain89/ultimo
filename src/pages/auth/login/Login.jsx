import React, { useEffect, useState } from 'react';

import thImage from "./imagenes/th.jpeg";
import "./estilo1.css";
import "./estilo2.css";
import "./style.css";

const Login = () => {
    useEffect(() => {
        document.body.classList.add('no');
    }, []);

    const [input, setInput] = useState({
        correo: "",
        password: ""
    });

    useEffect(() => {
        localStorage.removeItem("users");
    }, []);

    const [alerta, setAlerta] = useState("");
    const [dis, setDis] = useState(true);

    const modificar = (e) => {
        setInput(prevInput => ({
            ...prevInput,
            [e.target.name]: e.target.value
        }));

        if (e.target.name === "correo") {
            const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
            setAlerta(correoValido ? "" : "Por favor, introduce un correo electrónico válido");
            setDis(!correoValido); 
        }
    }

    const usuarios=[
        { correo: "razoj140@gmail.com",
        password :"12345"
    },
    {
        correo :"aron@gmail.com",
        password :"12345"
    }
    ]

    const ejecutarLogin = (e) => {
        e.preventDefault();

        const obj = {
            correo: input.correo,
            password: input.password
        };

        

       
        
    for (let i = 0; i < usuarios.length; i++) {
        if (input.correo == usuarios[i].correo && input.password == usuarios[i].password) {
            console.log("jdjdjdjd");
            localStorage.setItem("users", input.correo);
            localStorage.setItem("usercontraseña", input.password);
            window.location.href = "http://localhost:5173/dashboard";
            
        }

    }
    setInput({
        correo: "",
        password: ""
    });
      
    }
    

    

    return (
        <> 
            <header>
                <div className="logo">
                    <img src="logo.png" alt="logo de la compañia" />
                    <h2 className="nombreempresa">DENT APP</h2>
                </div>
                <nav>
                    <a href="curriculum.html" className="nav'link">Sobre nosotros</a>
                    <a href="descargas2.html" className="nav'link">Descargas</a>
                    <a href="buscarid.html" className="nav'link">Buscar</a>
                    <a href="borrar.html" className="nav'link">Borrar</a>
                </nav>
            </header>

            <form className="formularia">
                <div className='fff'>  
                <h1 className='hh1'>Iniciar sesión</h1>
                <div className="input-contenedor">
                    <i className="fas fa-envelope icon"></i> 
                    <input value={input.correo} type="text" onChange={modificar} name="correo"  placeholder="Introduce tu correo" />
                </div>

                <div className="input-contenedor">
                    <i className="fas fa-key icon"></i> 
                    <input type="password" value={input.password} name='password' onChange={modificar}  placeholder="Introduce contraseña" />
                </div>
                
                <input type="submit" value="login" disabled={dis} className='buttonn2' onClick={ejecutarLogin}/>
                <p className='pp'>Al registrarte, aceptas nuestras condiciones de uso y política de privacidad.</p>
                <p className='pp'>¿Ya tienes cuenta? <a className="linkk" href="https://avegury.000webhostapp.com/registrar">Regístrate</a></p>
                
                <div>
                    <p className='pp'>Registrarse como dentista <a className="link" href="registrodentist.html">Registro dentista</a></p>
                </div>
                </div>
            </form>

            <footer className="footer">
                <div className="container">
                    <div className="footer-row">
                        <div className="footer-links">
                            <h4>Compañía</h4>
                            <ul>
                                <li><a href="#">Nosotros</a></li>
                                <li><a href="#">Nuestros servicios</a></li>
                                <li><a href="#">Política de privacidad</a></li>
                            </ul>
                        </div>
                        <div className="footer-links">
                            <h4>Ayuda</h4>
                            <ul>
                                <li><a href="#">Preguntas</a></li>
                                <li><a href="#">Estatus de citas</a></li>
                                <li><a href="#">Pagos</a></li>
                            </ul>
                        </div>
                        <div className="footer-links">
                            <h4>Síguenos</h4>
                            <div className="social-links">
                                <a href="https://www.facebook.com/home.php?ref=wizard"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-whatsapp"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Login;
