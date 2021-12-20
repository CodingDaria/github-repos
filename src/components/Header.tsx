import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../store/reducers';
import { setFavorites } from '../store/reducers/user/user.actions';

interface LinkProps {
  path: string;
  title: string;
}

const StyledLink: React.FC<LinkProps> = ({ path, title }): JSX.Element => (
  <Link
    to={path}
    className="text-blue-900 hover:bg-blue-200 px-4 py-2 border rounded border-blue-900"
  >
    {title}
  </Link>
);

const Header = (): JSX.Element => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const { username, isOnlyFavorites } = useSelector((state: RootState) => ({
    username: state.user.username,
    isOnlyFavorites: state.user.isOnlyFavorites,
  }));

  const isRepoPage = pathname === '/repos';

  const handleFavorites = () => {
    dispatch(setFavorites(!isOnlyFavorites));
  };

  return (
    <header className="px-10 py-4 flex justify-between items-center border-b-2 border-blue-400">
      {pathname !== '/usersearch' && <div className="font-semibold">{username}</div>}
      {!['/repos', '/usersearch'].includes(pathname) && <StyledLink path="/repos" title="Back" />}
      {isRepoPage && (
        <div className="flex">
          <button
            type="button"
            className={`mr-2 px-4 py-2 border rounded border-blue-900 ${
              isOnlyFavorites ? 'text-white bg-blue-900' : 'text-blue-900 hover:bg-blue-200'
            }`}
            onClick={handleFavorites}
          >
            Favorites
          </button>
          <StyledLink path="/usersearch" title="Search" />
        </div>
      )}
    </header>
  );
};

export default Header;
