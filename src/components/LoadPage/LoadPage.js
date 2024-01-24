import React, { useEffect, useState } from 'react';
import './LoadPage.scss';
import SpinInfinite from '../General/SpinInfinite/SpinInfinite';
import PropTypes from 'prop-types';
LoadPage.propTypes = {
    isShow: PropTypes.bool.isRequired
};

function LoadPage({ isShow }) {
    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(true);
    });
    return (
        <div className={(show ? 'load-page show' : 'load-page') + (isShow ? '' : ' hidden')}>
            <img src={'/icons/logo.svg'}></img>
            <SpinInfinite></SpinInfinite>
        </div>
    );
}

export default LoadPage;
