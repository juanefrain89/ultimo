import { Investor } from '../../../components/Invesor';

export const Dashboard = () => {

    return (

        <>
        
            <Investor>
                
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="fw-semibold fs-1 text-white">Dashboard</p>
                                </div>
                                <div className="col-md-6">
                                    <div className="w-100 border border-secondary p-4" style={{borderRadius: '15px'}}>
                                        <p className="text-white text-center fs-4">costos </p>
                                        <div className="bg-main p-3 mt-3" style={{borderRadius: '15px'}}>
                                            <p className="text-secondary fw-semibold fs-6 m-0">brackets</p>
                                            <p className="text-white fw-semibold fs-2 m-0">2,0000.<sup>35</sup>$</p>

                                        </div>
                                        <div className="bg-main p-3 mt-3" style={{borderRadius: '15px'}}>
                                            <p className="text-secondary fw-semibold fs-6 m-0">limpieza</p>
                                            <p className="text-white fw-semibold fs-2 m-0">350.<sup>01</sup> $</p>

                                        </div>
                                        <div className="bg-main p-3 mt-3" style={{borderRadius: '15px'}}>
                                            <p className="text-secondary fw-semibold fs-6 m-0">empaste</p>
                                            <p className="text-white fw-semibold fs-2 m-0">500,.<sup>50</sup>$</p>

                                        </div>
                                    </div>

                                    <div className="bg-main p-3 mt-3" style={{borderRadius: '15px'}}>
                                        <p className="text-white fw-semibold fs-6 m-0">FECHA DE ACTUALIZACIÓN</p>
                                        <p className="text-secondary fs-6 m-0">25/01/2024 03:55:00</p>
                                    </div>

                                </div>
                                <div className="col-md-6">
                                    <div className="w-100 border border-secondary p-4" style={{borderRadius: '15px'}}>
                                        <p className="text-white text-center fs-4">costos</p>
                                        <div className="bg-main p-3 mt-3" style={{borderRadius: '15px'}}>
                                            <p className="text-secondary fw-semibold fs-6 m-0">extracciones</p>
                                            <p className="text-white fw-semibold fs-2 m-0">240 $</p>
                                        </div>
                                        <div className="bg-main p-3 mt-3" style={{borderRadius: '15px'}}>
                                            <p className="text-secondary fw-semibold fs-6 m-0">blanqueamiento</p>
                                            <p className="text-white fw-semibold fs-2 m-0">1000 $</p>                                            
                                        </div>
                                        <div className="bg-main p-3 mt-3" style={{borderRadius: '15px'}}>
                                            <p className="text-secondary fw-semibold fs-6 m-0">coronas</p>
                                            <div className="d-flex">
                                            <p className="text-white fw-semibold fs-2 m-0">2000$</p>
                                            <button className="btn btn-primary ms-auto">Detalle</button>                                            
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="w-100 border border-secondary p-4" style={{borderRadius: '15px'}}>
                                <p className="text-white fs-4 text-center">observaciones</p>

                                <div className="mt-4 d-flex">
                                    <div>
                                        <img src="/src/assets/img/iconos/checkmark.png" style={{width: '25px', marginRight:'15px'}} />
                                    </div>
                                    <p className='text-white m-0'>modificar precios y tiempo aproximado.</p>
                                </div>

                                <div className="mt-4 d-flex">
                                    <div>
                                        <img src="/src/assets/img/iconos/checkmark.png" style={{width: '25px', marginRight:'15px'}} />
                                    </div>
                                    <p className='text-white m-0'>tarjeta de pago santander</p>
                                </div>

                                <div className="mt-4 d-flex">
                                    <div>
                                        <img src="/src/assets/img/iconos/checkmark.png" style={{width: '25px', marginRight:'15px'}} />
                                    </div>
                                    <p className='text-white m-0'>cantidades en pesos mexicanos.</p>
                                </div>

                                <div className="mt-4 d-flex">
                                    <div>
                                        <img src="/src/assets/img/iconos/checkmark.png" style={{width: '25px', marginRight:'15px'}} />
                                    </div>
                                    <p className='text-white m-0'>tratamiento mas costoso: 20,000.</p>
                                </div>

                               

                                <div className="mt-5 p-5">
                                    <img src="/src/assets/img/dashboard/01.png" className='w-100' />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </Investor>

        </>

    )

}