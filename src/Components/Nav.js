import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Menu,
} from 'semantic-ui-react';
import userActions from '../Redux/userActions';

const Nav = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userActions.logoutUser());
  };
  const user = useSelector(state => state.user);

  const linkStyle = { color: '#59499e', fontWeight: 'bold', fontSize: '1.2em' };

  const display = user.currentUser ? (

    <Menu stackable widths={4}>
      <Menu.Item><Link style={linkStyle} to="/">Home</Link></Menu.Item>
      <Menu.Item><Link style={linkStyle} to="/talks">Talks</Link></Menu.Item>
      <Menu.Item><Link style={linkStyle} to="/calendar">Calendar</Link></Menu.Item>
      <Menu.Item><Link style={linkStyle} to="/" onClick={handleLogout}>Logout</Link></Menu.Item>
    </Menu>
  ) : (
    <div></div>    
  );
  return (
    <Container>
      {display}
    </Container>
  );
};

export default Nav;
