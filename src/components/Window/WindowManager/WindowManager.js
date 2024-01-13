import React, { useEffect, useRef, useState } from 'react';
import TitleBar from '../TitleBar/Titlebar';
import PropTypes from 'prop-types';
import { WindowContext } from '../../../context/Window/WindowContext';
import './WindowManager.scss';
WindowManager.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    x: PropTypes.string.isRequired,
    y: PropTypes.string.isRequired,
    order: PropTypes.number.isRequired,
    onOrder: PropTypes.func.isRequired,
    appimg: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
};

function WindowManager({ x, y, width, height, title, children, order, onOrder, onClose, appimg }) {
    const [pos, setPos] = useState({ x: x, y: y });
    const [show, setShow] = useState(false);
    const titleBar = useRef(null);
    useEffect(() => {
        function move(e) {
            setPos({
                x: e.clientX - deltaLeft + 'px',
                y: e.clientY - deltaTop + 'px'
            });
        }
        function clear() {
            window.onpointermove = null;
            window.onpointerup = null;
        }
        const elt = titleBar.current;
        let deltaLeft = 0,
            deltaTop = 0;
        elt.onpointerdown = (e) => {
            deltaLeft = e.clientX - elt.getBoundingClientRect().left;
            deltaTop = e.clientY - elt.getBoundingClientRect().top;
            window.onpointermove = move;
            window.onpointerup = clear;
        };
    });
    useEffect(() => {
        setTimeout(() => {setShow(true);}, 10);
    }, []);
    function handleClose(id) {
        setShow(false);
        onClose(id);
    }
    return (
        <WindowContext.Provider value={{ close: handleClose }}>
            <div
                className={show ? 'window show' : 'window'}
                style={{
                    width: width,
                    height: height,
                    top: pos.y,
                    left: pos.x,
                    zIndex: order
                }}
                onPointerDown={onOrder}
            >
                <div ref={titleBar} className="title">
                    <TitleBar title={title} appimg={appimg}></TitleBar>
                </div>
                <div className="content">{children}</div>
            </div>
        </WindowContext.Provider>
    );
}

export default WindowManager;
