import React from 'react';

const NoticeCardMenu = ({ title, text, image }) => (
    <div className="card mb-4" style={{maxWidth: '540px', border: 'none', borderBottom: '1px solid black'}}>
        <div className="row no-gutters">
            <div className="col-md-4">
                <img src={image} className="card-img" alt="..." /> 
            </div>
            <div className="col-md-8">
                <div className="card-body pt-lg-0">
                    <h5 className="card-title text-primary" style={{fontSize: 15}}>{title}</h5>
                    <p className="card-text">{text}</p>
                </div>
            </div>
            <div style={{fontSize:10, display:'flex',justifyContent:'space-between', width:'100%'}}>
                <b>

                PABLO EGEAMADRID
                </b>
                <small>
                    message
                </small> 
            </div>
        </div>
    </div>
);

export default NoticeCardMenu;