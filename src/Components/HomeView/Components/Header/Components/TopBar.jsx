import React from 'react';
import './styles/topBar.scss'
import spain from '../../../../../Assets/spain.png';

const TopBar = () => (
    <div className="container-fluid my-1 d-none d-lg-block">
        <div className="row">
            <div className="col-5">
                <div className="row leftSection">
                    <div className="col-4 section">
                        <img src="https://e00-marca.uecdn.es/imagenes/2019/09/22/portada/marca_papel/1569103512_extras_primera_papel_0.jpg" alt=""/> &nbsp;
                        <strong>
                            La portada de hoy
                        </strong>
                    </div>
                    <div className="col-4 section">
                        <a href="#" className="text-dark" style={{textDecoration:"none"}}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Radio_Marca_Nuevo_Logo.png" width="45%" alt=""/>
                            <strong>
                                Radio MARCA
                            </strong>
                        </a>
                    </div>
                    <div className="col-4">
                        <img src="https://e00-marca.uecdn.es/assets/v16/img/cuidateplus.svg" width="25%" alt=""/>
                        <strong>
                            CuidatePlus
                        </strong>
                    </div>
                </div>
            </div>
            <div className="col-3 pl-5">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Marca.svg/560px-Marca.svg.png" width="50%" alt=""/>    
            </div>            
            <div className="col-4 text-right rightSection">
                <button type="button" className="btn btn-light dropdown-toggle country mr-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src={spain} alt=""/> ES
                </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Separated link</a>
                </div>
                <button className="btn suscription text-white py-1 mr-2">Suscribéte</button>
                <button className="btn btn-light login">Iniciar sesión</button>
            </div>
        </div>
    </div>
);

export default TopBar;