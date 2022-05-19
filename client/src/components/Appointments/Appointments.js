import React from 'react';
import right from '../../assets/right.svg';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Months } from '../../Algos/Months';

const Appointments = (props) => {
  const nav = useNavigate();
  const { appointment, index } = props;

  const handleAppointment = () => {
    nav(`/appointment/${appointment.appointment_id}`);
  };
  console.log(appointment.appointment_time);
  return (
    <div
      key={index}
      className='w-full flex justify-center items-center flex-col my-1 gap-8'
    >
      <div className='w-full h-24 border-2 border-gray-300 rounded-md flex flex-col shadow-md'>
        <div className='w-full flex justify-between'>
          <div className='h-fit'>
            <h1 className='ml-4 py-1 font-semibold'>
              {appointment.client_name}
            </h1>
          </div>
          <p className='mr-6 py-1'>{`${Months(appointment.appointment_month)} ${
            appointment.appointment_day
          }, ${appointment.appointment_year}`}</p>
        </div>
        <div className='w-full pl-4 my-2 flex justify-between'>
          <p className='w-full'>{appointment.appointment_time}</p>
          <div
            onClick={handleAppointment}
            className='cursor-pointer w-full flex h-fit items-center justify-end my-6 ml-12 gap-2 mr-4'
          >
            <p className='flex cursor-pointer'>See Information</p>
            <img className='w-4' src={right} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    fetchAppointments: state.appointments.fetchAppointments,
    getAppointmentById: state.appointments.getAppointmentById,
  };
};

export default connect(mapStateToProps)(Appointments);
