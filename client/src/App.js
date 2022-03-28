import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Main/Header';
import Book from './components/Appointments/Book';
import Register from './components/Main/Register';
import Login from './components/Main/Login';
import AppointmentList from './components/Appointments/AppointmentList';
import Appointment from './components/Appointments/Appointment';
import Uploads from './components/Appointments/Uploads';
import Confirm from './components/Appointments/Confirm';
import Contact from './components/Main/Contact';
import Deleted from './components/Appointments/Deleted';
import PrivateRoute from './utils/PrivateRoute';
import Nails from './components/Nails/Nails';
import Completed from './components/Completed Appointments/Completed';
import CompletedAppointmentsList from './components/Completed Appointments/CompletedAppointmentsList';
import CompletedInformation from './components/Completed Appointments/CompletedInformation';
import CompletedUploads from './components/Completed Appointments/CompletedUploads';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Nails />} />
        <Route path='/nails' element={<Nails />} />
        <Route path='/book' element={<Book />} />
        <Route path='/confirm/:id' element={<Confirm />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/appointment/:id'
          element={
            <div className='sm:w-full flex flex-col desktop:flex-row'>
              <PrivateRoute>
                <Appointment />
                <Uploads />
              </PrivateRoute>
            </div>
          }
        />
        <Route
          path='/deleted'
          element={
            <PrivateRoute>
              <Deleted />
            </PrivateRoute>
          }
        />
        <Route
          path='/completed'
          element={
            <PrivateRoute>
              <Completed />
            </PrivateRoute>
          }
        />
        <Route
          path='/completedAppointments'
          element={
            <PrivateRoute>
              <CompletedAppointmentsList />
            </PrivateRoute>
          }
        />
        <Route
          path='/completed-information/:id'
          element={
            <div className='sm:w-full flex flex-col desktop:flex-row'>
              <PrivateRoute>
                <CompletedInformation />
                <CompletedUploads />
              </PrivateRoute>
            </div>
          }
        />
        <Route
          path='/appointments'
          element={
            <PrivateRoute>
              <AppointmentList />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
