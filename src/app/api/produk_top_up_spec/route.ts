import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function GET(req: Request) {
  try {    
    const url = new URL(req.url || '');
    const kategoriValue = url.searchParams.get('kategori') || '';

    const produkTopUpList = await prisma.produk_top_up.findMany({
      where: {
        Kategori: kategoriValue,
      },
    });

    return NextResponse.json({ produkTopUpList }, { status: 200 });
  } catch (error) {
    console.error('Error fetching produk top up list:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
