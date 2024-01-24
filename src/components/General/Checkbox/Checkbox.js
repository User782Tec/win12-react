import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Checkbox.scss';
Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onCheck: PropTypes.func.isRequired
};

function Checkbox({ checked, onCheck }) {
    const [isChecked, setChecked] = useState(checked);
    function handleCheck() {
        setChecked(!isChecked);
        if (onCheck) {
            onCheck(!isChecked);
        }
    }
    return (
        <div className="alr">
            <a className={isChecked ? 'a checkbox checked' : 'a checkbox'} onClick={handleCheck} />
        </div>
    );
}

export default Checkbox;
