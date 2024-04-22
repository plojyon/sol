import { SUN_ALTITUDE, SUN_RADIUS } from '../constants';
import Satellite from './Satellite';

const Sun = () => {
    return (
        <Satellite angle={180} altitude={SUN_ALTITUDE}>
            <div className="sun" style={{
                backgroundColor: "yellow",
                borderRadius: "100%",
                width: `${SUN_RADIUS * 2}px`,
                height: `${SUN_RADIUS * 2}px`,
                left: `${-SUN_RADIUS}px`,
                position: "relative",
            }}></div>
        </Satellite>
    )
}

export default Sun;
