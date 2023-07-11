import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/pages/Login/index.jsx';
import Dashboard from './components/pages/Dashboard/index.jsx';
import Register from './components/pages/Register/index.jsx';
import ErrorPage from './components/pages/Error';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/register",
    element: <Register/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/",
    element: <Dashboard/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/login",
    element: <Login/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/register",
    element: <Register/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/register",
    element: <Register/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/account",
    element: <Register/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/book",
    element: <Register/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/author",
    element: <Register/>,
    errorElement: <ErrorPage/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
