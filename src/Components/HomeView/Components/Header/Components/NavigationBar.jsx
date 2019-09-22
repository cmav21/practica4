import React from 'react';

const NavigationBar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark py-0" style={{backgroundColor:'#DA1C1C'}}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown mx-2">
                    <a className="nav-link dropdown-toggle text-white" style={{fontWeight:600, fontSize:17}} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Fútbol
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item dropdown mx-2">
                    <a className="nav-link dropdown-toggle text-white" style={{fontWeight:600, fontSize:17}} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Baloncesto
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item dropdown mx-2">
                    <a className="nav-link dropdown-toggle text-white" style={{fontWeight:600, fontSize:17}} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Motor
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item dropdown mx-2">
                    <a className="nav-link dropdown-toggle text-white" style={{fontWeight:600, fontSize:17}} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Polideportivo
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item" style={{backgroundColor:'#C01111'}}>
                    <ul className="navbar-nav mx-md-2 mx-lg-5">
                        <li className="nav-item">
                            <a className="nav-link text-white" style={{fontSize:15}} href="#" tabIndex="-1" aria-disabled="true">Videos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" style={{fontSize:15}} href="#" tabIndex="-1" aria-disabled="true">Ultima hora</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" style={{fontSize:15}} href="#" tabIndex="-1" aria-disabled="true">eSports</a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item mx-3">
                    <a className="nav-link text-white" style={{fontWeight:600, fontSize:17}} href="#" tabIndex="-1" aria-disabled="true">Más +</a>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Buscar en marca.com" aria-label="Search" />
            </form>
        </div>
    </nav>
);

export default NavigationBar;

