import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  Container, Item, Segment, Button,
} from 'semantic-ui-react';
import calendarActions from '../Redux/calendarActions';

const CalendarPage = () => {
  const calendar = useSelector(state => state.calendar.calendar, shallowEqual) || [];
  const user = useSelector(state => state.user.currentUser) || {};
  const userId = user.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calendarActions.fetchCalendar(userId));
  }, [dispatch, userId]);

  const deleteEvent = ({ userId, talk }) => {
    dispatch(calendarActions.removeFromSchedule({ userId, talk }));
  };

  const style = {
    button: {
      color: 'white',
      backgroundColor: '#35bee0',
      margin: '0.1em 0.01em 0.1em 0.5em',
      width: '6em',
      padding: '1em',
      minHeight: '100%',
    },
    item: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: '2.5em',
      color: 'black',
      textShadow: '2px 2px 4px grey',
      fontStyle: 'italic',
      textAlign: 'center',
      paddingTop:'1em',
      paddingBottom:'0.5em',
    }

  };

  return (
    <Container>
      <h1 style={style.title}>Your Calendar:</h1>
      <React.Fragment>
        <Item.Group divided>
          {calendar.map(({
            id,
            talk,
          }) => (
            <Segment raised color="violet" style={{margin:'1.5rem'}} key={id}>
              <Item style={style.item}>
                <React.Fragment>
                  <Item.Content>
                    <Item.Header as="h2">{talk.title}</Item.Header>
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
                      Date:
                        {talk.date}
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
                    <Button style={style.button} onClick={() => deleteEvent({ userId, talk })}>
                      Remove from Calendar
                    </Button>
                  </div>
                </React.Fragment>
              </Item>
            </Segment>
          ))}
        </Item.Group>
      </React.Fragment>
    </Container>
  );
};

export default CalendarPage;
