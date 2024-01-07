import React from 'react';

const WindowLists = {
    settings: {
        id: 0,
        content: (
            <div className="window-settings">
                <p>设置</p>
            </div>
        ),
        title: '设置'
    },
    run: {
        id: 1,
        content: (
            <div className="window-run">
                <p>运行</p>
            </div>
        ),
        title: '设置'
    },
    camera: {
        id: 2,
        content: (
            <div className="window-run">
                <p>相机</p>
            </div>
        ),
        title: '设置'
    }
};

const WINDOW_MARGIN = 7;

export { WINDOW_MARGIN, WindowLists };
