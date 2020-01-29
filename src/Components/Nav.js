import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import userActions from '../Redux/userActions';
import {
  Container,
  Menu,
} from 'semantic-ui-react';

const Nav = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userActions.logoutUser());
  };

  const linkStyle = { color: '#59499e', fontWeight: 'bold', fontSize: '1.2em' };
  return (
    <Container>
      <Menu stackable widths={4}>
        <Menu.Item><Link style={linkStyle} to="/">Home</Link></Menu.Item>
        <Menu.Item><Link style={linkStyle} to="/login">Login</Link></Menu.Item>
        <Menu.Item><Link style={linkStyle} to="/signup">Signup</Link></Menu.Item>
        <Menu.Item><Link style={linkStyle} to="/" onClick={handleLogout}>Logout</Link></Menu.Item>
      </Menu>
    </Container>
  );
};

export default Nav;
