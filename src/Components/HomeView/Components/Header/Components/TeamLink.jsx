import React from 'react';

const TeamLink = ({ title, link, sourceImage }) => (
    <div style={{display: 'inline-block'}}>
        <a title={title} href={link}>
            <img src={sourceImage} width="60%" alt=""/>
        </a>
    </div>
);

export default TeamLink;