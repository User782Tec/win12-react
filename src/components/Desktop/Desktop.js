import React, { useState, useContext } from 'react';
import { WindowsList } from '../../utils/windows';
import WindowGroup from '../Window/WindowGroup/WindowGroup';
import Background from './BackGround/Background';
import Taskbar from './TaskBar/Taskbar';
import { System } from '../../context/System/System';

function Desktop() {
    const context = useContext(System);
    const [windows, setWindows] = useState([]);
    function close(index) {
        setWindows(windows.toSpliced(index, 1));
    }
    return (
        <>
            <Background image={context.get('background')}></Background>
            <WindowGroup windowList={windows} onClose={close}></WindowGroup>
            <Taskbar
                onAppClick={(name) => {
                    setWindows(
                        windows.toSpliced(windows.length, 0, {
                            name: name,
                            title: WindowsList[name].title,
                            width: '70%',
                            height: '80%',
                            x: '15%',
                            y: '10%',
                            appimg: '/icons/' + name + '.svg'
                        })
                    );
                }}
            ></Taskbar>
        </>
    );
}

export default Desktop;
