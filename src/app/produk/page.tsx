
'use client';
import { LemonMilk, poppins } from '@/lib/font';
import Navbar from '@/layouts/Navbar';
import Card from '@/components/Card';
import CardProduct from '@/components/CardProduct';
import Link from 'next/link';
import NextImage from '@/components/NextImage';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const [gamingProducts, setGamingProducts] = useState([]);
  const searchParams = useSearchParams();
  const kategori = searchParams.get('kategori');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/produk_top_up_spec?kategori='+kategori);
        const data = await response.json();
        console.log('Gaming Products:', data);
        setGamingProducts(data.produkTopUpList || []);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const [idProduk, setidProduk] = useState(0);
  const [idMetode, setidMetode] = useState(0);

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <main className="min-h-screen py-24 bg-blue-1">
      
      <Navbar />

      <div className='items-center justify-center flex flex-col'>
        <h2 className='font-lemonMilk text-[30px] font-medium text-blue-3 my-5'> Pilih Nominal Top up </h2>

        <div className='flex flex-wrap gap-6 items-center justify-center'>
          {gamingProducts.map((product, index) => (
            <button onClick={() => setidProduk(product.ID_Produk)}>
              <CardProduct key={index} title={product.Nama_Produk} />
            </button>
          ))}
        </div>

        <h2 className='font-lemonMilk text-[30px] font-medium text-blue-3 my-5'> ID PRODUK { idProduk } </h2>

        <h2 className='font-lemonMilk text-[30px] font-medium text-blue-3 my-5'> Pilih METODE PEMBAYARAN </h2>

        <div className='flex flex-wrap gap-6 items-center justify-center'>
          <button onClick={() => setidMetode(1)}>
            <CardProduct title="Credit Card"/>
          </button>

          <button onClick={() => setidMetode(2)}>
            <CardProduct title="Debit Card"/>
          </button>

          <button onClick={() => setidMetode(3)}>
            <CardProduct title="Bank Transfer"/>
          </button>
        </div>
        
        <h2 className='font-lemonMilk text-[30px] font-medium text-blue-3 my-5'> ID METODE { idMetode } </h2>

        <div className='flex flex-wrap gap-6 items-center justify-center'>
          <Link href={'/api/create_transaksi?Status_Pembayaran=Pend&AccID=1&pengguna_id_pengguna=1&metode_id_metode='+idMetode+'&produk_id_produk='+idProduk}>
            <CardProduct title="ORDER NOW" />
          </Link>
        </div>

      </div>

    </main>
  );
}
