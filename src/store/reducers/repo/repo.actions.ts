/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';
import { AppDispatch } from '../..';
import { RootState } from '..';

import * as repoActions from './repo.constants';
import { RepoType } from './repo.types';

export const setRepo = (repo: RepoType) => async (dispatch: AppDispatch) => {
  dispatch({ type: repoActions.SET_REPO, payload: repo });
};

export const getRepoData = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  const { username } = getState().user;
  const { name } = getState().repo;
  const contributorsURL = `https://api.github.com/repos/${username}/${name}/stats/contributors`;
  const issuesURL = `https://api.github.com/repos/${username}/${name}/issues`;
  const pullsURL = `https://api.github.com/repos/${username}/${name}/pulls`;

  const repoInfo = await Promise.all(
    [contributorsURL, issuesURL, pullsURL].map(async (url) => {
      try {
        const { data } = await axios(url);
        return data;
      } catch {
        return [];
      }
    }),
  );
  const [contributors, issues, pulls] = repoInfo;
  dispatch({
    type: repoActions.SET_REPO_DATA,
    payload: { contributors, issues, pulls },
  });
};

export const resetRepo = () => ({
  type: repoActions.RESET_REPO,
});
