export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'SET_TALKS':
      console.log(type, payload)
      return { ...state, talks: payload };
    default:
      return state;
  }
};
