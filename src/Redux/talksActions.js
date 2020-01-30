import axios from 'axios';

const setTalks = (talks) => ({
  type: 'SET_TALKS',
  payload: talks,
})

const fetchAllTalks = () => (dispatch) => {
  axios.get('/api/v1/talks').then(res => {
  dispatch(setTalks(res.data));
});
};

export default {
  fetchAllTalks,
}