import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import instagram from "../../assets/instagram.svg";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className='flex flex-col lg:flex-row w-[100%] h-full items-center justify-evenly'>
        <div className='lg:flex w-[50%] h-full items-center'>
          <form
            className='flex flex-col justify-center items-center lg:w-[100%]'
            ref={form}
          >
            <input
              name='user_name'
              className='pl-3 my-6 w-[88%] h-10 rounded-full border-2 border-pink-300 shadow-md md:ml-6'
              placeholder='Name'
            />
            <input
              name='user_email'
              type='email'
              className='pl-3 my-6 w-[88%] h-10 rounded-full border-2 border-pink-300 shadow-md md:ml-6'
              placeholder='Email'
            />
            <textarea
              placeholder='Message'
              className='pl-3 my-6 w-[88%] pb-24 py-3 rounded-lg border-2 border-pink-300 shadow-md md:ml-6'
              name='message'
            />
            <input
              className='w-20 h-8 my-3 border-2 border-pink-300 bg-pink-100 text-rose-500 rounded-full sm2:ml-[70%] md:ml-[74%] lg:ml-[76%]'
              type='button'
              value='Send'
              onClick={sendEmail}
            />
          </form>
        </div>
        <div className='w-[2%]'>
          <p>Or</p>
        </div>
        <div className='sm:h-60 lg:w-[50%] h-96 flex flex-col justify-center items-center'>
          <h2 className='text-lg'>Connect with me</h2>
          <a
            href='https://www.instagram.com/lovebylaysha/'
            target='_blank'
            rel='noreferrer'
          >
            <img className='w-28' src={instagram} alt='instagram' />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
