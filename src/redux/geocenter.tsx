import { AnyAction } from 'redux';
import { ACTIONS } from '../constants';

const defaultGeocenter = {
    left: window.innerWidth / 2,
    top: window.innerHeight / 2,
}
const geocenterReducer = (state = defaultGeocenter, action: AnyAction) => {
    switch (action.type) {
        case ACTIONS.GEOCENTER_MOVED: {
            return {
                top: action.payload.top || state.top,
                left: action.payload.left || state.left,
            };
        }
        default: {
            return state;
        }
    }
}

export default geocenterReducer;