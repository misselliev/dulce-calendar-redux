import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './redux/rootReducer';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initState = {
  user: { currentUser: false },
  listings: {},
  favorites: {},
};
const store = createStore(rootReducer, initState, composeEnhancer(applyMiddleware(thunk)));

export default store;