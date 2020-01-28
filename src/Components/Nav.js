import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import userActions from '../redux/userActions';
import {
  Container,
  Menu,
} from 'semantic-ui-react';

const Nav = () => {
  const linkStyle = { color: '#C513AF', fontWeight: 'bold', fontSize: '1.2em' };
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userActions.logoutUser());
  };
  const user = useSelector(state => state.user);
  const display = user.currentUser ? (
    <Menu stackable widths={4}>
      <Menu.Item><Link style={linkStyle} to="/">Home</Link></Menu.Item>
      <Menu.Item><Link style={linkStyle} to="/listings">Listings</Link></Menu.Item>
      <Menu.Item><Link style={linkStyle} to="/favorites">Favorites</Link></Menu.Item>
      <Menu.Item>
        <Link style={linkStyle} to="/" onClick={handleLogout}>
        Logout
        </Link>
      </Menu.Item>
    </Menu>
  ) : (
    <Menu stackable widths={3}>
      <Menu.Item><Link style={linkStyle} to="/">Home</Link></Menu.Item>
      <Menu.Item><Link style={linkStyle} to="/signup">Signup</Link></Menu.Item>
      <Menu.Item><Link style={linkStyle} to="/login">Login</Link></Menu.Item>
    </Menu>
  );
  return (
    <Container>
      {display}
    </Container>
  );
};

export default Nav;
