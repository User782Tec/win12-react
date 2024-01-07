import React from 'react';
import PropTypes from 'prop-types';
import './TitleBar.scss';

TitleBar.propTypes = {
    title: PropTypes.string.isRequired
};

function TitleBar({ title }) {
    return <div className="title-bar">{title}</div>;
}

export default TitleBar;
