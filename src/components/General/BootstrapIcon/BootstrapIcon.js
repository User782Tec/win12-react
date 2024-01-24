import React from 'react';
import '../../../assets/bootstrap-icons/bootstrap.scss';
import PropTypes from 'prop-types';
BootstrapIcon.propTypes = {
    name: PropTypes.string.isRequired
};

function BootstrapIcon({ name }) {
    return <i className={'bootstrap-icon bi bi-' + name}></i>;
}

export default BootstrapIcon;
