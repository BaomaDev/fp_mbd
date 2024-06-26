'use client';
import { LemonMilk, poppins } from '@/lib/font';
import Navbar from '@/layouts/Navbar';
import Card from '@/components/Card';
import Link from 'next/link';
import NextImage from '@/components/NextImage';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-blue-1">
      <Navbar />

      <div className='flex flex-row mx-4'>

      <div className='flex flex-col mx-12'>
        <h2 className='font-lemonMilk text-[30px] font-medium text-blue-3 my-5'> GAMING PRODUCTS </h2>
      <Card/>
      <Card/>
      <Card/>
      <Card/>

      <div className='decoration-blue-3 decoration-2 underline underline-offset-1'>
                <Link href='/about-us'>
                  <p className='font-poppins text-[18px] font-medium text-blue-3 '>
                   see more GAMING PRODUCTS
                  </p>
                </Link>
              </div>
      </div>

      <div className='flex flex-col'>
      <h2 className='font-lemonMilk text-[30px] font-medium text-blue-3 my-5'> HOUSE NEEDS </h2>
      <Card/>
      <Card/>
      <Card/>
      <Card/>

      <div className='decoration-blue-3 decoration-2 underline underline-offset-1'>
                <Link href='/about-us'>
                  <p className='font-poppins text-[18px] font-medium text-blue-3 '>
                   see more HOUSE NEEDS
                  </p>
                </Link>
              </div>
      

      </div>


      </div>

    </main>
  );
}
