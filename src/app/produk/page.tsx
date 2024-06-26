
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

      <div className='items-center justify-center flex flex-col'>
      <h2 className='font-lemonMilk text-[30px] font-medium text-blue-3 my-5'> Pilih Nominal Top up </h2>

      <div className='flex flex-wrap gap-6 items-center justify-center'>
      <Card title="Ragnarok X: Next Generation 2310 Diamonds"/>
      <Card title="Ragnarok X: Next Generation 2310 Diamonds"/>
      <Card title="Ragnarok X: Next Generation 2310 Diamonds"/>
      <Card title="Ragnarok X: Next Generation 2310 Diamonds"/>
      <Card title="Ragnarok X: Next Generation 2310 Diamonds"/>
      </div>

      <h2 className='font-lemonMilk text-[30px] font-medium text-blue-3 my-5'> Pilih METODE PEMBAYARAN </h2>

      <div className='flex flex-wrap gap-6 items-center justify-center'>
      <Card title="Credit Card"/>
      <Card title="Debit Card"/>
      <Card title="Bank Transfer"/>
      <Card title="PayLater"/>
      </div>
      </div>

    </main>
  );
}
