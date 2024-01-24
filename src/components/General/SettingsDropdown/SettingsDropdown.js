import React from 'react';
import PropTypes from 'prop-types';
import './SettingsDropdown.scss';
SettingsDropdown.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    show: PropTypes.bool.isRequired
};

function SettingsDropdown({ children, className = '', show }) {
    return <div className={show ? 'settings-dropdown show ' + className : 'settings-dropdown ' + className}>{children}</div>;
}

export default SettingsDropdown;
