import React from 'react';
import PropTypes from 'prop-types';
import './TitleAppIcon.scss';
import { TITLE_BAR_HEIGHT } from '../../../../utils/windows';
TitleAppIcon.propTypes = {
    imgsrc: PropTypes.string.isRequired
};

function TitleAppIcon({ imgsrc }) {
    return (
        <div className="title-app-icon">
            <img src={imgsrc} width={TITLE_BAR_HEIGHT} height={TITLE_BAR_HEIGHT}></img>
        </div>
    );
}

export default TitleAppIcon;
