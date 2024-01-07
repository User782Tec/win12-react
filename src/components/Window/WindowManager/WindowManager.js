import React, { useEffect, useRef, useState } from 'react';
import TitleBar from '../TitleBar/Titlebar';
import PropTypes from 'prop-types';
import './WindowManager.scss';
import { WINDOW_MARGIN } from '../../../utils/windows';
WindowManager.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    x: PropTypes.string.isRequired,
    y: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

function WindowManager({ x, y, width, height, title, children, style, onClick }) {
    const [pos, setPos] = useState({ x: x, y: y });
    const titleBar = useRef(null);
    useEffect(() => {
        function move(e) {
            setPos({
                x: e.clientX - deltaLeft + 'px',
                y: e.clientY - deltaTop + 'px'
            });
        }
        function clear() {
            window.onmousemove = null;
            window.onmouseup = null;
        }
        const elt = titleBar.current;
        let deltaLeft = 0,
            deltaTop = 0;
        elt.onmousedown = (e) => {
            deltaLeft = e.clientX - elt.getBoundingClientRect().left + WINDOW_MARGIN;
            deltaTop = e.clientY - elt.getBoundingClientRect().top + WINDOW_MARGIN;
            window.onmousemove = move;
            window.onmouseup = clear;
        };
    });
    return (
        <div
            className="window"
            style={{
                width: width,
                height: height,
                top: pos.y,
                left: pos.x,
                ...style
            }}
            onClick={onClick}
        >
            <div ref={titleBar} className="title">
                <TitleBar title={title}></TitleBar>
            </div>
            <div className="content">{children}</div>
        </div>
    );
}

export default WindowManager;
