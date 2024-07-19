export const ACTIONS = {
    SOLAR_HOUR_CHANGED: 'skySpun',
    SELECTED_HOUR_CHANGED: 'skyIsSpinning',
    OBSERVATORY_MOVED: 'observatoryMoved',
    GEOCENTER_MOVED: 'earthMoved',
};

// Ljubljana
export const defaultObservatoryLocation = {
    latitude: 46.0569,
    longitude: 14.5058,
};

const phaseColours = {
    "day": "#00c1f7",
    "night": "#0c2b46",
    "astronomical": "#1e5785",
    "nautical": "#3285ce",
    "civil": "#915b6f",
    "golden": "#d9ca1c",
    "debug": "lime",
    "debug2": "LimeGreen",
};
// export const PHASES = {
//     "Afternoon": phaseColours["day"],
//     "Golden hour PM": phaseColours["golden"],
//     "Civil dusk": phaseColours["civil"],
//     "Nautical dusk": phaseColours["nautical"],
//     "Astronomical dusk": phaseColours["astronomical"],
//     "Full darkness PM": phaseColours["night"],
//     "Full darkness AM": phaseColours["night"],
//     "Astronomical dawn": phaseColours["astronomical"],
//     "Nautical dawn": phaseColours["nautical"],
//     "Civil dawn": phaseColours["civil"],
//     "Golden hour AM": phaseColours["golden"],
//     "Morning": phaseColours["day"],
// };
export const PHASES = {
    "0": phaseColours["debug"],
    "1": phaseColours["day"],
    "2": phaseColours["day"],
    "3": phaseColours["day"],
    "4Golden hour PM": phaseColours["golden"],
    "5Civil dusk": phaseColours["civil"],
    "6Nautical dusk": phaseColours["nautical"],
    "7Astronomical dusk": phaseColours["astronomical"],
    "8Full darkness 1": phaseColours["night"],
    "9Full darkness 2": phaseColours["night"],
    "AFull darkness 3": phaseColours["night"],
    "BAstronomical dawn": phaseColours["astronomical"],
    "CNautical dawn": phaseColours["nautical"],
    "DCivil dawn": phaseColours["civil"],
    "EGolden hour AM": phaseColours["golden"],
    "F": phaseColours["day"],
    "G": phaseColours["day"],
    "H": phaseColours["day"],
    "I": phaseColours["debug2"],
}

export const EARTH_COLOUR = "#56b906";
export const EARTH_RADIUS = 200;
export const SUN_RADIUS = 25;
export const SUN_ALTITUDE = 400;
export const ATMOSPHERE_RADIUS = 350;
export const CLOUD_ALTITUDE = 370;
export const STAR_COUNT = 35;
export const STAR_RADIUS = 10;
export const STAR_ALTITUDE = 200;

export const TIME_POINTER_HEIGHT = 9;

export const LIVE_ROTATE = false;

export const EVENT_TEXT_SIZE = 16;
export const PHASE_TEXT_SIZE = 16;
