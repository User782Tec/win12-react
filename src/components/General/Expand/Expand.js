import React from 'react';
import BootstrapIcon from '../BootstrapIcon/BootstrapIcon';
import PropTypes from 'prop-types';
import './Expand.scss';
Expand.propTypes = {
    expand: PropTypes.bool.isRequired,
};

function Expand({ expand }) {
    return (
        <div className={expand ? 'expand show' : 'expand'}>
            <BootstrapIcon name="chevron-down" />
        </div>
    );
}

export default Expand;
