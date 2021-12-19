import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getRepositories } from '../../store/reducers/user/user.actions';
import { setRepo } from '../../store/reducers/repo/repo.actions';
import { RepoType } from '../../store/reducers/repo/repo.types';

import { RootState } from '../../store/reducers';

import RepoItem from './RepoItem';

const Repositories = (): JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { repos } = useSelector((state: RootState) => ({
    repos: state.user.repos,
  }));

  useEffect(() => {
    dispatch(getRepositories());
  }, [dispatch]);

  const handleRepoClick = (repo: RepoType) => {
    dispatch(setRepo(repo));
    history.push(`/${repo.name}`);
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-full text-blue-900 font-bold px-10 py-5">
        {repos.map((repo, index) => {
          const { name, language, updated_at, stargazers_count, owner, html_url, description, id } =
            repo;
          const repoInfo = {
            name,
            language,
            updated_at,
            stargazers_count,
            owner,
            html_url,
            description,
            id,
          };
          return (
            <RepoItem
              key={id}
              repo={{ name, language, updated_at, stargazers_count }}
              index={index}
              handleRepoClick={() => handleRepoClick(repoInfo)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Repositories;
