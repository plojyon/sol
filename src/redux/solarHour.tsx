import { AnyAction } from 'redux';
import { ACTIONS } from '../constants';

const initialState = { angle: -30 };

const solarHourReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case ACTIONS.SOLAR_HOUR_CHANGED: {
            const next = action.payload;
            const prev = state.angle;
            if (Math.abs(prev - next) > 180) {
                if (prev < next) {
                    return { angle: next - 360 };
                }
                else {
                    return { angle: next + 360 };
                }
            }
            return { angle: next };
        }
        default: {
            return state;
        }
    }
}

export default solarHourReducer;