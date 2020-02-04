export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'LOAD_CALENDAR':
      return { ...state, calendar: payload };
    case 'ADD_EVENT':
      return { ...state,  calendar: [...state.calendar, payload]};
    case 'DELETE_EVENT':
      return { ...state, calendar: state.calendar.filter(event => event.id !== payload.id) };
    default:
      return state;
  }
};
