import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../store/reducers';

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

  const { username } = useSelector((state: RootState) => ({
    username: state.user.username,
  }));

  const isRepoPage = pathname === '/repos';

  const handleFavourites = () => {
    return;
  };

  return (
    <header className="px-10 py-4 flex justify-between items-center border-b-2 border-blue-400">
      {pathname !== '/usersearch' && <div className="font-semibold">{username}</div>}
      {!['/repos', '/usersearch'].includes(pathname) && <StyledLink path="/repos" title="Back" />}
      {isRepoPage && (
        <div className="flex">
          <button
            type="button"
            className="mr-2 text-blue-900 hover:bg-blue-200 px-4 py-2 border rounded border-blue-900"
            onClick={handleFavourites}
          >
            Favourites
          </button>
          <StyledLink path="/usersearch" title="Search" />
        </div>
      )}
    </header>
  );
};

export default Header;
