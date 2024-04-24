import { AnyAction } from 'redux';
import { ACTIONS } from '../constants';

const initialState = { angle: -30 };

const selectedAngleReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case ACTIONS.SELECTED_HOUR_CHANGED: {
            return { angle: action.payload };
        }
        default: {
            return state;
        }
    }
}

export default selectedAngleReducer;