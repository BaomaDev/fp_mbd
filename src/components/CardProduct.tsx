import PropTypes from 'prop-types';
import NextImage from '@/components/NextImage';
import Link from 'next/link';

export default function Card({ title, price }: any) {

  return (
    <div className='w-[631px] h-[90px] my-3 rounded-lg bg-blue-2'>
      <div className='flex flex-col gap-2 px-4 pt-3 font-poppins items-center justify-center text-blue-3'>
        <h6 className='text-2xl font-semibold'>{title}</h6>
        <h6 className='text-2xl font-semibold'>{price}</h6>
      </div>
    </div>
  );
} 