import React, { useState } from 'react';
import Background from './BackGround/Background';
import Taskbar from './TaskBar/Taskbar';
import WindowGroup from './WindowGroup/WindowGroup';
import { WindowLists } from '../../utils/windows';

function Desktop() {
    const [windows, setWindows] = useState([]);
    return (
        <>
            <Background image="https://tjy-gitnub.github.io/win12/bg.svg"></Background>
            <WindowGroup windowList={windows}></WindowGroup>
            <Taskbar
                onAppClick={(name) => {
                    setWindows(
                        windows.toSpliced(windows.length, 0, {
                            name: name,
                            title: WindowLists[name].title,
                            width: '300px',
                            height: '400px',
                            x: '0px',
                            y: '0px',
                        })
                    );
                }}
            ></Taskbar>
        </>
    );
}

export default Desktop;
