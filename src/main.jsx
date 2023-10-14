import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Menus from './components/menus.jsx'
import Reportes from './components/Reportes.jsx'
import { BrowserRouter,RouterProvider,createBrowserRouter } from 'react-router-dom'
import Login from './components/Login.jsx'


const router = createBrowserRouter([
 {
   path: "/",
   element:<Login/>
 }, 

{
  path: "menu",
  element:<Menus/>
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
   
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>
);



