import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login-pages/login-pages";
import HomePage from "./pages/home-pages/home-pages";

import ProfileCreatePage from "./pages/profile-create-page/profile-create-page";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LoginPage />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <HomePage />
            </>
          }
        />
        <Route
          path="/otp-validation"
          element={
            <>
              <ProfileCreatePage />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
