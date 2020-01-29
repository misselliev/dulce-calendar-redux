import axios from 'axios';

const setUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj,
});

const clearUser = () => ({
  type: 'CLEAR_USER',
});
const loginUser = (userObj) => (dispatch) => {
  axios.post('http://localhost:3000/api/v1/auth/sign_in', userObj).then(res => {
  dispatch(setUser(res.data.data));
  localStorage.setItem('user', res.data.data);
});
};

const logoutUser = () => (dispatch) => {
  const userObj = localStorage.getItem('user');
  axios.delete('http://localhost:3000/api/v1/auth/sign_out', userObj);
  dispatch(clearUser());
};

export default {
  loginUser,
  logoutUser,
};
