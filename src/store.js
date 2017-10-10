import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import steem from 'steem';

const reducers = combineReducers({});

if (process.env.STEEMJS_URL) {
  steem.api.setOptions({ url: process.env.STEEMJS_URL });
}

const store = createStore(
  reducers,
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(thunk),
);

export default store;
