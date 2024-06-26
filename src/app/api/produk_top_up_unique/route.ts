import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function GET(req: Request) {
  try {
    const produkTopUpList = await prisma.produk_top_up.findMany({
      distinct: ['Kategori']
    });
    return NextResponse.json({ produkTopUpList }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}