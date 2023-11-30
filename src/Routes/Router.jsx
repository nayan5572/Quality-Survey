import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AllUsers from "../Pages/AllUsers/AllUsers";
import AdminHome from "../Layout/Dashboard/AdminHome/AdminHome";
import UserHome from "../Layout/Dashboard/UserHome/UserHome";





export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      },

      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          // normal user
          {
            path: 'userHome',
            element: <UserHome></UserHome>
          },






          // admin only routes
          {
            path: 'users',
            element: <AllUsers></AllUsers>
          },
          {
            path: 'adminHome',
            element: <AdminHome></AdminHome>
          }
        ]
      }
    ]
  }
])