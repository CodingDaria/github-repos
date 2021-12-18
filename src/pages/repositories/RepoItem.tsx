import React from 'react';

import { Repo } from '../../types';

interface Props {
  repo: Repo;
  index: number;
  handleRepoClick: () => void;
}

const RepoItem: React.FC<Props> = ({ repo, index, handleRepoClick }): JSX.Element => {
  return (
    <button
      type="button"
      className="flex items-center w-full border-b border-blue-500 p-2 hover:bg-blue-100"
      onClick={handleRepoClick}
    >
      <div className="flex flex-start w-9">{index + 1}.</div>
      <div className="flex flex-grow items-center">
        <div className="flex flex-col flex-grow">
          <span className="flex flex-start font-bold hover:underline">{repo.name}</span>
          <span className="flex flex-start text-xs">
            Updated on {new Date(repo.updated_at).toDateString()}
          </span>
        </div>
        <span className="text-sm">
          <code>{repo.language}</code>
        </span>
        <span className="flex flex-start items-center ml-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-black">{repo.stargazers_count}</span>
        </span>
      </div>
    </button>
  );
};

export default RepoItem;
