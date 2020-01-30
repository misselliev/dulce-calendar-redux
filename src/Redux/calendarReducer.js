export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'ADD_EVENT':
      return { ...state, calendar: payload };
    default:
      return state;
  }
};
