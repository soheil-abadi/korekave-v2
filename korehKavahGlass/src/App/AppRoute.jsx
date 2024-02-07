import React, { Fragment, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import Dashboard from "../components/dashboard/Dashboard";
import Login from "../components/auth/Login";
import UsersList from "../components/userManagment/UsersList";

const AppRoutes = () => {
  return (
    <Fragment>
      <MainLayout>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/" element={<Login />} />
          <Route path="/userManagment" element={<UsersList />} />
        </Routes>
      </MainLayout>
    </Fragment>
  );
};

export default AppRoutes;
