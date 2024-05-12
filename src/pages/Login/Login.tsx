import React, { useState } from "react";
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

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const handleOnSubmit = () => {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    setEmailError(email === "" ? "Email is required" : "");
    setPasswordError(password === "" ? "Password is required" : "");

    if (email === "" || password === "") {
      return;
    }

    if (!re.test(email)) {
      setEmailError("Invalid email format");
      return;
    }

    if (email !== dummyData.email || password !== dummyData.password) {
      setPasswordError("Invalid email or password");
      return;
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
                error={emailError === "" ? "" : emailError}
              />

              <MyInput
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                error={passwordError === "" ? "" : passwordError}
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
