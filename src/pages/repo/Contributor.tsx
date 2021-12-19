import React from 'react';

interface Props {
  htmlUrl: string;
  avatarUrl: string;
  login: string;
}

const Contributor: React.FC<Props> = ({ htmlUrl, avatarUrl, login }): JSX.Element => {
  return (
    <div>
      <a href={htmlUrl} target="_blank" rel="noreferrer" className="flex items-center">
        <img src={avatarUrl} className="w-16 m-1" alt={login} title={login} />
      </a>
    </div>
  );
};

export default Contributor;
