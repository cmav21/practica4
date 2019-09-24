import React from 'react';
import Facebook from '../../../../../Assets/facebook.png';
import Google from '../../../../../Assets/google-plus.png';
import Rss from '../../../../../Assets/rss.png';
import Twitter from '../../../../../Assets/twitter.png';


const SocialMedias = () => (
    <div className="container-fluid mt-3 mb-5">
        <div className="container text-center">
            <div className="row">
                <div className="col-12">
                    <p style={{fontSize:14}}><b>Agosto 2018 Unidad Editorial Información Deportiva, S.L.U. Todos los derechos reservados</b></p>
                </div>
                <div className="col-12 mb-2">
                    <ul>
                        <li style={{display:'inline-block', marginRight:'12px'}}>Términos y condiciones de uso</li>
                        <li style={{display:'inline-block', marginRight:'12px'}}>Politica de privacidad</li>
                        <li style={{display:'inline-block', marginRight:'12px'}}>Politica de cookies</li>
                        <li style={{display:'inline-block', marginRight:'12px'}}>Certificado por OJD</li>
                        <li style={{display:'inline-block', marginRight:'12px'}}>Contacto</li>
                        <li style={{display:'inline-block', marginRight:'12px'}}>Publicidad</li>
                        <li style={{display:'inline-block', marginRight:'12px'}}>Ayuda</li>
                        <li style={{display:'inline-block', marginRight:'12px'}}>Nuestro Equipo</li>
                        <li style={{display:'inline-block', marginRight:'12px'}}>Venta de Contenidos</li>
                    </ul>
                    <small style={{fontSize:14}}><b>Siguenos en:</b></small>
                </div>
                <div className="col-12 text-center">
                        <img className="mr-2" src={Facebook} alt=""/>
                        <img className="mr-2" src={Twitter} alt=""/>
                        <img className="mr-2" src={Rss} alt=""/>
                        <img className="mr-2" src={Google} alt=""/>
                </div>
            </div>
        </div>
    </div>
);

export default SocialMedias;