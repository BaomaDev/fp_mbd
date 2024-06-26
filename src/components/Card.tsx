import PropTypes from 'prop-types';
import NextImage from '@/components/NextImage';

export default function Card({ title }: any) {
  return (
    <div className='w-[631px] h-[150px] my-3 rounded-lg bg-blue-2'>
      <div className='flex flex-col gap-2 px-4 pb-11 pt-6 font-poppins items-center justify-center text-blue-3'>
        <h6 className='text-2xl font-semibold'>{title}</h6>
        <button className='w-full rounded-lg  bg-blue-4 py-1.5 mt-5 text-white'>
          Pesan
        </button>
      </div>
    </div>
  );
} 