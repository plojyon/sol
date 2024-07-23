import React, { useEffect } from 'react';
import Atmosphere from './components/Atmosphere';
import Sky from './components/Sky';
import Earth from './components/Earth';
import { ACTIONS } from './constants';
import { useDispatch } from 'react-redux';
import Geocentered from './components/Geocentered';
import Clock from './components/Clock';
import Hud from './components/Hud';
import Observatory from './components/Observatory';

function App() {
    const dispatch = useDispatch();

    const handleResize = () => {
        dispatch({
            type: ACTIONS.GEOCENTER_MOVED, payload: {
                left: window.innerWidth / 2,
                top: window.innerHeight / 2,
            }
        });
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    });

    return (
        <div className="App">
            <Sky />
            <Geocentered>
                <Atmosphere />
                <Earth />
                <Observatory />
                <Clock />
            </Geocentered>
            <Hud />
        </div>
    );
}

export default App;
