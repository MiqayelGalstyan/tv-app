import React from "react";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Router />
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
