import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, Login } from "../pages/index";

type Props = {};

const Router = (props: Props) => {
  return (
    <div className="root-body">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Router;
