import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  Item, Segment, Button,
} from 'semantic-ui-react';
import '../Styles/calendarStyle.css';
import calendarActions from '../Redux/calendarActions';

const CalendarPage = () => {
  const calendar = useSelector(state => state.calendar.calendar, shallowEqual) || [];
  const user = useSelector(state => state.user.currentUser) || {};
  const userId = user.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calendarActions.fetchCalendar(userId));
  }, [dispatch, userId]);

  const deleteEvent = ({ userId, id }) => {
    dispatch(calendarActions.removeFromSchedule({ userId, id }));
  };

  return (
    <main className="ui container calendar">
      <h1 className="calendar-title">Your Calendar:</h1>
      <React.Fragment>
        <Item.Group divided>
          {calendar.map(({
            id,
            talk,
          }) => (
            <div key={id}>
              <p className="talk-date">
                {talk.date}
              </p>
              <Segment raised className="segment-spacing">
                <Item className="calendar-item">
                  <React.Fragment>
                    <Item.Content>
                      <Item.Header className="segment-title" as="h2">{talk.title}</Item.Header>
                      <Item.Description>
                        <p>
                        Description:
                          {talk.description}
                        </p>
                        <p>
                        Location:
                          {talk.location}
                        </p>
                        <p>
                        Time:
                          {talk.time.substring(11, 16)}
                        </p>
                        <p>
                        Speaker:
                          {talk.speaker_name}
                        </p>
                        <p>
                        Speaker title:
                          {talk.speaker_title}
                        </p>
                      </Item.Description>
                    </Item.Content>
                  </React.Fragment>
                  <React.Fragment>
                    <div>
                      <Button className="calendar-button" onClick={() => deleteEvent({ userId, id })}>
                        Remove from Calendar
                      </Button>
                    </div>
                  </React.Fragment>
                </Item>
              </Segment>
            </div>
          ))}
        </Item.Group>
      </React.Fragment>
    </main>
  );
};

export default CalendarPage;
