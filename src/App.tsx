import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import "./styles/global.scss";
import Menage from "./pages/menage/Menage";
import { FilterProvider }  from "./components/filter/FilterContent";
import MoyenneAge from "./pages/moyenneage/Moyenneage";
import CategoriesSocio from "./pages/categoriesocio/Categoriesocio";
import Transports from "./pages/transports/Transports";
import Services from "./pages/services/Services";
import Ecoles from "./pages/ecoles/Ecoles";
import Commerces from "./pages/commerces/Commerces";
import Foncier from "./pages/foncier/Foncier";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Registration from "./pages/registration/Registration";
import ProtectedRoute from "./components/privateRoute/PrivateRoute";


function App() {

  const Layout = () => {
    return (
      <FilterProvider>
        <div className="main">
          <Navbar/>
          <div className="container">
            <div className="menuContainer">
              <Menu/>
            </div>
            <div className="contentContainer">
              <Outlet />
            </div>
          </div>
          <Footer/>
        </div>
      </FilterProvider>
    )
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element:(
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children:[
        {
          path:"/",
          element:<Home />,
        },
        {
          path:"/menage",
          element:<Menage />,
        },
        {
          path:"/moyenneage",
          element:<MoyenneAge />,
        },
        {
          path:"/categoriessocio",
          element:<CategoriesSocio />,
        },
        {
          path:"/transports",
          element:<Transports />,
        },
        {
          path:"/services",
          element:<Services />,
        },
        {
          path:"/ecoles",
          element:<Ecoles />,
        },
        {
          path:"/commerces",
          element:<Commerces />,
        },
        {
          path:"/foncier",
          element:<Foncier />,
        },
        {
          path:"/blog",
          element:<Blog />,
        },
        {
          path:"/contact",
          element:<Contact />,
        },
      ]
    },
    {
      path:"/login",
      element:<Login />,
    },
    {
      path:"/registration",
      element:<Registration />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
