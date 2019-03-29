import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'

class App extends Component {

  state = {
    name: "",
    email: "",
    pass: "123456789",
  }

  // state={
  //   email: "",
  // pass:"",
  // }

  componentWillMount() {
    document.body.classList.add('bg-dark');
  }

  handleClick = (e) => {
    // console.log(e);
    this.setState({
      name: e.target.value
    })
    // console.log(this.state.name);
  }

  handleEmail = (e) => {
    // console.log(e);
    this.setState({
      email: e.target.value
    })
    // console.log(this.state.name);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.email)
  }

  render() {
    return (
      <Container style={{marginTop:'120px'}}>
        <Row>
          <Col md={{ span: 4, offset: 4 }} className="mx-auto">
            <Card>
              <Card.Header>Login <span className="badge badge-primary float-right"> theme : </span></Card.Header>
              <Card.Body>
                <Form method="get" onSubmit={  this.handleSubmit }>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="email@you.com" onChange={this.handleEmail} defaultValue={this.state.email}/>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="********" defaultValue={this.state.pass} />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your name" onChange={this.handleClick} defaultValue={this.state.name} />
                  </Form.Group>

                  <Form.Group>
                    <Button type="submit" className="btn btn-primary btn-block"> Login</Button>
                  </Form.Group>

                  <Form.Group className=" text-center">
                    <p className="text-muted" onClick={ this.handleClick }>Reset</p>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default App;
