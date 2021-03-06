import axios from 'axios';

const setTalks = talks => ({
  type: 'SET_TALKS',
  payload: talks,
});

const fetchAllTalks = () => (dispatch) => {
  const headers = JSON.parse(localStorage.user);
  axios.get('https://salty-meadow-72553.herokuapp.com/api/v1/talks', { headers }).then((res) => {
    dispatch(setTalks(res.data));
  }).catch((error) => {
    throw (error);
  });
};

export default {
  fetchAllTalks,
};
