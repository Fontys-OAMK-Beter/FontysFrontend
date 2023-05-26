import logo from './logo.svg';
import './App.scss';
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://groopyswoopyapiweb3.azurewebsites.net/api/User/1")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log(data); // Log the data whenever it changes
  }, [data]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <ul>
          <li>
            <a href="#">
              Groups
            </a>
          </li>
          <li>
            <a href="#">
              Events
            </a>
          </li>
          <li>
            <a href="#">
              Profile
            </a>
          </li>
        </ul>

      </header>
    </div>
  );
}

export default App;