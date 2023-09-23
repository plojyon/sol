import { AnyAction } from 'redux';
import { ACTIONS, defaultObservatoryLocation } from '../constants';

const observatoryReducer = (state = defaultObservatoryLocation, action: AnyAction) => {
    switch (action.type) {
        case ACTIONS.OBSERVATORY_MOVED: {
            return {
                latitude: action.payload.latitude || state.latitude,
                longitude: action.payload.longitude || state.longitude,
            };
        }
        default: {
            return state;
        }
    }
}

export default observatoryReducer;