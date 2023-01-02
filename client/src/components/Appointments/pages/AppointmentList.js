import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { getAppointments } from "../../../redux/actions/appointment-actions";
import Appointments from "./Appointments";
import Search from "../Search";
import { sortDates } from "../../../Algos/Sorting";
import AppointmentsSkeleton from "./../skeletons/AppointmentsListSkeleton";
import Loading from "./Loading";

const AppointmentList = ({ dispatch, fetchAppointments }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getAppointments());
    sortDates();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className='h-[90vh] pb-6 desktop:pb-[47.2%]'>
      <Search />
      <div className='flex flex-col items-center my-2'>
        {loading ? (
          <AppointmentsSkeleton card={fetchAppointments.length} /> && (
            <Loading />
          )
        ) : fetchAppointments.length ? (
          fetchAppointments
            .sort((a, b) => {
              const dateOneToCompare = `${a.appointment_month}/${a.appointment_day}/${a.appointment_year}`;
              const dateTwoToCompare = `${b.appointment_month}/${b.appointment_day}/${b.appointment_year}`;
              const newDateToCompareOne = new Date(dateOneToCompare);
              const newDateToCompareTwo = new Date(dateTwoToCompare);
              return newDateToCompareOne - newDateToCompareTwo;
            })
            .map((appointment, index) => (
              <Appointments key={index} appointment={appointment} />
            ))
        ) : (
          <div className='w-full h-96 flex justify-center items-center my-24 text-pink-900 dark:text-neutral-100'>
            No Appointments Scheduled
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fetchAppointments: state.appointments.fetchAppointments,
  };
};

export default connect(mapStateToProps)(AppointmentList);
