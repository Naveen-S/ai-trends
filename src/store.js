import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { suitReducer } from './reducers/suitsReducer';
import { trendReducer } from './reducers/trendReducer';

const reducers = combineReducers({
  suits: suitReducer,
  trend: trendReducer,
});

const middleware = [thunk];
const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
