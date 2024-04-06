import { NavLink } from 'react-router-dom';

export function Admin(props) {

    const active = ({ isActive }) => isActive ? "ad-link-item active" : "ad-link-item";

    return (

        <>

            <div className="flex ad-admin-box justify-center">

                <div className="flex min-h-screen items-stretch w-[800px] shadow-lg">

                    <div className='w-[150px] ad-admin-navbar relative'>
                        <ul className='my-4 sticky top-5'>
                            <li><NavLink to='/admin/stats' 
                                    className={active}>Estadísticas</NavLink></li>
                            <li><NavLink to='/admin/contract' 
                                    className={active}>Contrato</NavLink></li>
                            <li><NavLink to='/admin/users' 
                                    className={active}>Usuarios</NavLink></li>
                            <li><NavLink to='/admin/tools' 
                                    className={active}>Herramientas</NavLink></li>
                            <li><NavLink to='/admin/announcements' 
                                    className={active}>Anuncios</NavLink></li>
                            <li><NavLink to='/admin/block' 
                                    className={active}>Bloqueos</NavLink></li>
                            <li><NavLink to='/admin/ranges' 
                                    className={active}>Rangos</NavLink></li>
                        </ul>
                    </div>
                    <div className='bg-white grow py-8 px-4'>
                        {props.children}
                    </div>

                </div>

            </div>
        
        </>

    )

}