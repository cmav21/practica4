import React from 'react';

const NoticeCard = ({image, text, footer}) => (
    <div className="card borderBottomNews" style={{width:'100%', height:'100%'}}>
        <img src={image} className="card-img-top"  alt="..." />
        <div className="card-body">
            <p className="card-text">{text}</p>
        </div>
        <div className="commentsPerCard">
            {footer && <><b>PABLO EGEAMADRID</b><label htmlFor=""><i className="fas fa-comment-alt"></i> &nbsp;200</label></>}        
        </div>
    </div>
);

export default NoticeCard;