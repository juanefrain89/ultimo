import { BrowserRouter, Routes, Route,HashRouter} from 'react-router-dom';
import '/src/assets/css/style.css';
import Login from './pages/auth/login/Login';
import { Dashboard } from './pages/investors/dashboard/Dashboard';


import { Events } from './pages/investors/events/Events';
import Referidos from './pages/investors/referrals/Referidos';
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import esTranslation from "./i18n/es.json";
import enTranslation from "./i18n/en.json";
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Usuarios from './pages/investors/usuarios/Usuarios';
import Registrar from './pages/auth/register/Registrar';
import Personalizar from './pages/investors/dashboard/Personalizar';
import NuevaFecha from './pages/investors/events/NuevaFecha';



function App() {
    
    let getLanguageStore = localStorage.getItem("language")

    i18next.init({
        interpolation: { escapeValue: false },
        lng: getLanguageStore,
        fallbackLng: "es",
        resources: {
          es: {
            translation: esTranslation,
          },
          en: {
            translation: enTranslation,
          }
        },
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        
         localStorage.getItem('users');

        if (localStorage.getItem('users')) {
           
            setIsLoggedIn(true);
            
        } else {
           
            setIsLoggedIn(false);
        }
    }, []);

    return (


        <div>
            <I18nextProvider i18n={i18next}>
                <HashRouter>
                    <Routes>
                        <Route path='/' element={<Login/>} />
                       <Route path='/registrar' element={<Registrar/>} />
                      
                            <>
                               
                                <Route path='/dashboard' element={<Dashboard />} />
                                <Route path='/usuarios' element={<Usuarios />} />
                                <Route path='/usu' element={<Referidos />} />
                                <Route path='/events' element={<Events />} />
                                <Route path='/contratos' element={<Usuarios />} />
                                <Route path='/personalizar' element={<Personalizar />} />
                                <Route path='/p' element={<NuevaFecha />} />                                                          
                            </>
                    
                   </Routes>
                </HashRouter>
            </I18nextProvider>
        </div>
    )
}

export default App
