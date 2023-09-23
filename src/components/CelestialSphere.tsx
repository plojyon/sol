import React, { useState } from 'react';
import randNormal from '../utils/random';
import { STAR_COUNT, STAR_RADIUS } from '../constants';
import { getOrbitalPosition } from '../utils/orbital';
import { useSelector } from 'react-redux';
import { selectGeocenter, selectSolarHour } from '../reducers';
import { TAbsolutePosition } from '../types';

const generateConstellation = (geocenter: TAbsolutePosition, solarHour: number) => {
    /**
     * Generate an array of star objects.
     */
    const starCount = randNormal(STAR_COUNT, STAR_COUNT * 0.2);
    const constellation: React.JSX.Element[] = [];
    for (let i = 0; i < starCount; i++) {
        const star = {
            size: randNormal(STAR_RADIUS, STAR_RADIUS * 0.2),
            angle: randNormal(-90 + solarHour, 1),
            altitude: randNormal(300, 100),
        }
        const pos = getOrbitalPosition(star, geocenter);
        constellation.push(
            <div key={i} style={{
                position: 'absolute',
                top: `${pos.top}px`,
                left: `${pos.left}px`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                borderRadius: `${star.size}px`,
                backgroundColor: `white`,
            }} />);
    }
    return constellation;
};

const CelestialSphere = () => {
    /**
     * A cloud of stars.
     */
    const geocenter = useSelector(selectGeocenter);
    const solarHour = useSelector(selectSolarHour);
    const [stars, setStars] = useState(generateConstellation(geocenter, solarHour));
    return (
        <div className="starryNight">
            {stars.map((s) => s)}
        </div >
    );
}

export default CelestialSphere;
