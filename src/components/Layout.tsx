import React from 'react';

type LayoutType = React.PropsWithChildren<unknown>;

const Layout = ({ children }: LayoutType): JSX.Element => {
  return (
    <div>
      <header>Header</header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
