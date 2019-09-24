import React from 'react';
import './styles/navigationBar.scss';
import NavigationItem from './NavigationItem';

const items = [
    'Fútbol',
    'Baloncesto',
    'Motor',
    'Polideportivo',
]

const renderItems = () => (
    items.map((item, i) =><NavigationItem name={item} />)
);

const NavigationBar = ({ top,scroll }) => (
    !top ? 
        <div className="fixed-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-0">
                <a className="navbar-brand girar" href="#">
                    <img src="http://gruposas.es/images/varios/Marca.png" className="mr-4" width="12%" alt=""/>
                    <b style={{fontFamily: 'inherit'}}>Portada</b>
                </a>
            </nav>
            <div className="progress" style={{height: '2px'}}>
                <div className="progress-bar" role="progressbar" style={{width: `${scroll}px`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div> : 
        <nav className={`navbar navbar-expand-lg navbar-dark py-0 `} style={{backgroundColor:'#DA1C1C'}}>
            <a className="navbar-brand girar navbar-toggler" style={{border:'none', cursor: 'default'}} href="#">
                <img src="http://gruposas.es/images/varios/Marca.png" className="mr-4"width="12%" alt=""/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {renderItems()}
                    <li className="nav-item girar px-3" style={{backgroundColor:'#C01111'}}>
                        <ol class="breadcrumb my-0" style={{backgroundColor:'#C01111'}}>
                            <li className="mr-2"><i class="fas fa-hashtag" style={{fontSize:20, color: '#910707', display:'inline-block'}}></i></li>
                            <li class="breadcrumb-item mr-2"><a className="text-white" href="#">Videos</a></li>
                            <li class="breadcrumb-item mr-2"><a className="text-white" href="#">Última hora</a></li>
                            <li class="breadcrumb-item"><a className="text-white" href="#">eSports</a></li>
                        </ol>
                    </li>
                    <li className="nav-item mx-sm-2 mx-3">
                        <a className="nav-link text-white encabezado" href="#" tabIndex="-1" aria-disabled="true">Más +</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Buscar en marca.com &nbsp; &#xf002;" aria-label="Search" />
                </form>
            </div>
        </nav>
);

export default NavigationBar;

