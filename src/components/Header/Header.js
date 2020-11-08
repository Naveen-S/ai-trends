import React from 'react';
import Logo from '../../images/iconfinder_consult_202312.png';

const Header = () => {
  return (
    <div className='bg-indigo-700 p-4  flex justify-between items-center'>
      <div className='flex items-center'>
        <img src={Logo} alt='Logo' width='40' className='mr-2' />
        <a
          href='home'
          className='inline-block p-2 text-indigo-200 hover:text-indigo-100 transition ease-in duration-150'>
          Home
        </a>
        <a
          href='suits'
          className='inline-block p-2 text-indigo-200 hover:text-indigo-100 transition ease-in duration-150'>
          Suits
        </a>
      </div>
      <div className=''>
        <a
          href='login'
          className='inline-block p-2 text-indigo-200 hover:text-indigo-100 transition ease-in duration-150'>
          Login
        </a>
        <a
          href='signup'
          className='inline-block p-2 text-indigo-200 hover:text-indigo-100 transition ease-in duration-150'>
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Header;
