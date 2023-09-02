import { ACTIONS, defaultObserverLocation } from '../constants';

const observerReducer = (state = defaultObserverLocation, action) => {
    switch (action.type) {
        case ACTIONS.OBSERVER_MOVED: {
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

export default observerReducer;