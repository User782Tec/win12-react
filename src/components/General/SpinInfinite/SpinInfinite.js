import React from 'react';
import './SpinInfinite.scss';

function SpinInfinite() {
    return (
        <svg className='spin' width="50px" height="50px" viewBox="0 0 16 16">
            <circle cx="8px" cy="8px" r="7px"></circle>
        </svg>
    );
}

export default SpinInfinite;
