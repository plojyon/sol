import { PHASES } from '../constants';
import { TGeographicPosition } from '../types';

const date2cumDay = (date: Date) => {
    /**
     * Calculate the cumulative day of the year given a Date object.
     * Ex. Feb 2nd is 33, Dec 31st is 365 (or 366 in a leap year).
     */
    const start = new Date(date.getFullYear(), 0, 0);
    const millisDiff = (date.getTime() - start.getTime()) + ((start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
    const millisInOneDay = 1000 * 60 * 60 * 24;
    return Math.floor(millisDiff / millisInOneDay);
}

const getSunsetTime = (latitude: number, date: Date) => {
    /**
     * Calculate the time of sunset given a latitude and a Date object.
     */
    const cumDay = date2cumDay(date);
    const hour = Math.abs((1 / 15) * Math.acos(-Math.tan(latitude) * Math.tan(23.44 * Math.sin(360 * (cumDay + 284) / 365))));
}

export const getPhases = (observatoryPosition: TGeographicPosition) => {
    // TODO: make this function work
    let angle = 0;
    let phases: string[] = [];
    for (let phaseKey in PHASES) {
        let colour = PHASES[phaseKey as keyof typeof PHASES];
        let phaseAngle = 360 / Object.keys(PHASES).length;
        phases.push(`${colour} ${angle}deg ${angle + phaseAngle}deg`);
        angle += phaseAngle;
    }
    return phases;
}


interface TTime {
    hour: number,
    minute: number,
}

export const hourToAngle = (time: TTime) => {
    return Math.round((time.hour + time.minute / 60) / 24 * 360);
}

export const angleToHour = (angle: number) => {
    const time = ((180 - angle + 3600) % 360) / 360 * 24;
    const hour = Math.floor(time);
    const minute = Math.floor((time - hour) * 60);
    return { "hour": hour, "minute": minute } as TTime;
}

export const timeToString = (time: TTime) => {
    return `${time.hour.toString().padStart(2, '0')}:${time.minute.toString().padStart(2, '0')}`;
}
