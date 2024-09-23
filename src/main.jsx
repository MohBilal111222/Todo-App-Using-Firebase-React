import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Todos from './Screens/Todos'
import Layout from './Layout'
import Login from './Screens/Login'
import Register from './Screens/Register'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
      {
        path : '/Todos',
        element : <Todos/>
      },
      {
        path : '/Login',
        element : <Login/>
      },
      {
        path : '/Register',
        element : <Register/>
      },
      {
        path : '*',
        element : <h1>Page Not Found</h1> 
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <Layout/>
  </RouterProvider>

)