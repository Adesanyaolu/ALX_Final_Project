// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Auth/registration";
import Login from "./Auth/login";
// import Navbar from "./Layout/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Recipe from "./pages/Recipe";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>       
          <Route index path ={"/"} element={<Home />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path="Recipe" element={<Recipe />} />
          <Route path={"/About"} element={<About />} />
          <Route path={"/Login"} element={<Login />} />
          <Route path={"/Registration"} element={<Registration />} />
      </Routes>
    </BrowserRouter>
  ); 
}
