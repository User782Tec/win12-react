import React from 'react';
import PropTypes from 'prop-types';
import './Win12Icon.scss';
Win12Icon.propTypes = {
    glyph: PropTypes.string.isRequired
};

function Win12Icon({ glyph }) {
    return <span className="win12-icon">{glyph}</span>;
}

export default Win12Icon;
