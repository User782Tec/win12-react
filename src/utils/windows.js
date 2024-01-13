import React from 'react';

const WindowsList = {
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
        title: '运行'
    },
    camera: {
        id: 2,
        content: (
            <div className="window-run">
                <p>相机</p>
            </div>
        ),
        title: '相机'
    }
};

const TITLE_BAR_HEIGHT = 25;

export { TITLE_BAR_HEIGHT, WindowsList };
