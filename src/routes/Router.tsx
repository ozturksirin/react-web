import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AssetsPool, Home, Login, Validation } from "../pages/index";

type Props = {};

const Router = (props: Props) => {
  return (
    <div className="root-body">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Home" element={<Home />} />
        <Route path="Validation" element={<Validation />} />
        <Route path="AssetsPool" element={<AssetsPool />} />
      </Routes>
    </div>
  );
};

export default Router;
