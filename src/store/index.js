import { createStore,applyMiddleware, compose } from 'redux';
import myReducer from '../reducers';
import thunkMiddleware from 'redux-thunk'

export default function configStore() {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({serialize: true }) : compose;

  return createStore(
    myReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
  )
};

