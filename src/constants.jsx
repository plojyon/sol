export const ACTIONS = {
    SOLAR_HOUR_CHANGED: 'skySpun',
    OBSERVER_MOVED: 'humanMoved',
};

// Ljubljana
export const defaultObserverLocation = {
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
}
export const PHASES = {
    "Afternoon": phaseColours["day"],
    "Golden hour PM": phaseColours["golden"],
    "Civil dusk": phaseColours["civil"],
    "Nautical dusk": phaseColours["nautical"],
    "Astronomical dusk": phaseColours["astronomical"],
    "Full darkness PM": phaseColours["night"],
    "Full darkness AM": phaseColours["night"],
    "Astronomical dawn": phaseColours["astronomical"],
    "Nautical dawn": phaseColours["nautical"],
    "Civil dawn": phaseColours["civil"],
    "Golden hour AM": phaseColours["golden"],
    "Morning": phaseColours["day"],
}

export const EARTH_COLOUR = "#56b906";