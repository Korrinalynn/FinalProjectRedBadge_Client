import React from "react";
import { Container, Row, Col } from "reactstrap";
import Login from "./Login";
import Signup from "./Signup";
import './auth.css';

const Auth = (props) => {
  return (
    <>
      <br />
      <Container className="auth-container">
        <Row>
            <Col md="6">
                <Signup setToken={props.setToken}/>
            </Col>
            <Col md="6" className="login-col">
                <Login setToken={props.setToken}/>
            </Col>
        </Row>
    </Container>
    </>
  );
};

export default Auth;
