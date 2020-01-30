import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Container, Item, Segment, Button } from 'semantic-ui-react';
import talksActions from '../Redux/talksActions';

const TalkPage = () => {
  const talks = useSelector(state => state.talks.talks, shallowEqual) || [];
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(talksActions.fetchAllTalks());
  }, [dispatch])
  console.log(talks);

  const style = {
  button: {
    margin: '1em',
    color: 'white',
    backgroundColor: '#5cba57',
  },
}

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
          <Segment raised color="violet">
          <Item>
        <React.Fragment key={id}>
          <Item.Content>
          <Item.Header as='h2'>{title}</Item.Header>
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
            {time}
          </p>
          <p>
            Speaker name:
            {speaker_name}
          </p>
          <p>
            Speaker title:
            {speaker_title}
          </p>
          </Item.Description>
          <Button style={style.button}>Add to Calendar</Button>
          </Item.Content>
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
