import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import component from '../reducer/component';

export const store = configureStore({
  reducer: {
    component
  }
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
