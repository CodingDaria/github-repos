/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';
import { AppDispatch } from '../../index';
import { RootState } from '..';

import * as userActions from './user.constants';

export const setRepos = (payload: number[]) => ({ type: userActions.SET_REPOS, payload });

export const getRepositories = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  try {
    const username = getState().user.username;
    const { data: repositories } = await axios(`https://api.github.com/users/${username}/repos`);
    const sortedRepositories = [...repositories].sort((a, b) => b.stargazers_count - a.stargazers_count);
    dispatch(setRepos(sortedRepositories));
  } catch {
    //
  }
};

export const setUser = (username: string) => (dispatch: AppDispatch) => {
  dispatch({ type: userActions.SET_USER, payload: username });
};

export const setStarredRepos = (payload: number[]) => ({ type: userActions.SET_STARRED_REPOS, payload });

export const starRepo = (repoId: number) => (dispatch: AppDispatch, getState: () => RootState) => {
  const { repos, starredRepos } = getState().user;
  const currentRepo = repos.find(({ id }) => repoId === id);
  const isStarred = starredRepos.some(({ id }) => repoId === id);
  const newStarredRepos = isStarred
    ? starredRepos.filter(({ id }) => repoId !== id)
    : [...starredRepos, currentRepo];
  dispatch(setStarredRepos(newStarredRepos));
};

export const setFavorites = (payload: boolean) => ({
  type: userActions.SET_FAVORITES_MODE,
  payload,
})
