export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'LOAD_CALENDAR':
      return { ...state, calendar: payload };
    case 'ADD_EVENT':
      return { ...state, calendar: payload };
    case 'DELETE_ITEM':
      return { ...state };
    default:
      return state;
  }
};
