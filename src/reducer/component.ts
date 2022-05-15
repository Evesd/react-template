import { Action, PayloadAction } from '@reduxjs/toolkit';
import { ComponentAction } from '../action/component';

const INIT_STATE = {
  name: 'hello'
};

export type ComponentState = typeof INIT_STATE;

export default function component(state = INIT_STATE, action: Action): ComponentState {
  switch (action.type) {
    case ComponentAction.CHANGE:
      return {
        ...state,
        name: (action as PayloadAction<string>).payload
      };
    default:
      return state;
  }
}
