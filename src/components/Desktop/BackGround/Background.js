import React from 'react';
import PropTypes from 'prop-types';
import './Background.scss';

function Background({ image }) {
    return <div className="bg" style={{ backgroundImage: `url(${image})` }}></div>;
}

Background.propTypes = {
    image: PropTypes.string.isRequired
};

export default Background;
