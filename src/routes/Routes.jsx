import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AddInfo from "../pages/AddInfo/AddInfo";
import CrimeDetails from "../pages/CrimeDetails/CrimeDetails";
import CriminalList from "../pages/CriminalList/CriminalList";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>, 
      children: [
        {
            path:'/',
            element: <Home></Home>,
        },
        {
            path:'/criminalList',
            element: <PrivateRoute><CriminalList></CriminalList></PrivateRoute>
        },
        {
            path:'/addInfo',
            element: <AddInfo></AddInfo>
        },
        {
            path:'/crimeDetails/:id',
            element: <CrimeDetails></CrimeDetails>,
            loader: () => fetch('http://localhost:3000/informations')
        },        
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element: <Register></Register>
        },

      ]
    },
  ]);
  export default router;