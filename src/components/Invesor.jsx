import { useState } from 'react';
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { NavLink } from 'react-router-dom';
import "./Admin.css"
import axios from 'axios';
import "./contenido.css"
import usuarios from "/src/assets/img/iconos/usuarios.png";
import dash from "/src/assets/img/iconos/dashboard.png";
import contratos from "/src/assets/img/iconos/contratos.png";
import eventos from "/src/assets/img/iconos/eventos.png";
import wallet from "/src/assets/img/iconos/eventos.png";
import idioma from "/src/assets/img/iconos/idioma.png"
import user from "/src/assets/img/iconos/user.png";
export function Investor(props) {

    const active = ({ isActive }) => isActive ? "link-menu active" : "link-menu";

    let getLanguageStore = localStorage.getItem("language")

    const { t } = useTranslation();
    const { i18n } = useTranslation();
const [encontrar, setencontrar]=useState()
    const [users, setUsers] = useState([]);


    const cerrarsesion =()=>{
        localStorage.removeItem("users")
        localStorage.removeItem("id")
        window.location.href = "http://localhost:5173";

    }

    const correo = localStorage.getItem("users")
    


    const [mostrarContenido, setmostrar]=useState(false);
    const x =()=>{
        setmostrar(!mostrarContenido)
    }

    function changeLanguage(type) {
        localStorage.setItem("language", type);
        i18n.changeLanguage(type);
    }

    const Membership = true;

    if (!Membership) {
        window.location.href = '/membership';
    }
const rol = localStorage.getItem("rol")
    return (
        <>

                <div className='container-fluid background'>
                    <div className="row">
                        <div className="col-md-2 px-0 position-relative">
                            <div className="vh-100 w-100 border-end border-secondary position-sticky top-0">
                                <div className="h-100 d-flex flex-column">
                                    <div className="logo p-4">
                                        <h1 className='hql'>dent app</h1>
                                    </div>
                                    
                                    <ul className='mb-4 p-3 position-sticky top-5'>
                
                                        <li><NavLink to='/dashboard' 
                                                className={active}><img src={dash} className='icon-image' alt="" /> <span>{t('pages.dashboard')}</span></NavLink></li>
                                      



                                      
   { rol == 'administrador' ? (
        <li>
            <NavLink to='/usu' className={active}>
                <img src={usuarios} className='icon-image' alt="" /> 
                <span>{t('clientes')}</span>
            </NavLink>
        </li>
    ) : (
        <NavLink to='/personalizar' className={active}>
        <img src={usuarios} className='icon-image' alt="" /> 
        <span>{t('mis datos')}</span>
    </NavLink>
    )}

                                        
                                        <li><NavLink to='/usuarios' 
                                                className={active}><img src={contratos} className='icon-image' alt="" /> <span>{t('atrasar citas')}</span></NavLink></li>
                                         <li><NavLink to='/events' 
                                                className={active}><img src={eventos} className='icon-image' alt="" /> <span>{t('citas del mes')}</span></NavLink></li>

                                    </ul>

                                    <div className="mt-auto p-4">
                                        <div className='d-flex'>
                                            <div className='mx-1'>    
                                                <box-icon name='envelope' color='white'></box-icon>                                
                                            </div>
                                            <div className='mx-1'>    
                                                <box-icon type='logo' color='white' name='facebook'></box-icon> 
                                            </div>
                                            <div className='mx-1'>    
                                                <box-icon type='logo' color='white' name='instagram'></box-icon> 
                                            </div>
                                            <div className='mx-1'>    
                                                <box-icon type='logo' color='white' name='telegram'></box-icon>
                                            </div>
                                        </div>
                                        
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-10 px-0">
                            <div className="container-fluid px-0">
                                <div className="p-4 border-bottom border-secondary position-sticky top-0 background">
                                    <div className="d-flex align-items-center">
                                        <div className="ms-auto me-3">
                                            <img src={wallet} style={{width: '25px'}} />
                                        </div>
                                        <div className="mx-3">
                                            <img src={idioma} style={{width: '25px'}} />
                                        </div>
                                        <div className="mx-3 d-flex">
                                            <div className="border border-secondary px-4 py-2 rounded-start">
                                                <span className="text-secondary">0x75d...79b4</span>
                                            </div>
                                            <button className="bg-transparent border-start-0 border-top border-bottom border-end border-secondary px-4 py-2 rounded-end">
                                                <p className="text-white m-0 d-flex align-items-center"><box-icon name='link' color='white'></box-icon> <span className='ms-2'>Copiar link de referido</span></p>
                                            </button>
                                        </div>
                                        <div className="ms-3">
                                            <img src={user}  onClick={x} style={{width: '32px'}} />
                                            
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                {mostrarContenido && (
        <div className='contenidooculto' >
         <div className='hs'> <div className="contenidooculto1"><p onClick={cerrarsesion}>cerrar sesion</p></div>
         <div className="contenidooculto1"><p onClick={cerrarsesion}>{correo}</p></div>
          </div>
        </div>
      )}
                                <div className="p-4">
                                    {props.children}
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
        </>
    )
}