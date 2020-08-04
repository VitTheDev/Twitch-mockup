import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './header/Header';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';

const App = (props) => {
  return (
    <div className="ui container">
      <Header />
      <Switch>
        <Route exact path="/" render={(props) => <StreamList {...props} />} />
        <Route exact path="/streams/create" render={() => <StreamCreate />} />
        <Route exact path="/streams/edit/:id" component={StreamEdit} />
        <Route
          exact
          path="/streams/delete/:id"
          render={(props) => <StreamDelete {...props} />}
        />
        <Route
          exact
          path="/streams/show/:id"
          render={(props) => <StreamShow {...props} />}
        />
      </Switch>
    </div>
  );
};

export default App;
