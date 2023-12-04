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
import ErrorPage from "../components/ErrorPage/ErrorPage";
import SurveyCreation from "../Layout/SurveyCreation/SurveyCreation";
import AdminRouter from './AdminRouter';
import FeaturedSurveysDetails from "../Pages/Home/Home/LatestSurvey/FeaturedSurveysDetails/FeaturedSurveysDetails";
import PrivateRoute from "./PrivateRoute";
import SurveyList from "../Layout/Dashboard/SurveyList/SurveyList";





export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: 'featuredSurvey/:id',
        element: <FeaturedSurveysDetails></FeaturedSurveysDetails>,
        loader: ({params})=> fetch(`https://assignment-12-server-one-tan.vercel.app/featuredSurvey/${params.id}`)
      }
    ]
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
      {
        path: 'surveyList',
        element: <SurveyList></SurveyList>,
        loader: ()=> fetch (`https://assignment-12-server-one-tan.vercel.app/featuredSurvey`)
      },



      // admin only routes
      {
        path: 'usersList',
        element: <AdminRouter><AllUsers></AllUsers></AdminRouter>
      },
      {
        path: 'adminHome',
        element: <AdminRouter><AdminHome></AdminHome></AdminRouter>
      },
      {
        path: 'createSurvey',
        element: <AdminRouter><SurveyCreation></SurveyCreation></AdminRouter>
      }
    ]
  }
])