import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import solarHourReducer from './redux/solarHour';
import observerReducer from './redux/observer';
import geocenterReducer from './redux/geocenter';
import { TGeographicPosition, TAbsolutePosition } from './types';
import selectedAngleReducer from './redux/selectedAngle';

const rootReducer = combineReducers({
    solarHour: solarHourReducer, // current skybox rotation angle (updates on mouse release)
    selectedAngle: selectedAngleReducer, // current atmosphere rotation angle (updates on mouse move)
    observer: observerReducer, // latitude and longitude coordinates of the observer
    geocenter: geocenterReducer, // top and left coordinates of Earth
});

export type TRootState = {
    solarHour: { angle: number };
    selectedAngle: { angle: number };
    observer: TGeographicPosition;
    geocenter: TAbsolutePosition;
};

const store = configureStore({ reducer: rootReducer });

export const selectObserverPosition = (state: TRootState) => state.observer;
export const selectSolarHour = (state: TRootState) => state.solarHour.angle;
export const selectSelectedAngle = (state: TRootState) => state.selectedAngle.angle;
export const selectGeocenter = (state: TRootState) => state.geocenter;

export default store;
