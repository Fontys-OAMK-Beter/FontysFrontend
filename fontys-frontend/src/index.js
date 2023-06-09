import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// PAGES
import Groups from './pages/Groups';
import GroupDetails from './pages/GroupDetails';
import MovieList from './components/Search';
import CreateGroupPage from './pages/CreateParty';
import CreateEvent from './pages/CreateEvent';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/groups",
        element: <Groups />,
      },
      {
        path: "/groups/:groupId",
        element: <GroupDetails />,
      },
      {
        path: "/groups/create",
        element: <CreateGroupPage />,
      },
      {
        path: "/movies",
        element: <MovieList />,
      },
      {
        path: "/create-event",
        element: <CreateEvent />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
