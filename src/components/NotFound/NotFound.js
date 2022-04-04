import React from 'react';
import notFoundImg from '../../images/notFound.gif'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found'>
            <img src={notFoundImg} alt="" />
        </div>
    );
};

export default NotFound;