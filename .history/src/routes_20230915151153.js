
import Inicio from "./pages/Inicio/index.js"
import { BrowserRouter, Route, Routes, createBrowserRouter } from "react-router-dom"

function AppRoutes(){
  return(createBrowserRouter([
    {
      path: "/",
      element: <Inicio />,
    },
  ]))
}

export default AppRoutes