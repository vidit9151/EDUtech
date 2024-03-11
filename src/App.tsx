import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  About_page,
  Contact_page,
  Home_page,
  Industrial_training_page,
  Solution_provider_page,
} from "./pages";
import Error404 from "./pages/Error404";
import Navbar from "./components/Navbar/Navbar";
import { RecoilRoot } from "recoil";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home_page />} />
          <Route
            path="/industrial-training"
            element={<Industrial_training_page />}
          />
          <Route
            path="/solution-provider"
            element={<Solution_provider_page />}
          />
          <Route path="/about-us" element={<About_page />} />
          <Route path="/contact-us" element={<Contact_page />} />

          <Route path="/*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
