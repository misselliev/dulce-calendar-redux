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
     throw(error);
  });
};

const fetchCalendar = () => (dispatch) => {
  // axios.get(`/api/v1/schedules/${userId}`).then((res) => {
  axios.get('/api/v1/schedules').then((res) => {
    dispatch(loadCalendar(res.data));
  }).catch((error) => {
     throw(error);
  });
};
const removeFromSchedule = event => (dispatch) => {
  axios.delete(`/api/v1/schedules/${event.talk.id}`).then((res) => {
    dispatch(deleteItem(res.data));
  }).catch((error) => {
     throw(error);
  });
};

export default {
  addToCalendar,
  fetchCalendar,
  removeFromSchedule,
};
