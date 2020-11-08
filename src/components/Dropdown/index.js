import React from 'react';
import DropDown from 'react-dropdown';
import 'react-dropdown/style.css';

export default ({ options, onSelectedChange, value, placeholder }) => {
  return (
    <DropDown
      className='w-40'
      options={options}
      value={value}
      onChange={onSelectedChange}
      placeholder={placeholder}
      controlClassName=' hover:bg-indigo-100 border-indigo-200 border-2'
      placeholderClassName='text-indigo-400 font-semibold'
    />
  );
};
