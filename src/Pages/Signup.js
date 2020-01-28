import React from 'react';
import { Button, Form, Grid, Header, Segment, Icon } from 'semantic-ui-react';

const SignupPage = () => {
  (
    <Grid textAlign="center" style={{ height: '100vh', marginTop: '2em' }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" style={{ color: '#59499e' }} textAlign='center'>
          <Icon name="user" />
          Create your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <label htmlFor="name">
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                style={{ marginBottom: '1em' }}

              />
            </label>
            <label htmlFor="email">
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                id="email"
                type="text"
                name="email"
                placeholder="Email"
                style={{ marginBottom: '1em' }}

              />
            </label>
            <label htmlFor="password">
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                type="password"
                name="password"
                placeholder="Password"
                style={{ marginBottom: '1em' }}
              />
            </label>
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
