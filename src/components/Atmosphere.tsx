import React, { MouseEventHandler } from 'react';
import { useState, useRef, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { consume, getMouseAngle } from '../utils/mouse';
import { getPhases } from '../utils/time';
import { selectObserverPosition, selectSolarHour } from '../reducers';
import { ACTIONS, ATMOSPHERE_RADIUS, LIVE_ROTATE, EARTH_RADIUS, PHASE_TEXT_SIZE, EVENT_TEXT_SIZE } from '../constants';
import OrbitText from './OrbitText';

const PhaseName = ({ text, angle }: { text: string, angle: number }) => {
    return (<div style={{
        position: "absolute" as "absolute",
        left: `${EARTH_RADIUS + PHASE_TEXT_SIZE}px`,
        color: "white",
        fontSize: `${PHASE_TEXT_SIZE}px`,
        transform: `rotate(${angle - 90}deg)`,
        transformOrigin: `${-EARTH_RADIUS - PHASE_TEXT_SIZE}px 0`,
    }}>
        <div style={{
            position: "absolute" as "absolute",
            top: `${-PHASE_TEXT_SIZE / 2 - 2}px`,
            width: `1000px`,
        }}>
            {text}
        </div>
    </div >);
}

const Atmosphere = () => {
    /**
     * Circle that can be rotated with the mouse.
     * Shows the phases of the day.
     */

    const dispatch = useDispatch();
    const [rotating, setRotating] = useState(false);
    const solarHour = useSelector(selectSolarHour); // angle used in redux
    const setSolarHour = (angle: number) => dispatch({ type: ACTIONS.SOLAR_HOUR_CHANGED, payload: angle });
    const setSelectedAngle = (angle: number) => dispatch({ type: ACTIONS.SELECTED_HOUR_CHANGED, payload: angle });
    const [angle, setAngle] = useState(solarHour); // current display angle
    const [angleOffset, setAngleOffset] = useState(0); // angle at which dragging started
    const ref = useRef(null);

    const handleMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
        consume(e);
        setRotating(true);
        setAngleOffset(getMouseAngle(e, ref));
    }

    const handleMouseUp = (e: any) => {
        consume(e);
        setRotating(false);
        if (LIVE_ROTATE) { }
        else {
            setSolarHour(angle);
        }
    }

    const handleRotate = (e: any) => {
        consume(e);
        if (!rotating) return;
        if (LIVE_ROTATE) {
            setSolarHour(getMouseAngle(e, ref));
            setAngle(solarHour);
        }
        else {
            const newAngle = getMouseAngle(e, ref) - angleOffset + solarHour;
            setSelectedAngle(newAngle);
            setAngle(newAngle);
        }
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

                    width: `${ATMOSPHERE_RADIUS * 2}px`,
                    height: `${ATMOSPHERE_RADIUS * 2}px`,
                    position: `absolute`,
                    top: `${-ATMOSPHERE_RADIUS}px`,
                    left: `${-ATMOSPHERE_RADIUS}px`,

                    backgroundColor: `#000`, // fallback if gradient doesn't work
                    backgroundImage: gradient,
                    backgroundSize: `${ATMOSPHERE_RADIUS * 2}px ${ATMOSPHERE_RADIUS * 2}px`,
                    backgroundPosition: `center center`,
                    opacity: 0.9,
                }}
                onMouseDown={handleMouseDown}
                ref={ref}
            ></div>
            <OrbitText text="Solar noon" curvature={1} fontSize={EVENT_TEXT_SIZE} radius={ATMOSPHERE_RADIUS - EVENT_TEXT_SIZE} angle={angle - 90} />
            <OrbitText text="Solar midnight" curvature={1} fontSize={EVENT_TEXT_SIZE} radius={ATMOSPHERE_RADIUS - EVENT_TEXT_SIZE} angle={angle + 90} />
            <OrbitText text="Sunset" curvature={1} fontSize={EVENT_TEXT_SIZE} radius={ATMOSPHERE_RADIUS - EVENT_TEXT_SIZE} angle={angle - 90 + 360 / 19 * 5} />
            <OrbitText text="Sunrise" curvature={1} fontSize={EVENT_TEXT_SIZE} radius={ATMOSPHERE_RADIUS - EVENT_TEXT_SIZE} angle={angle - 90 - 360 / 19 * 5} />
            <PhaseName text="Afternoon" angle={angle + 360 / 19 * 2.5} />
            <PhaseName text="Golden hour PM" angle={angle + 360 / 19 * 4.5} />
            <PhaseName text="Civil dusk" angle={angle + 360 / 19 * 5.5} />
            <PhaseName text="Nautical dusk" angle={angle + 360 / 19 * 6.5} />
            <PhaseName text="Astronomical dusk" angle={angle + 360 / 19 * 7.5} />
            <PhaseName text="Night (PM)" angle={angle + 360 / 19 * 8.5} />
            <PhaseName text="Night (AM)" angle={angle + 360 / 19 * (-8.5)} />
            <PhaseName text="Astronomical dawn" angle={angle + 360 / 19 * (-7.5)} />
            <PhaseName text="Nautical dawn" angle={angle + 360 / 19 * (-6.5)} />
            <PhaseName text="Civil dawn" angle={angle + 360 / 19 * (-5.5)} />
            <PhaseName text="Golden hour AM" angle={angle + 360 / 19 * (-4.5)} />
            <PhaseName text="Morning" angle={angle + 360 / 19 * (-2.5)} />
        </div>
    );
}

export default Atmosphere;