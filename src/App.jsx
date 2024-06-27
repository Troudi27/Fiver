import Navbar from "./components/navbar/Navbar"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from"./pages/home/Home"
import Footer from "./components/footer/Footer";

function App() {

  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
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
          element:<Home/>,
        }
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
