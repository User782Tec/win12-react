import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SettingOption.scss';
import BootstrapIcon from '../BootstrapIcon/BootstrapIcon';
import Checkbox from '../Checkbox/Checkbox';
import Expand from '../Expand/Expand';
SettingOption.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired,
    onCheck: PropTypes.func,
    onClick: PropTypes.func,
    checked: PropTypes.bool,
    expanded: PropTypes.bool,
    elt: PropTypes.node
};

// type: check(复选框)|more(右箭头)|expand(可展开)|custom(自定义元素)
function SettingOption({ icon, title, description = '', type, onCheck = null, onClick = null, checked = false, expanded = false, elt = null }) {
    const [expand, setExpand] = useState(expanded);
    return (
        <div
            className={(type == 'expand' ? 'dropdown setting-option' : 'setting-option') + (expand ? ' show' : '')}
            onClick={() => {
                setExpand(!expand);
                if (onClick) onClick(!expand);
            }}
        >
            {icon}
            <div className="text">
                <p>{title}</p>
                <p>{description}</p>
            </div>
            {type == 'check' ? <Checkbox checked={checked} onCheck={onCheck}></Checkbox> : <></>}
            {type == 'more' ? <BootstrapIcon name="chevron-right" /> : <></>}
            {type == 'expand' ? <Expand expand={expand} /> : <></>}
            {type == 'custom' ? <div>{elt}</div> : <></>}
        </div>
    );
}

export default SettingOption;
