import React from 'react';

const NavigationItem = ({ name }) => (
    <li className="nav-item dropdown mx-2">
        <a className="nav-link dropdown-toggle text-white encabezado" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {name}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
        </div>
    </li>
);

export default NavigationItem;