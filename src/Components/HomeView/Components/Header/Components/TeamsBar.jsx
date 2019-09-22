import React from 'react';
import './styles/styles.css'
import TeamLink from './TeamLink';

const TeamsBar = () => {

    const teams = [
        {
            title:"Noticias del Alavés",
            link: "https://www.marca.com/futbol/alaves.html?intcmp=MENUESCU&amp;s_kw=alaves",
            sourceImage: "http://assets.stickpng.com/thumbs/584ad125b519ea740933a895.png",
        },
        {
            title:"Noticias del Athletic de Bilbao",
            link: "https://www.marca.com/futbol/athletic.html?intcmp=MENUESCU&s_kw=athletic",
            sourceImage: "http://assets.stickpng.com/thumbs/584ad135b519ea740933a896.png",
        },
        {
            title:"Noticias del Atletico de Madrid",
            link: "https://www.marca.com/futbol/atletico.html?intcmp=MENUESCU&s_kw=atletico",
            sourceImage: "http://assets.stickpng.com/thumbs/584a9b63b080d7616d29877a.png",
        },
        {
            title:"Noticias del Barcelona",
            link: "https://www.marca.com/futbol/barcelona.html?intcmp=MENUESCU&s_kw=barcelona",
            sourceImage: "http://assets.stickpng.com/thumbs/584a9b3bb080d7616d298777.png",
        },
        {
            title:"Noticias del Betis",
            link: "https://www.marca.com/futbol/betis.html?intcmp=MENUESCU&s_kw=betis",
            sourceImage: "http://assets.stickpng.com/thumbs/584ad396b519ea740933a8d9.png",
        },
        {
            title:"Noticias del Celta",
            link: "https://www.marca.com/futbol/celta.html?intcmp=MENUESCU&s_kw=celta",
            sourceImage: "http://assets.stickpng.com/thumbs/584ad3c4b519ea740933a8df.png",
        },
        {
            title:"Noticias del Eibar",
            link: "https://www.marca.com/futbol/eibar.html?intcmp=MENUESCU&s_kw=eibar",
            sourceImage: "http://assets.stickpng.com/thumbs/584ad306b519ea740933a8c7.png",
        },
        {
            title:"Noticias del Espanyol",
            link: "https://www.marca.com/futbol/espanyol.html?intcmp=MENUESCU&s_kw=espanyol",
            sourceImage: "http://assets.stickpng.com/thumbs/584ad3b5b519ea740933a8dd.png",
        },
        {
            title:"Noticias del Getafe",
            link: "https://www.marca.com/futbol/getafe.html?intcmp=MENUESCU&s_kw=getafe",
            sourceImage: "http://assets.stickpng.com/thumbs/584ad4b1b519ea740933a8fc.png",
        },
        {
            title:"Noticias del Granada",
            link: "https://www.marca.com/futbol/granada.html?intcmp=MENUESCU&s_kw=granada",
            sourceImage: "http://assets.stickpng.com/thumbs/584ad13db519ea740933a897.png",
        },
        {
            title:"Noticias del Leganés",
            link: "https://www.marca.com/futbol/leganes.html?intcmp=MENUESCU&s_kw=leganes",
            sourceImage: "http://assets.stickpng.com/thumbs/584ad55fb519ea740933a910.png",
        },
        {
            title:"Noticias del Levante",
            link: "https://www.marca.com/futbol/levante.html?intcmp=MENUESCU&s_kw=levante",
            sourceImage: "http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/136.png",
        },
        {
            title:"Noticias del Mallorca",
            link: "https://www.marca.com/futbol/mallorca.html?intcmp=MENUESCU&s_kw=mallorca",
            sourceImage: "http://assets.stickpng.com/thumbs/584ad3aeb519ea740933a8dc.png",
        },
        {
            title:"Noticias del osasuna",
            link: "https://www.marca.com/futbol/osasuna.html?intcmp=MENUESCU&s_kw=osasuna",
            sourceImage: "http://assets.stickpng.com/thumbs/584ad403b519ea740933a8e7.png",
        },
        {
            title:"Noticias del Real Madrid",
            link: "https://www.marca.com/futbol/real-madrid.html?intcmp=MENUESCU&s_kw=realmadrid",
            sourceImage: "http://assets.stickpng.com/thumbs/584a9b47b080d7616d298778.png",
        },
        {
            title:"Noticias del Real Sociedad",
            link: "https://www.marca.com/futbol/real-sociedad.html?intcmp=MENUESCU&s_kw=realsociedad",
            sourceImage: "http://assets.stickpng.com/thumbs/584ad36ab519ea740933a8d3.png",
        },
        {
            title:"Noticias del Sevilla",
            link: "https://www.marca.com/futbol/sevilla.html?intcmp=MENUESCU&s_kw=sevilla",
            sourceImage: "http://assets.stickpng.com/thumbs/584ad291b519ea740933a8ba.png",
        },
        {
            title:"Noticias del Valencia",
            link: "https://www.marca.com/futbol/valencia.html?intcmp=MENUESCU&s_kw=valencia",
            sourceImage: "http://assets.stickpng.com/thumbs/584ad186b519ea740933a89e.png",
        },
        {
            title:"Noticias del Valladolid",
            link: "https://www.marca.com/futbol/valladolid.html?intcmp=MENUESCU&s_kw=valladolid",
            sourceImage: "http://assets.stickpng.com/thumbs/584ad354b519ea740933a8d1.png",
        },
        {
            title:"Noticias del Villareal",
            link: "https://www.marca.com/futbol/villarreal.html?intcmp=MENUESCU&s_kw=villarreal",
            sourceImage: "http://assets.stickpng.com/thumbs/584a9b57b080d7616d298779.png",
        },
    ];

    const teamsList = () => {
        return teams.map(({title,link,sourceImage}, i) => <TeamLink key={i} title={title} link={link} sourceImage={sourceImage} />)
    }

    return (

        <div className="container-fluid" style={{backgroundColor:'#eeeeee'}}>
            <div className="container p-1" style={{backgroundColor:'#eeeeee', display:'flex'}}>
                { teamsList() }
            </div>
        </div>
    );
};

export default TeamsBar;    