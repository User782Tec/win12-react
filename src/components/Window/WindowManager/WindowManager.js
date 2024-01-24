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
    // 窗口坐标（以左上角为准）
    const [pos, setPos] = useState({ x: x, y: y });
    // 是否显示窗口
    const [show, setShow] = useState(false);
    // 是否最大化窗口
    const [max, setMax] = useState(false);
    // 是否启用过渡
    const [transition, setTransition] = useState(false);
    // 获取标题栏元素，绑定事件
    const titleBar = useRef(null);
    useEffect(() => {
        function move(e) {
            if (max == true && flag == false) {
                // 防止二次调用
                flag = true;
                setMax(false);
                setTransition(false);
                // 计算窗口实际宽度（单位：px）
                const w = width.match('%') ? window.innerWidth * (+width.replace('%', '') / 100) : width.replace('px', '');
                // 重设deltaLeft
                deltaLeft = (deltaLeft - (e.clientX / window.innerWidth) * (window.innerWidth - w));
            }
            setPos({
                x: e.clientX - deltaLeft + 'px',
                y: e.clientY - deltaTop + 'px'
            });
        }
        function clear() {
            window.onpointermove = null;
            window.onpointerup = null;
            // 清除标记
            flag = false;
        }
        const elt = titleBar.current;
        let deltaLeft = 0,
            deltaTop = 0,
            flag = false;
        elt.onpointerdown = (e) => {
            deltaLeft = e.clientX - elt.getBoundingClientRect().left;
            deltaTop = e.clientY - elt.getBoundingClientRect().top;
            window.onpointermove = move;
            window.onpointerup = clear;
        };
    }, [max]);
    useEffect(() => {
        setTimeout(() => {
            setTransition(true);
            setShow(true);
            setTimeout(() => {
                setTransition(false);
            }, 200);
        }, 10);
    }, []);
    function handleClose(id) {
        setTransition(true);
        setShow(false);
        onClose(id);
    }
    function handleMax() {
        setMax(!max);
        if (max == true) {
            window.setTimeout(() => {
                setTransition(false);
            }, 200);
        } else {
            setTransition(true);
        }
    }
    return (
        <WindowContext.Provider value={{ close: handleClose, max: handleMax, isMax: max }}>
            <div
                className={'window ' + (show ? 'show ' : '') + (max ? 'max ' : '') + (!transition ? 'no-transition' : '')}
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
