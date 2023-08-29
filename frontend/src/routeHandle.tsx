import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home.tsx"
import Navbar from "./components/Navbar.tsx"
import Login from "./components/Login.tsx"
import Signup from "./components/Signup.tsx"
import MainPage from "./components/MainPage.tsx"

function routeHandle() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/page" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default routeHandle
