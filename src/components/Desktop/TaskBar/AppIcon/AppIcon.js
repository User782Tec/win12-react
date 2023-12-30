import React from 'react';
import PropTypes from 'prop-types';
AppIcon.propTypes = {
    onClick: PropTypes.func.isRequired,
    onDoubleClick: PropTypes.func.isRequired,
    imgsrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

function AppIcon({ onClick, onDoubleClick, imgsrc, name }) {
    return (
        <div onDoubleClick={onDoubleClick} onClick={onClick} className={name}>
            <img src={imgsrc} className='app-icon' />
        </div>
    );
}

export default AppIcon;
