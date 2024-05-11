import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/index";

type Props = {};

const Router = (props: Props) => {
  return (
    <div className="body">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Router;
