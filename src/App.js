import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { Navbar } from "./components/Navbar";
import Productlist from "./components/Productlist";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="productlist" element={<Productlist />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
