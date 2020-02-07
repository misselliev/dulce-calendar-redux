import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import '../Styles/navStyles.css';
import userActions from '../Redux/userActions';

const Nav = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userActions.logoutUser());
  };
  const user = useSelector(state => state.user);

  const display = user.currentUser ? (

    <Menu widths={4}>
      <Menu.Item><Link className="nav-link" to="/">Home</Link></Menu.Item>
      <Menu.Item><Link className="nav-link" to="/talks">Talks</Link></Menu.Item>
      <Menu.Item><Link className="nav-link" to="/calendar">Calendar</Link></Menu.Item>
      <Menu.Item><Link className="nav-link" to="/" onClick={handleLogout}>Logout</Link></Menu.Item>
    </Menu>
  ) : (
    <div />
  );
  return (
    <nav className="ui container">
      {display}
    </nav>
  );
};

export default Nav;
