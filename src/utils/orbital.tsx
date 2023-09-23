import Satellite, { TSatelliteProps } from '../components/Satellite';
import { ATMOSPHERE_RADIUS } from '../constants';
import { TAbsolutePosition } from '../types';


export const getOrbitalPosition = (body: TSatelliteProps, geocenter: TAbsolutePosition) => {
    const angleRad = body.angle / 360 * 2 * Math.PI;
    const left = (ATMOSPHERE_RADIUS + body.altitude) * Math.cos(angleRad) + geocenter.left;
    const top = (ATMOSPHERE_RADIUS + body.altitude) * Math.sin(angleRad) + geocenter.top;
    return { top, left };
}
