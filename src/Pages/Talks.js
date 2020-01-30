import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  Container, Item, Segment, Button,
} from 'semantic-ui-react';
import talksActions from '../Redux/talksActions';

const TalkPage = () => {
  const talks = useSelector(state => state.talks.talks, shallowEqual) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(talksActions.fetchAllTalks());
  }, [dispatch]);

  const style = {
    button: {
      color: 'white',
      backgroundColor: '#5cba57',
      margin: '0.1em 0.01em 0.1em 0.5em',
      width: '6em',
      padding: '1em',
      minHeight: '100%',
    },
    item: {
      display: 'flex',
    },
  };

  return (
    <Container>
      <h1>Talks Calendar:</h1>
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
            <Segment raised color="violet" key={id}>
              <Item style={style.item}>
                <React.Fragment>
                  <Item.Content>
                    <Item.Header as="h2">{title}</Item.Header>
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
                      Date:
                        {date}
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
                    <Button style={style.button}>Add to Calendar</Button>
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

export default TalkPage;
