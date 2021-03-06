import queryString from 'query-string';
import * as React from 'react';
import { Route } from 'react-router-dom';
import { EmailStatistics, MessageForm, MessageList } from './containers';

const routes = () => (
  <React.Fragment>
    <Route key="/engage/home" exact path="/engage" component={MessageList} />

    <Route
      key="/engage/messages/create"
      exact
      path="/engage/messages/create"
      component={({ location }) => {
        const queryParams = queryString.parse(location.search);
        return <MessageForm kind={queryParams.kind} />;
      }}
    />

    <Route
      key="/engage/messages/edit"
      exact
      path="/engage/messages/edit/:_id"
      component={({ match }) => {
        return <MessageForm messageId={match.params._id} />;
      }}
    />

    <Route
      key="/engage/messages/show"
      exact
      path="/engage/messages/show/:_id"
      component={({ match }) => {
        return <EmailStatistics messageId={match.params._id} />;
      }}
    />
  </React.Fragment>
);

export default routes;
