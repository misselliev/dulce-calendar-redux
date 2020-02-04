import { combineReducers } from 'redux';
import user from './userReducer';
import talks from './talksReducer';
import calendar from './calendarReducer';

export default combineReducers({ user, talks, calendar });
