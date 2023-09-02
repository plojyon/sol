import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import solarHourReducer from './redux/solarHour';
import observerReducer from './redux/observer';

const rootReducer = combineReducers({
    solarHour: solarHourReducer, // current hour of the day as the Earth's rotation angle
    observer: observerReducer, // latitude and longitude coordinates of the observer
});

const store = configureStore({ reducer: rootReducer });

export const selectObserverPosition = (state) => state.observer;
export const selectSolarHour = (state) => state.solarHour.angle;

export default store;
