import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/reducers';

import { getRepoData, resetRepo } from '../../store/reducers/repo/repo.actions';
import { starRepo } from '../../store/reducers/user/user.actions';

import Contributor from './Contributor';

interface ParamTypes {
  reponame: string;
}

const RepoInfo = (): JSX.Element => {
  const { reponame } = useParams<ParamTypes>();
  const dispatch = useDispatch();

  const { repo, starredRepos } = useSelector((state: RootState) => ({
    repo: state.repo,
    starredRepos: state.user.starredRepos,
  }));

  const isRepoStarred = useMemo(() => {
    return starredRepos.some((repoId) => repoId === repo.id);
  }, [repo.id, starredRepos]);

  useEffect(() => {
    dispatch(getRepoData());

    return () => {
      dispatch(resetRepo());
    }
  }, [dispatch]);

  const handleStar = () => {
    dispatch(starRepo(repo.id));
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-full text-blue-900 px-10 py-5">
        <div className="font-bold text-xl underline flex items-center mb-1">
          {reponame}{' '}
          <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-gray-700 mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          <button type="button" onClick={handleStar} title="Hit to star!">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${isRepoStarred ? 'text-yellow-600' : '' }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </button>
        </div>
        {repo.description && <p>{repo.description}</p>}
        {repo.pulls && (
          <div className="flex flex-col mt-2">
            <div className="font-bold">Pull Requests</div>
            <div className="flex flex-col">
              {repo.pulls.slice(0, 10).map((pr) => {
                return (
                  <a
                    key={pr.id}
                    href={pr.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center hover:bg-blue-200"
                  >
                    <div className="flex flex-grow hover:underline">{pr.title}</div>
                    <div className="w-1/6">{new Date(pr.updated_at).toLocaleString()}</div>
                  </a>
                );
              })}
            </div>
          </div>
        )}
        {repo.issues && (
          <div className="flex flex-col mt-2">
            <div className="font-bold">Issues</div>
            <div className="flex flex-col">
              {repo.issues.slice(0, 10).map((issue) => {
                return (
                  <a
                    key={issue.id}
                    href={issue.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center hover:bg-blue-200"
                  >
                    <div className="flex flex-grow hover:underline">{issue.title}</div>
                    <div className="w-1/6">{new Date(issue.updated_at).toLocaleString()}</div>
                  </a>
                );
              })}
            </div>
          </div>
        )}
        {repo.owner && (
          <div className="flex flex-col mt-2">
            <h2 className="font-bold">Owner</h2>
            <Contributor
              htmlUrl={repo.owner.html_url}
              avatarUrl={repo.owner.avatar_url}
              login={repo.owner.login}
            />
          </div>
        )}
        {Array.isArray(repo.contributors) && (
          <div className="flex flex-col mt-2">
            <div className="font-bold">Contributors</div>
            <div className="flex flex-wrap">
              {repo.contributors.map((contributor) => {
                return (
                  <Contributor
                    key={contributor.author.id}
                    htmlUrl={contributor.author.html_url}
                    avatarUrl={contributor.author.avatar_url}
                    login={contributor.author.login}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RepoInfo;
