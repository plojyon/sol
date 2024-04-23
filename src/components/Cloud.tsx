import React, { useState, useEffect } from 'react';
import { CLOUD_ALTITUDE } from '../constants';
import Satellite, { TSatellite } from './Satellite';

interface TCloudProps extends TSatellite { }

const Cloud = (props: TCloudProps) => {
    const images = [
        'cloud-1.png',
        'cloud-2.png',
        'cloud-3.png',
    ];
    const [currentImage, setCurrentImage] = useState('');

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * images.length);
        setCurrentImage(require(`../images/${images[randomIndex]}`));
    }, []);

    return (
        <Satellite angle={props.angle} altitude={CLOUD_ALTITUDE}>
            <img src={currentImage} alt="cloud" style={{
                transform: "scaleY(-1)",  // hee hee
                position: "absolute",
                left: "-30px",
            }} />
        </Satellite>
    );
};

export default Cloud;




// const CLOUD_COUNT = 20;
// const CLOUD_SIZE = 20;

// const BALL_COUNT = 5;
// const PLATFORM_WIDTH = CLOUD_SIZE * 4;
// const SMALL_BALL_SIZE_MIN = CLOUD_SIZE;
// const SMALL_BALL_SIZE_MAX = CLOUD_SIZE * 1.3;

// const RANDOM_BALL_SIZE_MEAN = CLOUD_SIZE * 1.3;
// const RANDOM_BALL_SIZE_VARIANCE = RANDOM_BALL_SIZE_MEAN * 0.3;

// interface TBallProps {
//     size: number,
//     x: number,
// }

// const Ball = (props: TBallProps) => {
//     return (
//         <div style={{
//             backgroundColor: "white",
//             borderRadius: "100%",
//             width: `${props.size}px`,
//             height: `${props.size}px`,
//             position: "absolute",
//             bottom: `${-props.size}px`,
//             left: `${props.x - props.size / 2 - PLATFORM_WIDTH / 2}px`
//         }}></div>
//     )
// }

// // TODO: Clouds with big balls on the sides look weird. Make the mean a function of i?
// const getBalls = () => {
//     const balls = [];
//     for (let i = 0; i < BALL_COUNT; i++) {
//         const size = Math.abs(randNormal(0, RANDOM_BALL_SIZE_VARIANCE)) + RANDOM_BALL_SIZE_MEAN;
//         balls.push(<Ball size={size} x={i * PLATFORM_WIDTH / (BALL_COUNT - 1)} ></Ball>);
//     }
//     return balls;
// }

// const Cloud = () => {
//     // minimum required balls
//     const base = [];
//     for (let i = 0; i <= PLATFORM_WIDTH / SMALL_BALL_SIZE_MIN; i += 1) {
//         const diff = SMALL_BALL_SIZE_MAX - SMALL_BALL_SIZE_MIN
//         const size = Math.random() * diff + SMALL_BALL_SIZE_MIN;
//         base.push(<Ball size={size} x={i * SMALL_BALL_SIZE_MIN} ></Ball>)
//     }

//     const [balls] = useState(getBalls);
//     return (
//         <Satellite angle={180} altitude={CLOUD_ALTITUDE}>
//             <div className="cloud_platform" style={{
//                 backgroundColor: "white",
//                 width: `${PLATFORM_WIDTH}px`,
//                 height: `${CLOUD_SIZE}px`,
//                 left: `${-PLATFORM_WIDTH / 2}px`,
//                 top: `0px`,
//                 position: "absolute",
//             }} />
//             {base}
//             {balls}
//         </Satellite>
//     )
// }


// export default Cloud;
