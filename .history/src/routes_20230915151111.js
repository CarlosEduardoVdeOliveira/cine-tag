
import Inicio from "./pages/Inicio/index.js"
import { BrowserRouter, Route, Routes, createBrowserRouter } from "react-router-dom"

function AppRoutes(){
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Inicio />,
    },
  ]);
  return(
    router
  )
}

export default AppRoutes