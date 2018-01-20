import { createStore, applyMiddleware, compose } from 'redux';
import { autoRehydrate } from 'redux-persist';
import { REHYDRATE } from 'redux-persist/constants';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { AsyncStorage } from 'react-native';
import reducers from 'almundo/src/containers';
import { persistStore } from 'redux-persist';

let middlewares = [];

middlewares.push(ReduxThunk)

if (__DEV__ === true) {
  middlewares.push(logger);
}

const enhancers = [
  applyMiddleware(...middlewares),
  autoRehydrate({ log: true }),
]

const store = createStore(reducers, undefined, compose(...enhancers))

persistStore(store, { storage: AsyncStorage, whitelist: [], blacklist: []})

export default store;