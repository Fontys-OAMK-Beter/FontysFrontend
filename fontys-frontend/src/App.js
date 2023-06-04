import {BrowserRouter, Route, Routes, NavLink, Outlet} from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import React, { useState, useEffect, Grid } from "react";
import Groups from './pages/Groups';
import GroupDetails from './pages/GroupDetails';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>

          <ul>
            <li>
              <NavLink to="/groups">
                Groups
              </NavLink>
            </li>
            <li>
              <NavLink to="/events">
                Events
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile">
                Profile
              </NavLink>
            </li>
          </ul>

        </header>

        <main>
          

          <Outlet />
        </main>
      </div>
  );
}

export default App;