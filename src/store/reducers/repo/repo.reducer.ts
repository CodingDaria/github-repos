import { AnyAction } from 'redux';

import * as repoActions from './repo.constants';
import { RepoType } from './repo.types';

const initialState: RepoType = {
  name: '',
  contributors: [],
  language: '',
  updated_at: '',
  stargazers_count: 0,
  issues: [],
  pulls: [],
  owner: null,
  html_url: '',
  description: '',
  id: 0,
};

export default (state = initialState, action: AnyAction): RepoType => {
  switch (action.type) {
    case repoActions.SET_REPO:
    case repoActions.SET_REPO_DATA:
      return { ...state, ...action.payload };
    case repoActions.RESET_REPO:
      return initialState;
    default:
      return state;
  }
};
