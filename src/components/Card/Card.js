import React from 'react';
import { formatAmountINR } from '../../utils/utils_formatter';

const Card = ({ image, name, price }) => {
  return (
    <div className='flex flex-col md:w-1/4 lg:w-1/4 justify-around items-center rounded-lg p-3 border-2 border-indigo-200 m-3'>
      <img src={image} alt='Suit' />
      <div className='flex flex-col justify-center w-full text-center'>
        <span className='inline-block text-indigo-500 font-bold text-lg'>
          {name}
        </span>
        <span className='inline-block text-indigo-500 font-bold text-lg'>
          {formatAmountINR(price)}
        </span>
      </div>
    </div>
  );
};

export default Card;
