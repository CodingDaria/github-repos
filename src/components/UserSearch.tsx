import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setUser, setStarredRepos } from '../store/reducers/user/user.actions';

const UserSearch = (): JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [username, setUsername] = useState('CodingDaria');

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex w-1/3 p-6 shadow-md rounded items-center max-w-screen-sm m-auto">
        <input
          type="text"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder="Github Username"
        />
        <button
          type="button"
          className="ml-2 px-3 py-1 border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 rounded-md"
          onClick={() => {
            dispatch(setUser(username));
            dispatch(setStarredRepos([]));
            history.push('/repos');
          }}
        >
          Go
        </button>
      </div>
    </div>
  );
};

export default UserSearch;
