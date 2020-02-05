import axios from 'axios';

const setUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj,
});

const clearUser = () => ({
  type: 'CLEAR_USER',
});

const registerUser = userObj => ({
  type: 'NEW_USER',
  payload: userObj,
});

const loginUser = userObj => (dispatch) => {
  axios.post('https://salty-meadow-72553.herokuapp.com/api/v1/auth/sign_in', userObj).then((res) => {
    dispatch(setUser(res.data.data));
    localStorage.setItem('user', JSON.stringify(res.headers));
  }).catch((error) => {
    throw (error);
  });
};

const logoutUser = () => (dispatch) => {
  const headers = JSON.parse(localStorage.user);
  axios.delete('https://salty-meadow-72553.herokuapp.com/api/v1/auth/sign_out', { headers });
  dispatch(clearUser());
  localStorage.clear();
};

const newUser = userObj => (dispatch) => {
  axios.post('https://salty-meadow-72553.herokuapp.com/api/v1/auth/', userObj).then((res) => {
    dispatch(registerUser(res.data.data));
  }).catch((error) => {
    throw (error);
  });
};

export default {
  loginUser,
  logoutUser,
  newUser,
};
