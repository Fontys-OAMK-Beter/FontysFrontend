import logo from './logo.svg';
import './App.scss';
import React, { useState, useEffect, Grid } from "react";
import GroupThumb from './GroupThumb';

function App() {
  const [data, setData] = useState(null);
  const Groups = [{
    name: 'The betere group',
    members: [
      {
        name: 'Wouter',
        pictureUrl: 'https://varbai.com/wp-content/uploads/2019/02/thispersondoesnotexis.jpg'
      },
      {
        name: 'Brian',
        pictureUrl: 'https://www.959jamz.com/wp-content/uploads/2021/04/this-person-does-not-exist.jpeg'
      },
      {
        name: 'Ruben',
        pictureUrl: 'https://preview.redd.it/this-person-does-not-exist-v0-9l5x3d2g21591.jpg?width=640&crop=smart&auto=webp&s=4f2cf32ea788e3ecf10354c2bf2709c1f8ffef4e'
      },
      {
        name: 'Tom',
        pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Mark_Rutte_2015_%281%29_%28cropped%29.jpg/800px-Mark_Rutte_2015_%281%29_%28cropped%29.jpg'
      },
      {
        name: 'Mike',
        pictureUrl: 'https://www.bigw.com.au/medias/sys_master/images/images/h63/h0e/12097760198686.jpg'
      }
    ],
    upcomingEvents: [
      {
        title: 'Spy Kids',
        date: '19/08/2023'
      },
      {
        title: 'Married... with Children',
        date: '07/20/2023'
      }
    ]
  }];
  
  
  //, 'Spy Kids', 'Married... with Children', 'Young Sheldon']

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

      <main>
        {Groups.map(Group =>
          <GroupThumb group={Group}></GroupThumb>
        )}
      </main>
    </div>
  );
}

export default App;