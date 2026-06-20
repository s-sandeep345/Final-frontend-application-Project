import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import ThemeProvider
from "./context/ThemeContext";

import Navbar
from "./Components/Navbar";

import Home
from "./Pages/Home";

import About
from "./Pages/About";

import Cars
from "./Pages/Cars";

import Contact
from "./Pages/Contact";

import Profile
from "./Pages/Profile";

import Services
from "./Pages/Services";

import Service1
from "./Pages/Service1";

import Service2
from "./Pages/Service2";

import Service3
from "./Pages/Service3";

import PaginationCars
from "./Pages/PaginationCars";

import APICars
from "./Pages/APIcars";

import AdminPanel
from "./Components/AdminPanel";

import CarDetails
from "./Components/CarDetails";

function App() {

  return (

    <ThemeProvider>

      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/cars"
            element={<Cars />}
          />

          <Route
            path="/api-cars"
            element={<APICars />}
          />

          <Route
            path="/car/:id"
            element={<CarDetails />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="/pagination"
            element={<PaginationCars />}
          />

          <Route
            path="/admin"
            element={<AdminPanel />}
          />

          <Route
            path="/services"
            element={<Services />}
          >

            <Route
              path="service1"
              element={<Service1 />}
            />

            <Route
              path="service2"
              element={<Service2 />}
            />

            <Route
              path="service3"
              element={<Service3 />}
            />

          </Route>

        </Routes>

      </BrowserRouter>

    </ThemeProvider>

  );
}

export default App;
