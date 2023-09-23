import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import solarHourReducer from './redux/solarHour';
import observerReducer from './redux/observer';
import geocenterReducer from './redux/geocenter';
import { TGeographicPosition, TAbsolutePosition } from './types';

const rootReducer = combineReducers({
    solarHour: solarHourReducer, // current hour of the day as the Earth's rotation angle
    observer: observerReducer, // latitude and longitude coordinates of the observer
    geocenter: geocenterReducer, // top and left coordinates of Earth
});

export type TRootState = {
    solarHour: { angle: number };
    observer: TGeographicPosition;
    geocenter: TAbsolutePosition;
};

const store = configureStore({ reducer: rootReducer });

export const selectObserverPosition = (state: TRootState) => state.observer;
export const selectSolarHour = (state: TRootState) => state.solarHour.angle;
export const selectGeocenter = (state: TRootState) => state.geocenter;

export default store;
