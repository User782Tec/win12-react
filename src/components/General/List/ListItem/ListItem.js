import React from 'react';
import PropTypes from 'prop-types';
ListItem.propTypes = {
    enable: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    imgsrc: PropTypes.string,
    children: PropTypes.node.isRequired
};

function ListItem({ enable, onClick, imgsrc = '', children }) {
    return (
        <a className={enable ? 'enable' : ''} onClick={onClick}>
            { imgsrc ? <img src={imgsrc} /> : <></>}
            {children}
        </a>
    );
}

export default ListItem;
