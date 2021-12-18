/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';
import { AppDispatch } from '../..';
import { RootState } from '..';

import * as repoActions from './repo.constants';
import { RepoType } from './repo.types';

export const setRepo = (repo: RepoType) => async (dispatch: AppDispatch) => {
  dispatch({ type: repoActions.SET_REPO, payload: repo });
};

export const setRepoContributors = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  try {
    const { username } = getState().user;
    const { name } = getState().repo;
    const { data: contributors } = await axios(
      `https://api.github.com/repos/${username}/${name}/stats/contributors`,
    );
    dispatch({ type: repoActions.SET_REPO_CONTRIBUTORS, payload: contributors });
  } catch {
    //
  }
};
