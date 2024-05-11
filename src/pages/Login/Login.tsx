import React from "react";
import "./styles/login.css";
import { Col, Row } from "react-bootstrap";
import { MyButton } from "../../components/index";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="body">
      <div className="inner-body">
        <Row>
          <Col xs={12} lg={6} md={6}>
            <div className="left">
              <h1>LOGO</h1>
            </div>
          </Col>
          <Col xs={12} lg={6} md={6}>
            <div className="right">
              <h1>RİGHT</h1>
              <h1>RİGHT</h1>
              <MyButton
                title="Login"
                onPress={() => {
                  console.log("Button Pressed");
                }}
                showLoading={true}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
