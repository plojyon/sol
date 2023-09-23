import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CelestialSphere from './CelestialSphere';
import { ATMOSPHERE_RADIUS, WEATHER_ALTITUDE } from '../constants';
import { randNormal } from '../utils/random';
import { selectSolarHour } from '../reducers';

type TCloud = {
    size: number,
    opacity: number,
    angle: number,
    altitude: number,
}

const getClouds = () => {
    const clouds: TCloud[] = [];
    for (let i = 0; i < 9; i++) {
        clouds.push({
            size: randNormal(20, 5),
            opacity: Math.random() * 100,
            angle: Math.random() * 360,
            altitude: randNormal(WEATHER_ALTITUDE, 10),
        });
    }
    return clouds;
}

const Sky = () => {
    const [clouds, setClouds] = useState(getClouds());
    const [stars, setStars] = useState([]);
    const [sun, setSun] = useState({
        size: 100,
        opacity: 100,
        angle: 0,
        altitude: 0,
    });
    const solarHour = useSelector(selectSolarHour);

    return (
        <div className="sky">
            <div
                className="gradient__descent"
                style={{
                    background: `linear-gradient(0deg, #0000aa 0%, #00eeff 100%)`,
                    width: `300vw`,
                    height: `300vh`,
                    position: `absolute`,
                    top: `-100vh`,
                    left: `-100vw`,
                    transformOrigin: '150vw 150vh',
                    transform: `rotate(${solarHour}deg)`,
                }}
            ></div>
            <CelestialSphere />
        </div >
    );
}

export default Sky;
