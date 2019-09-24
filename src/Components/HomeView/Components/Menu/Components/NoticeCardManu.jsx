import React from 'react';

const NoticeCardMenu = ({ title, text, image, footer }) => (
    <div className="card borderBottomNews marginBottomCards" style={{maxWidth: '540px'}}>
        <div className="row no-gutters">
            <div className="col-md-4">
                <img src={image} className="card-img" alt="..." /> 
            </div>
            <div className="col-md-8">
                <div className="card-body pt-lg-0">
                    <h5 className="card-title text-primary" style={{fontSize: 15}}>{title}</h5>
                    <p className="card-text" style={{fontWeight:600}}>{text}</p>
                </div>
            </div>
            <div className="commentsPerCard">
                {footer ? <><b>PABLO EGEAMADRID</b><label htmlFor=""><i className="fas fa-comment-alt"></i> &nbsp;200</label></> : <div style={{marginBottom:'23px'}}></div>}
            </div>
        </div>
    </div>
);

export default NoticeCardMenu;