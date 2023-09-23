import React from 'react';
import { EARTH_COLOUR, EARTH_RADIUS } from '../constants';

const Earth = () => {
    return (
        <div className="earth">
            <div
                className="balkica"
                style={{
                    borderRadius: '100%',
                    width: `${EARTH_RADIUS * 2}px`,
                    height: `${EARTH_RADIUS * 2}px`,
                    position: 'absolute',
                    top: `${-EARTH_RADIUS}px`,
                    left: `${-EARTH_RADIUS}px`,
                    background: EARTH_COLOUR,
                    boxShadow: `inset 0 0 10px rgba(0,0,0,0.15), ${EARTH_COLOUR} 0px 0px 10px`,
                }}
            ></div>
        </div>
    );
}

export default Earth;
