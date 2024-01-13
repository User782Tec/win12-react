import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import WindowManager from '../WindowManager/WindowManager';
import { WindowsList } from '../../../utils/windows';
import PropTypes from 'prop-types';

WindowGroup.propTypes = {
    windowList: PropTypes.array.isRequired,
    onClose: PropTypes.func.isRequired
};

function WindowGroup({ windowList, onClose }) {
    const [ids, setIds] = useState([]);
    const [focusOrder, setFocusOrder] = useState([]);

    useEffect(() => {
        if (windowList.length > ids.length) {
            const newIds = new Array(windowList.length - ids.length).fill(0).map(() => uuid());
            setIds((oldIds) => [...oldIds, ...newIds]);
            setFocusOrder((oldOrder) => [...oldOrder, ...newIds]);
        }
    }, [windowList, ids]);
    function close(id) {
        setTimeout(() => {
            setIds((oldIds) => oldIds.filter((oldId) => oldId !== id));
            onClose(ids.indexOf(id));
        }, 200);
    }
    let components = windowList.map((i, index) => {
        const key = ids[index] + '---' + WindowsList[i.name].id;
        return (
            <WindowManager
                key={key}
                width={i.width}
                height={i.height}
                title={i.title}
                x={i.x}
                y={i.y}
                order={focusOrder.indexOf(ids[index])}
                onClose={() => close(ids[index])}
                onOrder={() => {
                    setFocusOrder((oldOrder) => {
                        const newOrder = [...oldOrder];
                        newOrder.splice(newOrder.indexOf(ids[index]), 1);
                        newOrder.push(ids[index]);
                        return newOrder;
                    });
                }}
                appimg={i.appimg}
            >
                {WindowsList[i.name].content}
            </WindowManager>
        );
    });

    return <div className="window-group">{components}</div>;
}

export default WindowGroup;
