export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'LOGIN_USER':
      return { ...state, currentUser: payload };
    case 'CLEAR_USER':
      return {};
    default:
      return state;
  }
};
