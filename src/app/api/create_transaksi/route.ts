import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function GET(req: Request) {
    try {
        const url = new URL(req.url || '');
        const Status_Pembayaran = url.searchParams.get('Status_Pembayaran');
        const AccID = url.searchParams.get('AccID');
        const pengguna_id_pengguna = Number(url.searchParams.get('pengguna_id_pengguna'));
        const produk_id_produk = Number(url.searchParams.get('produk_id_produk'));
        const metode_id_metode = Number(url.searchParams.get('metode_id_metode'));
        

        const newTransaksi = await prisma.transaksi.create({
          data: {
            Status_Pembayaran,
            AccID,
            pengguna_id_pengguna,
            metode_id_metode,
            produk_id_produk,
          },
        });
        return NextResponse.json({ newTransaksi }, { status: 201 });
      } catch (error) {
        return NextResponse.json({ error }, { status: 400 });
      }
}