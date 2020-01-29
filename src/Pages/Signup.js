import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button, Form, Grid, Header, Segment, Icon,
} from 'semantic-ui-react';
import userActions from '../Redux/userActions';

const SignupPage = (props) => {
  const dispatch = useDispatch();

  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleChange = e => setSignupForm({ ...signupForm, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { history } = props;
    dispatch(userActions.newUser(signupForm));
    history.push('/');
  };

  const { name, email, password, password_confirmation } = signupForm;

  return (
  <Grid textAlign="center" style={{ height: '100vh', marginTop: '2em' }}>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" style={{ color: '#59499e' }} textAlign="center">
        <Icon name="user" />
        Create your account
      </Header>
      <Form size="large" onSubmit={handleSubmit}>
        <Segment stacked>
          <Form.Input
            id="form-input-control-name"
            fluid
            icon="user"
            iconPosition="left"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Name"
            label="Name"
            style={{ marginBottom: '1em' }}
          />
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
          <Form.Input
            id="form-input-control-password-confirmation"
            fluid
            icon="lock"
            iconPosition="left"
            type="password"
            value={password_confirmation}
            onChange={handleChange}
            name="password_confirmation"
            placeholder="Password confirmation"
            label="Password confirmation"
            style={{ marginBottom: '1em' }}
          />
          <Button style={{ backgroundColor: '#5cba57', color: 'white' }} fluid size="large" type="submit">
            Signup
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
);
};

export default SignupPage;
