import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Menu,
} from 'semantic-ui-react';

const Nav = () => {
  const linkStyle = { color: '#C513AF', fontWeight: 'bold', fontSize: '1.2em' };
  return (
    <Container>
      <Menu stackable widths={4}>
        <Menu.Item><Link style={linkStyle} to="/">Home</Link></Menu.Item>
        <Menu.Item><Link style={linkStyle} to="/login">Login</Link></Menu.Item>
        <Menu.Item><Link style={linkStyle} to="/signup">Signup</Link></Menu.Item>
        <Menu.Item><Link style={linkStyle} to="/">Logout</Link></Menu.Item>
      </Menu>
    </Container>
  );
};

export default Nav;
