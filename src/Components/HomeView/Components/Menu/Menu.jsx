import React from 'react';
import Notice from './Components/Notice';
import NoticeCardMenu from './Components/NoticeCardManu';
import NoticeCard from './Components/NoticeCard';

const Menu = () => {

    const news = [
        {
            title:'GRANADA 2 - 0 BARCELONA',
            text:'Debacle del barça',
            image:'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/09/22/15691057115599.jpg',
        },
        {
            title:'UNO A UNO',
            text:'Ansu Fati retrata a Griezmann y a Suárez',
            image:'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/09/22/15691057115599.jpg',
        },
        {
            title:'LALIGA',
            text:'¡El Granada es primero! Y el Madrid podría acabar líder la jornada',
            image:'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/09/22/15691057115599.jpg',
        }
    ];

    const renderMenuNews = () => (
        news.map(({title,text,image},i) => <NoticeCardMenu key={i} title={title} text={text} image={image} />)
    )

    const renderNews = () => (
        news.map(({text,image},i) => <div key={i} className="col-4"><NoticeCard text={text} image={image} /></div>)
    )

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12 col-md-8 mb-sm-3" style={{borderBottom:'1px solid black'}}>
                    <Notice />
                    comentarios
                </div>
                <div className="col-12 col-md-4">
                    {renderMenuNews()}
                </div>
            </div>
            <div className="row">
               { renderNews() }
            </div>
            <div className="row">
                <div className="col-12">
                    hola
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <NoticeCardMenu title="LALIGA SANTANDER" text="¿Qué equipos y que jugadores estuvieron en la reunion de la AFE?" image="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/09/22/15691057115599.jpg" />
                </div>
                <div className="col-4">

                </div>
                <div className="col-4">
                    <NoticeCardMenu title="SEVILLA FC" text="Draxier y Martial nombres 'top' en la recta final del mercado" image="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/09/22/15691057115599.jpg" />
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <NoticeCard text="Lunin, muy cerca de irse cedido al Leganés" image="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/09/22/15691057115599.jpg" />
                </div>
                <div className="col-4">
                    <NoticeCard text="Algo pasa con Rodrigo" image="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/09/22/15691057115599.jpg" />
                </div>
                <div className="col-4">

                </div>
            </div>
        </div>
    );
};

export default Menu;