/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';
import { AppDispatch } from '../../index';
import { RootState } from '..';

import * as userActions from './user.constants';

export const getRepositories = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  try {
    const username = getState().user.username;
    const { data: repositories } = await axios(`https://api.github.com/users/${username}/repos`);
    dispatch({ type: userActions.SET_REPOS, payload: repositories });
  } catch {
    //
  }
};

export const setUser = (username: string) => (dispatch: AppDispatch) => {
  dispatch({ type: userActions.SET_USER, payload: username });
};
