import { AnyAction } from 'redux';

import * as userActions from './user.constants';
import { UserState } from './user.types';

const initialState: UserState = {
  username: 'CodingDaria',
  repos: [],
  starredRepos: [],
  isOnlyFavorites: false,
};

export default (state = initialState, action: AnyAction): UserState => {
  switch (action.type) {
    case userActions.SET_USER:
      return { ...state, username: action.payload };
    case userActions.SET_REPOS:
      return { ...state, repos: action.payload };
    case userActions.SET_STARRED_REPOS:
      return { ...state, starredRepos: action.payload };
    case userActions.SET_FAVORITES_MODE:
      return { ...state, isOnlyFavorites: action.payload };
    default:
      return state;
  }
};
