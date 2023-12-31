import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectSolarHour } from '../reducers';
import { generateConstellation } from './Star';

// interface TCloud extends TSatellite {
//     size: number,
//     opacity: number,
// }

// const getClouds = () => {
//     const clouds: TCloud[] = [];
//     for (let i = 0; i < 9; i++) {
//         clouds.push({
//             size: randNormal(20, 5),
//             opacity: Math.random() * 100,
//             angle: Math.random() * 360,
//             altitude: randNormal(WEATHER_ALTITUDE, 10),
//         });
//     }
//     return clouds;
// }

const Sky = () => {
    // const [clouds] = useState(condenseMoisture());
    const [stars] = useState(generateConstellation());
    // const [sun] = useState(collapseNebula());
    const solarHour = useSelector(selectSolarHour);

    const overhang = Math.ceil(50 * Math.sqrt(2));
    const size = 100 + 2 * overhang;
    const center = size / 2;

    return (
        <div className="sky">
            <div
                className="gradient__descent"
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
        </div >
    );
}

export default Sky;
