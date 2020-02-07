import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Grid, Button } from 'semantic-ui-react';
import '../Styles/homeStyle.css';

const HomePage = () => {
  const user = useSelector(state => state.user);
  const greeting = user.currentUser ? (
    <div className="home-text">
      <h1 className="home-title">
        {user.currentUser.username}
        Welcome back!
      </h1>
      <img src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1496&q=80" alt="calendar-img" className="home-image" />
      <p className="home-p">Please select Talks tab to start scheduling</p>
    </div>

  ) : (

    <Grid className="ui grid column centered homePage">
      <div className="home-text">
        <h1 className="home-title">Welcome to Dulce Conferences!</h1>
        <h3>Please login or sign up</h3>
        <h3>The best app to organize your conference</h3>
        <Button className="home-button"><Link to="/login" className="home-link">Login</Link></Button>
        <Button className="home-button"><Link to="/signup" className="home-link">Signup</Link></Button>
      </div>
    </Grid>

  );
  return (
    <main className="ui grid column centered">
      {greeting}
    </main>

  );
};

export default HomePage;
