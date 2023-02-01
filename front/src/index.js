import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import Lists from './Pages/Lists';
import MTC from './Pages/MTC';
import Bbw from './Pages/Bootstrap-Bootcamp-Website/Bbw';
import Fetch from './Pages/Fetch';
import Login from './Pages/Registration/Login';
import Axios from './Pages/Axios';
import Register from './Pages/Registration/Register';
import Nav from './Pages/Bootstrap-Bootcamp-Website/components/Nav';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
      <Bbw></Bbw>
      <Link to="/"></Link>
      </>
    )
  },
  {
    path: "/login",
    element: (
      <>
      <Login></Login>
      <Link to="/login"></Link>
      </>
    )
  },
  {
    path: "/register",
    element: (
      <>
      <Register></Register>
      <Link to="/register"></Link>
      </>
    )
  },
  {
    path: "/axios",
    element: (
      <>
      <Axios></Axios>
      <Link to="/axios"></Link>
      </>
    )
  },
  {
    path: "/fetch",
    element: (
      <>
      <Fetch></Fetch>
      <Link to="/fetch"></Link>
      </>
    )
  },
  {
    path: "/clicker",
    element: (
      <>
      <Home></Home>
      <Link to="/clicker"></Link>
      </>
    )
  },
  {
    path: "/lists",
    element: (
      <>
      <Lists></Lists>
      <Link to="/lists"></Link>
      </>
    )
  },
  {
    path: "/mtc",
    element: (
      <>
      <MTC></MTC>
      <Link to="/mtc"></Link>
      </>
    )
  }
])

const menuItems = [
  { id: "1", text: "Home", href: "/" },
  { id: "2", text: "Login", href: "/login" },
  { id: "8", text: "Register", href: "/register" },
  { id: "3", text: "Axios", href: "/axios" },
  { id: "4", text: "Fetch", href: "/fetch" },
  { id: "5", text: "Clicker", href: "/clicker" },
  { id: "6", text: "Lists", href: "/lists" },
  { id: "7", text: "MTC", href: "/mtc" },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav items={menuItems}/>
    <RouterProvider router={router}> </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
