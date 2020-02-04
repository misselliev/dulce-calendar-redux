import axios from 'axios';

const addEvent = event => ({
  type: 'ADD_EVENT',
  payload: event,
});

const loadCalendar = calendar => ({
  type: 'LOAD_CALENDAR',
  payload: calendar,
});

const deleteItem = event => ({
  type: 'DELETE_EVENT',
  payload: event,
});

const addToCalendar = event => (dispatch) => {
  axios.post('/api/v1/schedules', event).then((res) => {
    dispatch(addEvent(res.data));
  }).catch((error) => {
    throw (error);
  });
};

const fetchCalendar = userId => (dispatch) => {
  const headers = JSON.parse(localStorage.user);
  axios.get(`/api/v1/schedules/${userId}`, { headers }).then((res) => {
    dispatch(loadCalendar(res.data));
  }).catch((error) => {
    throw (error);
  });
};
const removeFromSchedule = event => (dispatch) => {
  const headers = JSON.parse(localStorage.user);
  axios.delete(`/api/v1/schedules/${event.id}`, { headers }).then((res) => {
    dispatch(deleteItem(event));
  }).catch((error) => {
    throw (error);
  });
};

export default {
  addToCalendar,
  fetchCalendar,
  removeFromSchedule,
};
