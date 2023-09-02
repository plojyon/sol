import React from 'react';
import { EARTH_COLOUR } from '../constants';

const Earth = (props) => {
    return (
        <div className="earth">
            <div
                className="balkica"
                style={{
                    borderRadius: '100%',
                    width: `${props.radius * 2}px`,
                    height: `${props.radius * 2}px`,
                    position: 'absolute',
                    top: `${-props.radius}px`,
                    left: `${-props.radius}px`,
                    background: EARTH_COLOUR,
                    boxShadow: `inset 0 0 10px rgba(0,0,0,0.15), ${EARTH_COLOUR} 0px 0px 10px`,
                }}
            ></div>
        </div>
    );
}

export default Earth;
