import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button, Form, Grid, Header, Segment, Icon,
} from 'semantic-ui-react';
import userActions from '../Redux/userActions';

const LoginPage = (props) => {
  const dispatch = useDispatch();

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userActions.loginUser(loginForm));
    props.history.push('/');
  };

  const handleChange = e => setLoginForm({ ...loginForm, [e.target.name]: e.target.value });

  const { email, password } = loginForm;

  return (
    <Grid textAlign="center" className="middle aligned wall" style={{ height: '100vh' }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" style={{ color: '#59499e' }} textAlign="center">
          <Icon name="home" />
          Log-in to your account
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              id="form-input-control-email"
              fluid
              icon="user"
              iconPosition="left"
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email"
              label="Email"
              style={{ marginBottom: '1em' }}
            />
            <Form.Input
              id="form-input-control-password"
              fluid
              icon="lock"
              iconPosition="left"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
              label="Password"
              style={{ marginBottom: '1em' }}
            />
            <Button style={{ backgroundColor: '#5cba57', color: 'white' }} fluid size="large" type="submit">
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default LoginPage;
