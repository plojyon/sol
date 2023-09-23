import { AnyAction } from 'redux';
import { ACTIONS } from '../constants';

const initialState = { angle: -30 };

const solarHourReducer = (state = initialState, action: AnyAction) => {
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