import Login from '../pages/login';
import Logon from '../pages/logon';
import Panel from '../pages/panel';
import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Panel />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Logon" element={<Logon />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};
