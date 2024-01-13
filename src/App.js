import React, { useEffect, useState } from 'react';
import Desktop from './components/Desktop/Desktop';
import LoadPage from './components/LoadPage/LoadPage';

function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        window.onload = () => {
            setLoading(false);
        };
    }, []);
    return (
        <>
            <LoadPage isShow={loading}></LoadPage>
            <Desktop></Desktop>
        </>
    );
}

export default App;
