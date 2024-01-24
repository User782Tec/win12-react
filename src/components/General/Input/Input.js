import React from 'react';
import './Input.scss';
import PropTypes from 'prop-types';
Input.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    before: PropTypes.node,
    beforeWidth: PropTypes.number
};

function Input({ placeholder = '', value = '', disabled = false, readonly = false, before = null, beforeWidth = 0 }) {
    return (
        <div className='input-container'>
            <div className="input-before">{before}</div>
            <input style={{paddingLeft: beforeWidth + 3}} className="input" placeholder={placeholder} defaultValue={value} disabled={disabled} readOnly={readonly}></input>
        </div>
    );
}

export default Input;
