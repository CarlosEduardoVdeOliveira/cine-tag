import Favoritos from "./pages/Favoritos";
import Inicio from "./pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes(){
  
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio />}></Route>
      <Route path="/favoritos" element={<Favoritos />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes