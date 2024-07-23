import { useSelector } from "react-redux";
import { OBSERVATORY_TEXT_SIZE, EARTH_RADIUS, OBSERVATORY_PIN_HEIGHT } from "../constants";
import { selectObserverPosition } from "../reducers";
import { TGeographicPosition } from "../types";
import OrbitText from "./OrbitText";

const serializeCoordinates = (coords: TGeographicPosition) => {
    const lat = coords.latitude;
    const lon = coords.longitude;
    const latDirection = lat >= 0 ? 'N' : 'S';
    const lonDirection = lon >= 0 ? 'E' : 'W';
    const formattedLat = `${Math.abs(lat).toFixed(3)}°${latDirection}`;
    const formattedLon = `${Math.abs(lon).toFixed(3)}°${lonDirection}`;
    return `${formattedLat} by ${formattedLon}`;
}

const Observatory = () => {
    const observatoryPosition = useSelector(selectObserverPosition);
    return (
        <div className="observatory" style={{
            fontFamily: "helvetica",
            color: "white",
            fontWeight: "bold",
            // transform: `rotateZ(0deg)`,
        }}>
            <OrbitText
                curvature={0.7}
                fontSize={OBSERVATORY_TEXT_SIZE}
                radius={EARTH_RADIUS - OBSERVATORY_TEXT_SIZE * 2}
                angle={-90}
                text="Ljubljana, Ljubljana, SI"
            />
            <div style={{
                position: "absolute",
                top: `${-EARTH_RADIUS + OBSERVATORY_TEXT_SIZE * 4}px`,
                transform: "translateX(-50%)",
                width: `${EARTH_RADIUS * 2}px`,
                textAlign: "center",
                fontWeight: "normal",
                fontSize: `${OBSERVATORY_TEXT_SIZE * 0.5}px`,
            }}>{serializeCoordinates(observatoryPosition)}</div>
            <img src={require('../images/pin.png')} alt="pin" style={{
                position: "absolute",
                bottom: `${EARTH_RADIUS - OBSERVATORY_PIN_HEIGHT / 2}px`,
                height: `${OBSERVATORY_PIN_HEIGHT}px`,
                transform: "translateX(-50%)",
            }} />
        </div>
    );
}

export default Observatory;
