import axios from 'axios';

const addEvent = event => ({
  type: 'ADD_EVENT',
  payload: event,
});

const addToCalendar = event => (dispatch) => {
  axios.post('/api/v1/schedules', event).then((res) => {
    dispatch(addEvent(res.data));
  }).catch(error => {
    throw(error);
  });
};

export default {
  addToCalendar,
};
