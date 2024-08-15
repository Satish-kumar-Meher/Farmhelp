import {BrowserRouter, Routes, Route } from "react-router-dom"
import { Register } from "./pages/Register"
import { Home } from "./pages/Home"
import { Navbar } from "./components/Navbar"
import { Login } from "./pages/login"
import { Logout } from "./pages/Logout"

export const App = () => {
    return (
     <>
     
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/logout" element={<Logout/>} />
     </Routes>
     </BrowserRouter>
     </>
    )
  }
  
  export default App