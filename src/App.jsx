import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import MyGigs from "./pages/myGigs/MyGigs";
import { createBrowserRouter, Outlet, RouterProvider ,useLocation} from "react-router-dom";
import Footer from "./components/footer/Footer";
import "./App.scss"

function App() {

  const Layout = () => {

    const location = useLocation();
    const noNavRoutes = ["/login", "/register"];
    return (
      <div className="app">
        {!noNavRoutes.includes(location.pathname) && <Navbar />}
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router =createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/gigs",
          element:<Gigs/>
        },
        {
          path:"/gigs/:id",
          element:<Gig/>,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path:"/orders",
          element:<Orders/>,
        },
        {
          path:"/mygigs",
          element:<MyGigs/>,
        },
        {
          path:"/add",
          element:<Add/>,
        },
        {
          path:"/messages",
          element:<Messages/>,
        },
        {
          path:"/message/:id",
          element:<Message/>,
        },
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
