import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Main/Header";
import Nails from "./components/Nails/Nails";
import Book from "./components/Appointments/Book";
import Register from "./components/Main/Register";
import Login from "./components/Main/Login";
import AppointmentList from "./components/Appointments/AppointmentList";
import Appointment from "./components/Appointments/Appointment";
import Confirm from "./components/Appointments/Confirm";
import Contact from "./components/Main/Contact";
import PrivateRoute from "./utils/PrivateRoute";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/nails" element={<Nails />} />
        <Route path="/book" element={<Book />} />
        <Route path="/confirm/:id" element={<Confirm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointment/:id" element={<Appointment />} />
        <Route
          path="/appointments"
          element={
            <PrivateRoute>
              <AppointmentList />
            </PrivateRoute>
          }
        />
        {/* <Route path="/appointment/:id" element={<Appointment />} /> */}
      </Routes>
    </>
  );
};

export default App;
