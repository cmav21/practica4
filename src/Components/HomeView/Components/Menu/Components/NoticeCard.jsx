import React from 'react';

const NoticeCard = ({image, text}) => (
    <div class="card" style={{width:'100%'}}>
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
            <p class="card-text">{text}</p>
        </div>
    </div>
);

export default NoticeCard;