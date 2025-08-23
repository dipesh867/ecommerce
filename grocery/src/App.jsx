import React from "react";
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Fruits from "./components/Fruits/Fruits";
import Dairy from "./components/Dairy/Dairy";
import Meat from "./components/Meat/Meat";
import Allproducts from "./components/Allproducts/Allproducts";
import Layout from "./components/Layout/Layout";


const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/fruits',
          element: <Fruits />
        },
        {
          path: '/dairy',
          element: <Dairy />
        },
        {
          path: '/meat',
          element: <Meat />
        },
        {
          path: '/products/all',
          element: <Allproducts />
        }
      ]
    },

  ])

  return(
  <>
  <RouterProvider router={router} />
  </> 
  )
}

export default App;

