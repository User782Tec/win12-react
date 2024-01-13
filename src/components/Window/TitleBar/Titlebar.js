import React from 'react';
import PropTypes from 'prop-types';
import './TitleBar.scss';
import TitleIcons from './TitleIcons/TitleIcons';
import TitleAppIcon from './TitleAppIcon/TitleAppIcon';

TitleBar.propTypes = {
    title: PropTypes.string.isRequired,
    appimg: PropTypes.string.isRequired,
};

function TitleBar({ title, appimg }) {
    return (
        <div className="title-bar">
            <div className="left">
                <TitleAppIcon imgsrc={appimg}></TitleAppIcon>
                <p>{title}</p>
            </div>

            <TitleIcons></TitleIcons>
        </div>
    );
}

export default TitleBar;
