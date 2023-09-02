import { ACTIONS } from '../constants';

const initialState = { angle: 0 };

const solarHourReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SOLAR_HOUR_CHANGED: {
            return { angle: action.payload };
        }
        default: {
            return state;
        }
    }
}

export default solarHourReducer;