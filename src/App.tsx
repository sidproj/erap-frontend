import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profession from "./pages/Professions";
import Professional from "./pages/Professional";
import Service from "./pages/Services";
import Schedule from "./pages/Schedule";
import Appointment from "./pages/Appointment";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/professions" element={<Profession />} />
        <Route path="/professionals" element={<Professional />} />
        <Route path="/services" element={<Service />} />
        <Route path="/schedules" element={<Schedule />} />
        <Route path="/appointments" element={<Appointment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Layout>
  );
}

export default App;
