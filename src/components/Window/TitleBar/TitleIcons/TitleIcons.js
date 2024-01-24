import React from 'react';
import PropTypes from 'prop-types';
import { WindowContext } from '../../../../context/Window/WindowContext';
import { useContext } from 'react';
import '../../../../assets/bootstrap-icons/bootstrap.scss';
import './TitleIcons.scss';
import BootstrapIcon from '../../../General/BootstrapIcon/BootstrapIcon';
import Win12Icon from '../../../General/Win12Icon/Win12Icon';
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
                    <BootstrapIcon name='dash-lg' />
                </div>
            ) : (
                <></>
            )}

            {max != 'hidden' ? (
                <div className={max == 'disable' ? 'max disable' : 'max'} onClick={funcs.max}>
                    {(!funcs.isMax ? <BootstrapIcon name='app' /> : <Win12Icon glyph='' />)}
                </div>
            ) : (
                <></>
            )}
            {close != 'hidden' ? (
                <div className={close == 'disable' ? 'close disable' : 'close'} onClick={funcs.close}>
                    <BootstrapIcon name='x-lg' />
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}

export default TitleIcons;
