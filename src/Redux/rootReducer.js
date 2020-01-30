import { combineReducers } from 'redux';
import user from './userReducer';
import talks from './talksReducer';

export default combineReducers({ user, talks });
