import React from 'react';
import { useState, useRef, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { consume, getMouseAngle } from '../utils/mouse';
import { getPhases } from '../utils/time';
import { selectObserverPosition, selectSolarHour } from '../reducers';
import { ACTIONS } from '../constants';

const Atmosphere = (props) => {
    /**
     * Circle that can be rotated with the mouse.
     * Shows the phases of the day.
     */

    const dispatch = useDispatch();
    const [rotating, setRotating] = useState(false);
    const [angle, setAngle] = useState(0); // current display angle
    const [angleOffset, setAngleOffset] = useState(0); // angle at which dragging started
    const solarHour = useSelector(selectSolarHour); // angle used in redux
    const setSolarHour = (angle) => dispatch({ type: ACTIONS.SOLAR_HOUR_CHANGED, payload: angle });
    const ref = useRef(null);

    const handleMouseDown = (e) => {
        consume(e);
        setRotating(true);
        setAngleOffset(getMouseAngle(e, ref));
    }

    const handleMouseUp = (e) => {
        consume(e);
        setRotating(false);
        setSolarHour(angle);
    }

    const handleRotate = (e) => {
        consume(e);
        if (!rotating) return;
        setAngle(getMouseAngle(e, ref) - angleOffset + solarHour);
    }

    const observerPosition = useSelector(selectObserverPosition);
    const gradient = useMemo(() => `conic-gradient(${getPhases(observerPosition).join(', ')})`, [observerPosition]);

    useEffect(() => {
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mousemove', handleRotate);
        return () => {
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mousemove', handleRotate);
        }
    });

    return (
        <div className="atmosphere">
            <div
                className="spinny__circle"
                style={{
                    rotate: `${angle}deg`,
                    borderRadius: `100%`,

                    width: `${props.radius * 2}px`,
                    height: `${props.radius * 2}px`,
                    position: `absolute`,
                    top: `${-props.radius}px`,
                    left: `${-props.radius}px`,

                    backgroundColor: `#000`, // fallback if gradient doesn't work
                    backgroundImage: gradient,
                    backgroundSize: `${props.radius * 2}px ${props.radius * 2}px`,
                    backgroundPosition: `center center`,
                }}
                onMouseDown={handleMouseDown}
                ref={ref}
            ></div>
        </div>
    );
}

export default Atmosphere;