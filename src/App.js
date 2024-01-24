import React, { useEffect, useState } from 'react';
import Desktop from './components/Desktop/Desktop';
import LoadPage from './components/LoadPage/LoadPage';
import { System } from './context/System/System.js';

function App() {
    const [loading, setLoading] = useState(true);
    // System中暴露的state
    const [internet, setInternet] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [background, setBackground] = useState('/images/bg.svg');
    const [borderRadius, setBorderRadius] = useState(true);
    const [shadow, setShadow] = useState(true);
    const [animation, setAnimation] = useState(true);
    const [multiTransparent, setMultiTransparent] = useState(false);
    const [bootMusic, setBootMusic] = useState('/media/startup.mp3');
    const [enableBootMusic, setEnableBootMusic] = useState(true);
    const [theme1, setTheme1] = useState('#ad6eca');
    const [theme2, setTheme2] = useState('#3b91d8');
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const setter = { internet: setInternet, darkMode: setDarkMode, background: setBackground, borderRadius: setBorderRadius, shadow: setShadow, animation: setAnimation, multiTransparent: setMultiTransparent, bootMusic: setBootMusic, enableBootMusic: setEnableBootMusic, theme1: setTheme1, theme2: setTheme2 };
    const getter = { internet: internet, darkMode: darkMode, background: background, borderRadius: borderRadius, shadow: shadow, animation: animation, multiTransparent: multiTransparent, bootMusic: bootMusic, enableBootMusic: enableBootMusic, theme1: theme1, theme2: theme2, time: time };
    function get(key) {
        return getter[key];
    }
    function set(key, value) {
        setter[key](value);
    }
    useEffect(() => {
        window.onload = () => {
            setLoading(false);
        };
        window.setTimeout(() => {
            setInterval(() => {
                setTime(new Date().toLocaleTimeString());
            }, 1000);
        }, 1000 - new Date().getMilliseconds());
    }, []);
    return (
        <div id="app" className={(!borderRadius ? 'no-border-radius ' : '') + (!shadow ? 'no-shadow ' : '') + (!animation ? 'no-animation' : '')}>
            <System.Provider
                value={{get: get, set: set}}
            >
                <LoadPage isShow={loading}></LoadPage>
                <Desktop></Desktop>
            </System.Provider>
        </div>
    );
}

export default App;
