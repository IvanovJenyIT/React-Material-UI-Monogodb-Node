import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch, Redirect } from 'react-router'
import ChatPage from "../../containers/ChatPage";
import WelcomePage from "../../containers/WelcomPage";
import {Provider} from 'react-redux';
import configStore from '../../store'
import { withStyles } from '@material-ui/core/styles';
import PrivateRoute from '../../containers/PrivateRoute';
import history from '../../utils/history';

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
});

const store = configStore();

const App = ({ classes }) => (
  <Provider store={store}>
    <Router history={history}>
      <div className={classes.root}>
        <Switch>
          <Route exact path="/(welcome)?" component={WelcomePage} />
          <PrivateRoute path="/chat/:chatId?" component={ChatPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default withStyles(styles)(App);
