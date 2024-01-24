import React from 'react';
import './SpinInfinite.scss';
import PropTypes from 'prop-types';
SpinInfinite.propTypes = {
    color: PropTypes.string,
    background: PropTypes.string
};

function SpinInfinite({ color = '#fff', background = '#00000000' }) {
    return (
        <svg className="spin" width="50px" height="50px" viewBox="0 0 16 16">
            <circle cx="8px" cy="8px" r="7px" stroke={background}></circle>
            <circle cx="8px" cy="8px" r="7px" stroke={color}></circle>
        </svg>
    );
}

export default SpinInfinite;
