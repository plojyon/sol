import { useSelector } from "react-redux";
import { ATMOSPHERE_RADIUS, TIME_POINTER_HEIGHT } from "../constants";
import { selectSelectedAngle } from "../reducers";
import { angleToHour, timeToString } from "../utils/time";

const Clock = () => {
    const selectedAngle = useSelector(selectSelectedAngle);
    const currentTime = timeToString(angleToHour(selectedAngle));
    const timezone = "CEST";
    return (
        <div className="clock" style={{
            position: 'absolute',
            bottom: `${ATMOSPHERE_RADIUS}px`,
            fontFamily: "helvetica",
            color: "yellow",
        }}>
            <div className="currentTime" style={{
                textShadow: "3px 3px 0px black",
                fontSize: "48px",
                transform: 'translateX(-50%)',
                position: "absolute",
                bottom: `${TIME_POINTER_HEIGHT}px`,
                left: "0px",
            }}>
                {currentTime}
            </div>
            <div className="timezone" style={{
                fontSize: "32px",
                position: "absolute",
                left: "2em",
                top: "-0.5em",
            }}>
                {timezone}
            </div>
            <img src={require('../images/pointer.png')} alt="pointer" style={{
                height: `${TIME_POINTER_HEIGHT}px`
            }} />
        </div>
    );
}

export default Clock;
