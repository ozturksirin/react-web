import React from "react";
import "./styles/login.css";
import { Col, Image, Row } from "react-bootstrap";
import { MyButton, MyInput } from "../../components/index";

import image from "../../assets/images/logo.png";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="body">
      <div className="inner-body d-flex justify-content-center align-items-center">
        <Row>
          <Col xs={12} lg={6} md={6}>
            <div className="d-flex align-items-center justify-content-center h-100">
              <Image
                src={image}
                className="mx-auto d-block"
                alt="logo"
                width={300}
              />
            </div>
          </Col>
          <Col xs={12} lg={6} md={6}>
            <h1 className="title">Login</h1>
            <MyInput type="text" placeholder="Email" error="x" />

            <MyInput type="text" placeholder="Password" />
            <MyButton
              title="Login"
              onPress={() => {
                console.log("Button Pressed");
              }}
              showLoading={true}
            />
            <p
              onClick={() => {
                console.log("Forgot Password");
              }}
              className="d-flex justify-content-end w-100 mt-4 cursor-pointer">
              Forgot Password ?
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
