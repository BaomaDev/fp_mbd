
'use client';
import { LemonMilk, poppins } from '@/lib/font';
import Navbar from '@/layouts/Navbar';
import Card from '@/components/Card';
import Link from 'next/link';
import NextImage from '@/components/NextImage';
import { useEffect, useState } from 'react';

export default function Home() {
  const [gamingProducts, setGamingProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/produk_top_up_disc');
        const data = await response.json();
        console.log('Gaming Products:', data);
        setGamingProducts(data.produkTopUpList || []);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className="items-center justify-center flex flex-col bg-blue-1">
      <Navbar />

        <h2 className='font-lemonMilk text-[30px] font-medium text-blue-3 my-5'> ALL TOP UP PRODUCTS </h2>

      <div className='flex flex-wrap gap-6 items-center justify-center'>
      {gamingProducts.map((product, index) => (
      <Card key={index} title={product.Kategori} />
      ))}
      </div>

    </main>
  );
}
