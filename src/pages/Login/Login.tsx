import React, { useState, useRef } from "react";
import "./styles/login.css";
import { Col, Form, Image, Row } from "react-bootstrap";
import { MyButton, MyInput } from "../../components/index";

import image from "../../assets/images/logo.png";
import { LoginProps } from "./types";
import { useNavigate } from "react-router-dom";

const Login = (props: LoginProps) => {
  const {} = props;

  const navigate = useNavigate();

  const dummyData = {
    email: "admin@example.com",
    password: "admin123",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = () => {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (email === "" || password === "") {
      return alert("Please enter email and password");
    }

    if (!re.test(email)) {
      return alert("Invalid email format");
    }

    if (email !== dummyData.email || password !== dummyData.password) {
      return alert("Invalid email or password");
    }

    console.log("Login Successful");
    navigate("/Home");
  };

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
            <Form>
              <MyInput
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />

              <MyInput
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
            </Form>
            <MyButton
              title="Login"
              onPress={() => {
                handleOnSubmit();
              }}
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
