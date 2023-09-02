import { PHASES } from '../constants';

export const getPhases = (observerPosition) => {
    let angle = 0;
    let phases = [];
    for (let phase in PHASES) {
        let colour = PHASES[phase];
        let phaseAngle = 20; // TODO:
        phases.push(`${colour} ${angle}deg ${angle + phaseAngle}deg`);
        angle += phaseAngle;
    }
    return phases;
}
