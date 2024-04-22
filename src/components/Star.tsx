import React from 'react';
import { ATMOSPHERE_RADIUS, STAR_ALTITUDE, STAR_COUNT, STAR_RADIUS } from '../constants';
import { randNormal, map, logisticSigmoid } from '../utils/math';
import Satellite from './Satellite';

export const generateConstellation = () => {
    /**
     * Generate an array of star objects.
     */
    const starCount = randNormal(STAR_COUNT, STAR_COUNT * 0.2);
    const constellation: React.JSX.Element[] = [];
    for (let i = 0; i < starCount; i++) {
        const star = {
            size: randNormal(STAR_RADIUS, STAR_RADIUS * 0.2),
            angle: map(Math.random(), 0, 1, -90, 90), // uniform distribution [-90, 90]
            altitude: randNormal(ATMOSPHERE_RADIUS + STAR_ALTITUDE, 100),
        }
        constellation.push(<Star key={i} {...star} />);
    }
    return constellation;
};

const starOpacity = (angle: number) => {
    const x = map(Math.abs(angle), 0, 90, -1, 1);
    const y = logisticSigmoid(x * -2.5); // TODO: make this factor a function of nighttime duration
    return map(y, 0, 1, 0.05, 0.9);
}

type TStarProps = {
    size: number,
    angle: number,
    altitude: number,
}

const Star = (props: TStarProps) => {
    return (
        <Satellite angle={props.angle} altitude={props.altitude}>
            <div style={{
                width: `${props.size}px`,
                height: `${props.size}px`,
                borderRadius: `${props.size}px`,
                backgroundColor: `white`,
                opacity: starOpacity(props.angle),
            }} />
        </Satellite>
    );
}
