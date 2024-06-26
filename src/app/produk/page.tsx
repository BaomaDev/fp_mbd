
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

        <h2 className='font-lemonMilk text-[30px] font-medium text-blue-3 my-5'> Pilih Nominal Top up </h2>

      <div className='flex flex-wrap gap-6'>
      <Card title="Ragnarok X: Next Generation 2310 Diamonds"/>
      <Card title="Ragnarok X: Next Generation 2310 Diamonds"/>
      <Card title="Ragnarok X: Next Generation 2310 Diamonds"/>
      <Card title="Ragnarok X: Next Generation 2310 Diamonds"/>
      <Card title="Ragnarok X: Next Generation 2310 Diamonds"/>
      </div>

      <h2 className='font-lemonMilk text-[30px] font-medium text-blue-3 my-5'> Pilih METODE PEMBAYARAN </h2>

      <div className='flex flex-wrap gap-6'>
      <Card title="Ragnarok X: Next Generation 2310 Diamonds"/>
      <Card title="Ragnarok X: Next Generation 2310 Diamonds"/>
      <Card title="Ragnarok X: Next Generation 2310 Diamonds"/>
      <Card title="Ragnarok X: Next Generation 2310 Diamonds"/>
      <Card title="Ragnarok X: Next Generation 2310 Diamonds"/>
      </div>


    </main>
  );
}