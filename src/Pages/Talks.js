import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  Item, Segment, Button,
} from 'semantic-ui-react';
import '../Styles/talksStyle.css';
import talksActions from '../Redux/talksActions';
import calendarActions from '../Redux/calendarActions';
const TalkPage = () => {
  const talks = useSelector(state => state.talks.talks, shallowEqual) || [];
  const user = useSelector(state => state.user.currentUser) || {};
  const user_id = user.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(talksActions.fetchAllTalks());
  }, [dispatch]);

  const addEvent = ({ user_id, talk_id }) => {
    dispatch(calendarActions.addToCalendar({ user_id, talk_id }));
    setTimeout(() => { dispatch(talksActions.fetchAllTalks()); }, 100);
  };

  return (
    <main className="ui container">
      <h1 className="talk-title">Talks Calendar:</h1>
      <React.Fragment>
        <Item.Group divided>
          {talks.map(({
            id,
            title,
            description,
            location,
            date,
            time,
            speaker_name,
            speaker_title,
          }) => (
            <ul className="all-events" key={id}>
              <li className="talk-circle">
                <p className="talk-date">
                  {date}
                </p>
                <Segment raised className="talk-spacing">
                  <Item className="talk-item">
                    <React.Fragment>
                      <Item.Content>
                        <Item.Header as="h2" className="segment-title">{title}</Item.Header>
                        <Item.Description>
                          <p>
                          Description:
                            {description}
                          </p>
                          <p>
                          Location:
                            {location}
                          </p>
                          <p>
                          Time:
                            {time.substring(11, 16)}
                          </p>
                          <p>
                          Speaker:
                            {speaker_name}
                          </p>
                          <p>
                          Speaker title:
                            {speaker_title}
                          </p>
                        </Item.Description>
                      </Item.Content>
                    </React.Fragment>
                    <React.Fragment>
                      <div>
                        <Button className="talk-button" onClick={() => addEvent({ user_id, talk_id: id })}>
                          Add to Calendar
                        </Button>
                      </div>
                    </React.Fragment>
                  </Item>
                </Segment>
              </li>
            </ul>
          ))}
        </Item.Group>
      </React.Fragment>
    </main>
  );
};

export default TalkPage;
