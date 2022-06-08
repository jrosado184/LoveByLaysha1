import React, { useState, useEffect } from 'react';
import plus from './../../assets/plus.svg';
import { Link } from 'react-router-dom';
import {
  HomeIcon,
  BookOpenIcon,
  BellIcon,
  CalendarIcon,
  MailIcon,
  CogIcon,
  ClipboardListIcon,
} from '@heroicons/react/outline';
import { connect } from 'react-redux';

const FooterNav = ({ setImage, onNailComp }) => {
  return (
    <div className='flex h-16 py-8  justify-evenly items-center bg-pink-200 w-full border-y border-pink-300 desktop:hidden'>
      <div className='w-9 h-full flex flex-col items-center justify-center pb-4 '>
        <Link to='/nails'>
          <HomeIcon className='w-7 h-fit' strokeWidth='.9' />
        </Link>
        <p className='text-xs'>Home</p>
      </div>
      <div
        className={
          !localStorage.getItem('token')
            ? 'w-9 h-full flex flex-col items-center justify-center pb-4'
            : 'hidden'
        }
      >
        <Link to='/book'>
          <BookOpenIcon className='w-7 h-fit' strokeWidth='.9' />
        </Link>
        <p className='text-xs'>Book</p>
      </div>
      {!localStorage.getItem('token') ? (
        <div className='w-9 h-full flex flex-col items-center justify-center pb-4 '>
          <Link to='/nails'>
            <ClipboardListIcon className='w-7 h-fit' strokeWidth='.9' />
          </Link>
          <p className='text-xs'>Policies</p>
        </div>
      ) : (
        <div className='w-9 h-full flex flex-col items-center justify-center pb-4 '>
          <Link to='/schedule'>
            <CalendarIcon className='w-7 h-fit' strokeWidth='.9' />
          </Link>
          <p className='text-xs'>Schedule</p>
        </div>
      )}
      {onNailComp && (
        <div className='w-11 h-11 mb-3  bg-pink-300 border border-white rounded-full'>
          <label
            className='cursor-pointer'
            onClick={(e) => setImage(e.target.files[0])}
          >
            <img src={plus} alt='' />
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type='file'
              className='custom-file-input'
            />
          </label>
        </div>
      )}
      {localStorage.getItem('token') && (
        <div className='w-9 h-full flex flex-col items-center justify-center pb-4'>
          <Link to='/appointments'>
            <BellIcon className='w-7 h-fit' strokeWidth='.9' />
          </Link>
          <p className='text-xs'>Appointments</p>
        </div>
      )}
      {!localStorage.getItem('token') && (
        <div className='w-9 h-full flex flex-col items-center justify-center pb-4 '>
          <Link to='/nails'>
            <MailIcon className='w-7 h-fit' strokeWidth='.9' />
          </Link>
          <p className='text-xs'>Contact</p>
        </div>
      )}
      {localStorage.getItem('token') && (
        <div className='w-9 h-full flex flex-col items-center justify-center pb-4'>
          <Link to='/settings'>
            <CogIcon strokeWidth='.9' className='w-7 h-fit' />
          </Link>
          <p className='text-xs'>Settings</p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    login: {
      logout: state.login.logout,
    },
  };
};

export default connect(mapStateToProps)(FooterNav);
