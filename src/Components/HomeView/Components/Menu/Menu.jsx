import React from 'react';
import NoticeCardMenu from './Components/NoticeCardManu';
import NoticeCard from './Components/NoticeCard';
import './Components/styles/Home.scss';

const Menu = () => {

    const news = [
        {
            title:'GRANADA 2 - 0 BARCELONA',
            text:'Debacle del barça',
            image:'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/09/22/15691057115599.jpg',
            footer: false
        },
        {
            title:'UNO A UNO',
            text:'Ansu Fati retrata a Griezmann y a Suárez',
            image:'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/09/23/15692600149415_310x174.jpg',
            footer: true
        },
        {
            title:'LALIGA',
            text:'¡El Granada es primero! Y el Madrid podría acabar líder la jornada',
            image:'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/09/23/15692597552373_310x174.jpg',
            footer: true
        }
    ];

    const renderMenuNews = () => (
        news.map(({title,text,image,footer},i) => <NoticeCardMenu key={i} title={title} text={text} image={image} footer={footer} />)
    )

    const renderNews = () => (
        news.map(({text,image, footer},i) => <div key={i} className=" col-12 col-md-4"><NoticeCard text={text} image={image} footer={footer} /></div>)
    )

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12 col-lg-8 mb-sm-3">
                    <div className="bd-example mb-1">
                        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/09/23/15692687609783.jpg" className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                    <p>Messi gana por primera vez el premio imponiéndose a Van Dijk y Cristiano</p>
                                    <h1 style={{fontWeight:600}}>Por fin es The Best</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="mt-2 borderBottomNews commentsPerCard card-body px-2 py-1">Comentarios<i className="fas fa-comment-alt"></i></p>
                </div>
                <div className="col-12 col-lg-4">
                    {renderMenuNews()}
                </div>
            </div>
            <div className="row">
               { renderNews() }
            </div>
            <div className="row my-4 marginTopCard borderBottomNews labelsNews">
                <ul className="mb-0 my-1">
                    <li className="mr-3"><b>Es noticia:</b></li>
                    <li className="mr-3"><a href="">The Best 2019</a></li>
                    <li className="mr-3"><a href="">Sevilla Real Madrid</a></li>
                    <li className="mr-3"><a href="">Final Supercopa Baloncesto</a></li>
                    <li className="mr-3"><a href="">Clasificacion Liga</a></li>
                    <li className="mr-3"><a href="">Calendario Liga</a></li>
                    <li className="mr-3"><a href="">Resultados Futbol</a></li>
                    <li className="mr-3"><a href="">Emmy 2019</a></li>
                </ul>
            </div>
            <div className="row">
                <div className="col-12 col-md-4">
                    <NoticeCardMenu 
                        title="LALIGA SANTANDER" 
                        text="¿Qué equipos y que jugadores estuvieron en la reunion de la AFE?" 
                        image="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/09/24/15692790805067.jpg"
                        footer={false}
                    />
                </div>
                <div className="col-12 col-md-4">

                </div>
                <div className="col-12 col-md-4">
                    <NoticeCardMenu 
                        title="SEVILLA FC" 
                        text="Draxier y Martial nombres 'top' en la recta final del mercado"
                        image="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/09/23/15692393924994.jpg"
                        footer={true}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4">
                    <NoticeCard 
                        text="Lunin, muy cerca de irse cedido al Leganés" 
                        image="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/09/22/15691723669537.jpg" 
                        footer={true}
                    />
                </div>
                <div className="col-12 col-md-4">
                    <NoticeCard 
                        text="Algo pasa con Rodrigo" 
                        image="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/09/23/15692506295722_310x174.jpg" 
                        footer={true}
                    />
                </div>
                <div className="col-12 col-md-4">

                </div>
            </div>
        </div>
    );
};

export default Menu;