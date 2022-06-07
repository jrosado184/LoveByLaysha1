import React from 'react';
import laysha from '../../assets/laysha.jpg';
import user from '../../assets/user.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loggedOut } from '../../redux/actions/login_actions';
import { LogoutIcon, LoginIcon } from '@heroicons/react/outline';

const Header = ({ dispatch }) => {
  const handleLogOut = () => {
    dispatch(loggedOut());
  };

  return (
    <>
      <div className='bg-pink-200 w-full h-48 shadow-md'>
        <div className='w-full py-2'>
          {localStorage.getItem('token') ? (
            <div className='flex'>
              <img
                className='user-image ml-6 my-2 w-32 h-32 rounded-full border-4 border-white'
                src={user}
                alt=''
              />
            </div>
          ) : (
            <img
              className='ml-6 w-32 h-32 rounded-full border-4 border-white hover:opacity-75 md:w-44 desktop:h-40 desktop:w-40'
              src={laysha}
              alt=''
            />
          )}
          <div className='pl-10 pb-6 text-2xl w-full'>
            <p className='font-light'>{localStorage.getItem('message')}</p>
          </div>
        </div>
      </div>
      <div
        className={
          localStorage.getItem('token')
            ? 'bg-pink-200 border-b border-pink-500 flex text-md w-full gap-1 items-end justify-end pr-[3.4%] py-2 sm:pr-0 md:pr-4'
            : 'bg-pink-200 border-b border-pink-500 flex text-md w-full gap-1 items-end justify-end xr:pr-[2.6%] py-2 md:pr-4'
        }
      >
        <nav className='hidden desktop:flex ml-2 text-1xl border-2 text-center bg-white rounded-full border-pink-300 pl-3 pr-3 h-[6%] items-center justify-center'>
          <Link to='nails'>Nailfies</Link>
        </nav>
        <nav
          className={
            !localStorage.getItem('token')
              ? 'hidden desktop:flex text-1xl border-2 rounded-full text-center bg-white border-pink-300 pl-3 pr-3 h-[6%] items-center justify-center'
              : 'hidden'
          }
        >
          <Link to='book'>Book</Link>
        </nav>
        <nav
          className={
            localStorage.getItem('token')
              ? 'hidden'
              : 'hidden desktop:flex h-[6%] text-1xl border-2 rounded-full text-center bg-white border-pink-300 pl-3 pr-3 w-20 h-[6%] items-center justify-center'
          }
        >
          <Link to='policies'>Policies</Link>
        </nav>
        <nav
          className={
            localStorage.getItem('token')
              ? 'hidden desktop:flex h-[6%] text-1xl border-2 rounded-full text-center bg-white border-pink-300 pl-3 pr-3 w-24 h-[6%] items-center justify-center flex'
              : 'hidden'
          }
        >
          <Link to='schedule'>Schedule</Link>
        </nav>
        <nav
          className={
            !localStorage.getItem('token')
              ? 'hidden desktop:flex h-[6%] text-1xl border-2 rounded-full text-center bg-white border-pink-300 pl-3 pr-3 w-20 h-[6%] items-center justify-center'
              : 'hidden'
          }
        >
          <Link to='contact'>Contact</Link>
        </nav>
        <nav
          className={
            localStorage.getItem('token')
              ? 'hidden desktop:flex h-[6%] text-1xl border-2 rounded-full text-center bg-white border-pink-300 w- h-[6%] pl-2 pr-2 items-center justify-center'
              : 'hidden'
          }
        >
          <Link to='appointments'>Appointments</Link>
        </nav>
        <nav className='w-6 mr-4 desktop:hidden'>
          {localStorage.getItem('token') ? (
            <Link onClick={handleLogOut} to='/'>
              <LogoutIcon strokeWidth='1.3' />
            </Link>
          ) : (
            <Link to='/login'>
              <LoginIcon strokeWidth='1.3' />
            </Link>
          )}
        </nav>
        <nav className='hidden desktop:block h-[6%] text-1xl border-2 rounded-full text-center bg-white border-pink-300 pl-3 pr-3 w-20 h-[6%] items-center justify-center flex'>
          {localStorage.getItem('token') ? (
            <Link onClick={handleLogOut} to='/'>
              Logout
            </Link>
          ) : (
            <Link to='/login'>Login</Link>
          )}
        </nav>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    login: {
      logout: state.login.logout,
    },
  };
};

export default connect(mapStateToProps)(Header);
