import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { selectGeocenter } from "../reducers";

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
    const geocenter = useSelector(selectGeocenter);
    const top = geocenter.top + altitude * Math.sin(angle * Math.PI / 180);
    const left = geocenter.left + altitude * Math.cos(angle * Math.PI / 180);
    return (
        <div
            className="geocentered_satellite"
            style={{
                position: "absolute",
                top: top,
                left: left,
                transformOrigin: "center center",
                transform: `rotate(${angle}deg)`,
            }}
        >
            {children}
        </div>
    );
};

export default Satellite;
