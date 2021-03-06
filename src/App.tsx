import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/Layout';
import Repositories from './pages/repositories/index';
import UserSearch from './components/UserSearch';
import RepoInfo from './pages/repo';

function App(): JSX.Element {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Redirect to="/repos" />
        </Route>
        <Route exact path="/repos" component={Repositories} />
        <Route exact path="/usersearch" component={UserSearch} />
        <Route exact path="/:reponame" component={RepoInfo} />
      </Switch>
    </Layout>
  );
}

export default App;
