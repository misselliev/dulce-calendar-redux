import React from 'react';
import {
  Button, Form, Grid, Header, Segment, Icon,
} from 'semantic-ui-react';

const LoginPage = () => {
  (
    <Grid textAlign="center" style={{ height: '100vh', marginTop: '2em' }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" style={{ color: '#59499e' }} textAlign="center">
          <Icon name="home" />
          Log-in to your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Field
              id="form-input-control-email"
              fluid
              icon="user"
              iconPosition="left"
              type="text"
              name="email"
              placeholder="Email"
              label="Email"
              style={{ marginBottom: '1em' }}
            />
            <Form.Field
              id="form-input-control-password"
              fluid
              icon="lock"
              iconPosition="left"
              type="password"
              name="password"
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
