import React from 'react';
import WindowLists from '../../../utils/windows';
import PropTypes from 'prop-types';
import WindowManager from '../../Window/WindowManager/WindowManager';
WindowGroup.propTypes = {
    windowList: PropTypes.array.isRequired
};

function WindowGroup({ windowList }) {
    let components = windowList.map((i, index) => <WindowManager key={index} width={i.width} height={i.height} title={i.title} x={i.x} y={i.y}>{WindowLists[i.name]}</WindowManager>);
    return (<div className='window-group'>
        {components}
    </div>);
}

export default WindowGroup;
