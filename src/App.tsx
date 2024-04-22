import React, { useEffect } from 'react';
import Atmosphere from './components/Atmosphere';
import Sky from './components/Sky';
import Earth from './components/Earth';
import { ACTIONS } from './constants';
import { useDispatch, useSelector } from 'react-redux';
import { selectGeocenter } from './reducers';

function App() {
    const dispatch = useDispatch();

    const geocenter = useSelector(selectGeocenter);

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
        <div className="App" >
            <Sky />
            <div style={{
                position: "absolute",
                top: geocenter.top,
                left: geocenter.left,
            }}>
                <Atmosphere />
                <Earth />
            </div>
        </div>
    );
}

export default App;
