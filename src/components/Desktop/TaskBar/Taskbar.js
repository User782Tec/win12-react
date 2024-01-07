import React, { useState, useEffect, useRef } from 'react';
import AppList from '../../../utils/apps';
import './Taskbar.scss';
import PropTypes from 'prop-types';
import AppIcon from './AppIcon/AppIcon';
Taskbar.propTypes = {
    onAppClick: PropTypes.func.isRequired
};

function Taskbar({ onAppClick }) {
    const [useTask, setTask] = useState(['settings']);
    const ref = useRef(null);
    function append() {
        setTask(useTask.toSpliced(useTask.length, 0, AppList[Math.floor(Math.random() * AppList.length)]));
    }
    function deleteApp(index) {
        if (useTask.length > 1) {
            setTask(useTask.toSpliced(index, 1));
        }
    }
    useEffect(() => {
        const taskbar = ref.current;
        for (const elt of taskbar.children[0].children) {
            setTimeout(() => {
                elt.children[0].classList.add('show');
            }, 0);
        }
    }, [useTask]);
    return (
        <div className="container">
            <div className="taskbar" ref={ref}>
                <div className="appcontainer">
                    {useTask.map((i, index) => (
                        <AppIcon
                            key={index}
                            onClick={() => {
                                onAppClick(i);
                            }}
                            onDoubleClick={() => {
                                deleteApp(index);
                            }}
                            imgsrc={'/icons/' + i + '.svg'}
                            name={i}
                        ></AppIcon>
                    ))}
                </div>
                <div
                    className="add"
                    onClick={() => {
                        append();
                    }}
                >
                    <span>+</span>
                </div>
            </div>
        </div>
    );
}

export default Taskbar;
