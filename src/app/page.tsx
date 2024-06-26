'use client';
import { LemonMilk, poppins } from '@/lib/font';
import Navbar from '@/layouts/Navbar';
import Card from '@/components/Card';
import Link from 'next/link';
import NextImage from '@/components/NextImage';

export default function Home() {
  return (
    <main className="min-h-screen py-24 bg-blue-1">
      
      <Navbar />

      <div id='about-us' className="flex px-[55px] py-[75px] min-h-screen">
        <div className="flex min-h-screen flex-col">
          <a className="font-poppins text-[30px] font-medium text-blue-3 font-bold">
            BACUEMI{" "}
          </a>
          <a className="font-lemonMilk text-[80px] font-medium text-blue-3">
            UPGRADE YOUR{" "}<br/> TOP UP EXPERIENCE{" "}
          </a>
          <a className="font-poppins text-[30px] font-medium text-blue-3">
            Easy, Fast, and Secure
          </a>
        </div>
        <div className="absolute z-1 w-[40%] right-[0%] top-[275%] md:top-[15%]">
          <img src="/img/jett.png" alt="Jett"/>
        </div>
        <div className="absolute z-0 w-[100%] left-[0%] md:top-[85%]">
          <img src="/img/kunai.png" alt="kunai"/>
        </div>
      </div>
      
      
      <div className="flex flex-row mx-8">
      <div className="flex flex-col mx-4">
        <h2 className="font-lemonMilk text-[30px] font-medium text-blue-3 my-5">
          {" "}
          GAMING PRODUCTS{" "}
        </h2>
        <Card />
        <Card />
        <Card />
        <Card />

        <div className="decoration-blue-3 decoration-2 underline underline-offset-1">
          <Link href="/about-us">
            <p className="font-poppins text-[18px] font-medium text-blue-3 ">
              see more GAMING PRODUCTS
            </p>
          </Link>
        </div>
      </div>

      <div className="flex flex-col">
        <h2 className="font-lemonMilk text-[30px] font-medium text-blue-3 my-5">
          {" "}
          HOUSE NEEDS{" "}
        </h2>
        <Card />
        <Card />
        <Card />
        <Card />

        <div className="decoration-blue-3 decoration-2 underline underline-offset-1">
          <Link href="/about-us">
            <p className="font-poppins text-[18px] font-medium text-blue-3 ">
              see more HOUSE NEEDS
            </p>
          </Link>
        </div>
      </div>
    </div>

    </main>
  );
}
