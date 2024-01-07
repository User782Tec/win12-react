import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import WindowManager from '../../Window/WindowManager/WindowManager';
import {WindowLists} from '../../../utils/windows';
import PropTypes from 'prop-types';

WindowGroup.propTypes = {
    windowList: PropTypes.array.isRequired
};

function WindowGroup({ windowList }) {
    const [ids, setIds] = useState([]);
    const [focusOrder, setFocusOrder] = useState([]);

    useEffect(() => {
        if (windowList.length > ids.length) {
            const newIds = new Array(windowList.length - ids.length).fill(0).map(() => uuid());
            setIds(oldIds => [...oldIds, ...newIds]);
            setFocusOrder(oldOrder => [...oldOrder, ...newIds]);
        }
    }, [windowList, ids]);

    let components = windowList.map((i, index) => {
        const key = ids[index] + '---' + WindowLists[i.name].id;
        return (
            <WindowManager 
                key={key} 
                width={i.width} 
                height={i.height} 
                title={i.title} 
                x={i.x} 
                y={i.y}
                style={{ zIndex: focusOrder.indexOf(ids[index]) }}
                onClick={() => {
                    setFocusOrder(oldOrder => {
                        const newOrder = [...oldOrder];
                        newOrder.splice(newOrder.indexOf(ids[index]), 1);
                        newOrder.push(ids[index]);
                        return newOrder;
                    });
                }}
            >
                {WindowLists[i.name].content}
            </WindowManager>
        );
    });

    return <div className="window-group">{components}</div>;
}

export default WindowGroup;