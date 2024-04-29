import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import ContactUs from "./views/ContactUs";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact/:name" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
