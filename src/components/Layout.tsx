import React from 'react';

import Header from './Header';

type LayoutType = React.PropsWithChildren<unknown>;

const Layout = ({ children }: LayoutType): JSX.Element => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
