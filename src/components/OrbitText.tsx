import { useSelector } from "react-redux";
import { selectGeocenter } from "../reducers";


type TOrbitTextProps = {
    text: string,
    curvature: number,
    fontSize: number,
    radius: number,
    angle: number,
}

const OrbitText = (props: TOrbitTextProps) => {
    const geocenter = useSelector(selectGeocenter);
    const textSize = props.fontSize;
    const centerX = geocenter.left;
    const centerY = geocenter.top - props.radius + props.radius / props.curvature;
    const radius = props.radius / props.curvature;

    const i = Math.random().toString(36).substring(7);
    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{
            position: "fixed",
            zIndex: 1,
            width: "200vw",
            height: "200vh",
            top: 0,
            left: 0,
            pointerEvents: "none",
            transform: `rotate(${props.angle}deg)`,
            transformOrigin: `${centerX}px ${centerY}px`,
            fontFamily: "helvetica",
        }}>
            <defs>
                <path id={`circlePath${i}`} d={`M${centerX},${centerY} m-${radius},0 a${radius},${radius} 0 1,1 ${radius * 2},0 a${radius},${radius} 0 1,1 -${radius * 2},0`} />
            </defs>
            <text fontSize={textSize} fill="white">
                <textPath href={`#circlePath${i}`} startOffset="50%" textAnchor="middle">
                    {props.text}
                </textPath>
            </text>
        </svg>
    );
}

export default OrbitText;