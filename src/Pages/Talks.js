import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Container } from 'semantic-ui-react';
import talksActions from '../Redux/talksActions';

const TalkPage = () => {
  const talks = useSelector(state => state.talks.talks, shallowEqual) 
  // || {};
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(talksActions.fetchAllTalks());
  }, [dispatch])
  console.log(talks);

  return (
  <Container>
    <h1>Talks Calendar:</h1>
    {/* {talks.prototype.map(talk => <div>{talk.title}</div>)} */}
  </Container>
  );
};

export default TalkPage;
