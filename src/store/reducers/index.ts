import { combineReducers } from 'redux';

import user from './user/user.reducer';
import { UserState } from './user/user.types';
import repo from './repo/repo.reducer';
import { RepoType } from './repo/repo.types';

const rootReducer = combineReducers({
  user,
  repo,
});

export default rootReducer;

export interface ReduxState {
  user: UserState;
  repo: RepoType;
}

export type RootState = ReturnType<typeof rootReducer>;
