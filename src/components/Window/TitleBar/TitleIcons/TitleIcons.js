import React from 'react';
import PropTypes from 'prop-types';
import { WindowContext } from '../../../../context/Window/WindowContext';
import { useContext } from 'react';
import '../../../../assets/bootstrap-icons/bootstrap.scss';
import './TitleIcons.scss';
TitleIcons.propTypes = {
    close: PropTypes.string,
    min: PropTypes.string,
    max: PropTypes.string,
};

function TitleIcons({ close = 'show', min = 'show', max = 'show' }) {
    const funcs = useContext(WindowContext);
    return (
        <div className="title-icons">
            {min != 'hidden' ? (
                <div className={min == 'disable' ? 'min disable' : 'min'} onClick={funcs.min}>
                    <i className="bi bi-dash-lg"></i>
                </div>
            ) : (
                <></>
            )}

            {max != 'hidden' ? (
                <div className={max == 'disable' ? 'max disable' : 'max'} onClick={funcs.max}>
                    <i className="bi bi-app"></i>
                </div>
            ) : (
                <></>
            )}
            {close != 'hidden' ? (
                <div className={close == 'disable' ? 'close disable' : 'close'} onClick={funcs.close}>
                    <i className="bi bi-x-lg"></i>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}

export default TitleIcons;
