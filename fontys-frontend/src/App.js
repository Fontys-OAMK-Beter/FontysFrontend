import {BrowserRouter, Route, Routes, NavLink, Outlet} from 'react-router-dom';
import myLogo from './Logo.png';
import './styles/App.scss';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import CreateGroupPage from './pages/CreateParty';
import MovieList from './components/Search';
import Groups from './pages/Groups';
import GroupDetails from './pages/GroupDetails';
function App() {
  return (
      <div className="App">
        <header className="App-header">
          <div>
            <a href='/'>
              <img src={myLogo} className="App-logo" alt="logo"/>
            </a>

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
              <li>
                <NavLink to="/movies">
                  Movies
                </NavLink>
              </li>
            </ul>
          </div>
        </header>

        <main>
          <Outlet />
        </main>
      </div>
  );
}

export default App;