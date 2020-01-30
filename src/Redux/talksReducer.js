export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'SET_TALKS':
      return { ...state, talks: payload };
    default:
      return state;
  }
};
