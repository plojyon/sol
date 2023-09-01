import React, { useState, useEffect, useMemo } from 'react';
import Atmosphere from './components/Atmosphere';
import Sky from './components/Sky';
import Earth from './components/Earth';

function App() {
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
        console.log(size);
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    });

    const centerX = useMemo(() => size?.width / 2, [size]);
    const centerY = useMemo(() => size?.height / 2, [size]);
    return (
        <div className="App" >
            <Sky rotation="-30" />
            <Atmosphere radius="300" x={centerX} y={centerY} />
            <Earth radius="200" x={centerX} y={centerY} />
        </div>
    );
}

export default App;
