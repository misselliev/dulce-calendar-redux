import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Grid, Button } from 'semantic-ui-react';

const styleText = {
  fontSize: '1.5em',
  color: 'black',
  textShadow: '2px 2px 4px grey',
  fontStyle: 'italic',
  textAlign: 'center',
  marginTop: '1em',
  marginBottom: '1em',
};

const buttonStyle = {
  marginTop: '25vw',
  marginBottom: '25vw',
  backgroundColor: '#35bee0',
  padding: '1.5em',
};

const imageStyle = {
  height: '50%',
  width: '100%',
  maxWidth: 720,
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const HomePage = () => {
  const user = useSelector(state => state.user);
  const greeting = user.currentUser ? (
    <div style={styleText}>
      <h1 style={{ marginTop: '1em' }}>
        {user.currentUser.username}
        Welcome back!
      </h1>
      <img src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1496&q=80" alt="calendar-img" style={imageStyle} />
      <p style={{ marginTop: '10vh' }}>Please select Talks tab to start scheduling</p>
    </div>

  ) : (

    <Grid className="ui grid column centered homePage">
      <div style={styleText}>
        <h1 style={{ marginTop: '1em' }}>Welcome to Dulce Conferences!</h1>
        <h3>Please login or sign up</h3>
        <Button style={buttonStyle}><Link style={{ color: 'white' }} to="/login">Login</Link></Button>
        <Button style={buttonStyle}><Link style={{ color: 'white' }} to="/signup">Signup</Link></Button>
        <h3>The best app to organize your conference</h3>
      </div>
    </Grid>

  );
  return (
    <Grid className="ui grid column centered">
      {greeting}
    </Grid>

  );
};

export default HomePage;
