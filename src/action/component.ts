import { createAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store/index';

export enum ComponentAction {
  CHANGE = 'change'
}

export const changeName = createAction(ComponentAction.CHANGE, (name: string) => {
  return {
    payload: name
  };
});

/**
 * Write async logic code by thunk action
 * @param payload any
 * @returns
 */
export const asyncFlow =
  (payload: string): AppThunk =>
  (dispatch, getState) => {
    dispatch(changeName('fdsf'));
    console.log(getState());
    console.log(payload);
  };
