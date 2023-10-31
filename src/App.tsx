import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import User from "./pages/user/User";
import Product from "./pages/product/Product";

import "./styles/global.scss";
import FirebaseConfig from "./services/firebase-init";
import { initializeApp } from "firebase/app";
import Registration from "./pages/registration/Registration";
import PasswordRecover from "./pages/passwordRecover/PasswordRecover";
import ProtectedRoute from "./components/privateRoute/PrivateRoute";


function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  initializeApp(FirebaseConfig);

  useEffect(() => {
      const auth = getAuth();
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          setIsUserLoggedIn(!!user);
      });

      return () => unsubscribe();
  }, []);

  // const RequireAuth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  //   return isUserLoggedIn ? children : <Navigate to="/login" replace />;
  // };

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

    const router = createBrowserRouter([
      {
          path: "/",
          element: (
              <ProtectedRoute>
                  <Layout />
              </ProtectedRoute>
          ),
            children: [
                {
                    path:"/",
                    element:<Home />,
                },
                {
                    path:"/users",
                    element:<Users />,
                },
                {
                    path:"/products",
                    element:<Products />,
                },
                {
                    path:"/users/:id",
                    element:<User />,
                },
                {
                    path:"/products/:id",
                    element:<Product />,
                },
            ],
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/registration",
            element: <Registration />,
        },
        {
            path: "/passwordrecover",
            element: <PasswordRecover />,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
