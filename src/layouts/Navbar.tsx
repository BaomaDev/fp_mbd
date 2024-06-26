'use client';

import React from 'react';
import Link from 'next/link';
import clsxm from '@/lib/clsxm';
import { useState } from 'react';
import NextImage from '@/components/NextImage';
import { CgMenu, CgClose, CgProfile } from 'react-icons/cg';
import { getToken } from '@/lib/cookies';

export function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleShowNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const cookie = getToken();

  return (
    <>
      <header className='fixed top-0 z-[100] w-full bg-blue-1 text-blue-3'>
        <div className='layout relative flex h-16 flex-row items-center justify-between px-10 text-center md:h-20 lg:px-14'>

        <div className='align-center flex flex-row items-center justify-center gap-3'>
                <h1 className='hidden justify-center font-lemonMilk text-[30px] font-medium text-blue-3 lg:block'>
                  BACUEMI
                </h1>
              </div>

          <nav className='hidden lg:block'>
            <ul className='flex flex-row items-center justify-between gap-3 text-base xl:gap-6 '>
              <li className='decoration-blue-3 decoration-2 hover:underline'>
                <Link href='/#about-us'>
                  <h1 className='font-poppins text-[18px] font-medium text-blue-3 '>
                    About Us
                  </h1>
                </Link>
              </li>

              <li className='decoration-blue-3 decoration-2 hover:underline'>
                <Link href='/#todaysoffer'>
                  <h1 className='font-poppins text-[18px] font-medium text-blue-3'>
                    Top Up
                  </h1>
                </Link>
              </li>

              <li className='decoration-blue-3 decoration-2 hover:underline'>
                <Link href='/'>
                  <h1 className='font-poppins text-[18px] font-medium text-blue-3'>
                  Discounts
                  </h1>
                </Link>
              </li>
            </ul>
          </nav>

              <div className='align-center flex flex-row items-center justify-center gap-3'>
                <CgProfile className='text-xl' />
                <h1 className='hidden justify-center font-poppins text-[20px] font-medium text-blue-3 lg:block'>
                  Username
                </h1>
              </div>

        </div>
      </header>
    </>
  );
}

export default Navbar;