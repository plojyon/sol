import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { selectSolarHour } from "../reducers";

export interface TSatellite {
    angle: number,
    altitude: number,
}

interface TSatelliteProps extends TSatellite {
    children?: ReactNode,
}

const Satellite = (props: TSatelliteProps) => {
    /**
     * An object orbiting the Earth.
     */
    const { angle, altitude, children } = props;
    const solarHour = useSelector(selectSolarHour);
    const orbitAngle = solarHour + angle;
    return (
        <div
            className="geocentered_satellite"
            style={{
                position: "absolute",
                top: `${altitude}px`,
                rotate: `${orbitAngle}deg`,
                transformOrigin: `0px ${-altitude}px 0px`,
                transition: "ease 1s rotate"
            }}
        >
            {children}
        </div>
    );
};

export default Satellite;
