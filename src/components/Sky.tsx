import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CLOUD_ALTITUDE, SUN_RADIUS } from '../constants';
import { selectSolarHour } from '../reducers';
import Cloud from './Cloud';
import Geocentered from './Geocentered';
import { generateConstellation } from './Star';
import Sun from './Sun';

const getClouds = () => {
    const clouds = [];
    for (let i = 0; i < 6; i++) {
        const angle = Math.random() * 360;
        clouds.push(<Cloud altitude={CLOUD_ALTITUDE} angle={angle} key={i} />);
    }
    return clouds;
}

const Sky = () => {
    const [clouds] = useState(getClouds());
    const [stars] = useState(generateConstellation());
    const solarHour = useSelector(selectSolarHour);

    const overhang = Math.ceil(100 * Math.sqrt(2));
    const size = 100 + 2 * overhang;
    const center = size / 2;

    return (
        <div className="sky">
            <div
                className="skybox"
                style={{
                    background: `linear-gradient(0deg, #0000aa 10%, #00eeff 90%)`,
                    width: `${size}vw`,
                    height: `${size}vh`,
                    position: `absolute`,
                    top: `-${overhang}vh`,
                    left: `-${overhang}vw`,
                    transformOrigin: `${center}vw ${center}vh`,
                    transform: `rotate(${solarHour}deg)`,
                }}
            />
            {stars}
            <Sun />
            {clouds}
        </div >
    );
}

export default Sky;
