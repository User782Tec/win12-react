import React from 'react';
import PropTypes from 'prop-types';
import './SettingsIcon.scss';
SettingsIcon.propTypes = {
    glyph: PropTypes.string.isRequired,
    linear: PropTypes.bool
};

function SettingsIcon({ glyph, linear = true }) {
    return <span className={linear ? 'settings-icon linear' : 'settings-icon'}>{glyph}</span>;
}

export default SettingsIcon;
