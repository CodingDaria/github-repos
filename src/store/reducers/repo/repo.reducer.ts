import { AnyAction } from 'redux';

import * as repoActions from './repo.constants';
import { RepoType } from './repo.types';

const initialState: RepoType = {
  name: '',
  contributors: [],
  language: '',
  updated_at: '',
  stargazers_count: 0,
  issues_url: '',
  pulls_url: '',
};

export default (state = initialState, action: AnyAction): RepoType => {
  switch (action.type) {
    case repoActions.SET_REPO:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
