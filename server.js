const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');

const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());

// Create user endpoint
app.post('/api/pengguna', async (req, res) => {
  try {
    const { Nama_Pengguna, Email, Kata_Sandi } = req.body;
    const newUser = await prisma.pengguna.create({
      data: {
        Nama_Pengguna,
        Email,
        Kata_Sandi,
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Create pembayaran endpoint
app.post('/api/metode_pembayaran', async (req, res) => {
    try {
      const { Nama_Metode } = req.body;
      const newPembayaran = await prisma.metode_pembayaran.create({
        data: {
            Nama_Metode,
        },
      });
      res.status(201).json(newPembayaran);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

// Create transaksi endpoint
app.post('/api/transaksi', async (req, res) => {
    try {
      const {
        Status_Pembayaran,
        AccID,
        pengguna_id_pengguna,
        produk_id_produk,
        metode_id_metode,
      } = req.body;
  
      const newTransaksi = await prisma.transaksi.create({
        data: {
          Status_Pembayaran,
          AccID,
          pengguna_id_pengguna,
          produk_id_produk,
          metode_id_metode,
        },
      });
      res.status(201).json(newTransaksi);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  // Get all produk_top_up endpoint
app.get('/api/produk_top_up', async (req, res) => {
  try {
    const produkTopUpList = await prisma.produk_top_up.findMany();
    res.status(200).json(produkTopUpList);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

  // Get specific produk_top_up kategori endpoint
  // Contoh url request = /api/produk_top_up?kategori=someKategoriValue (jangan lupa query parameternnya)
app.get('/api/produk_top_up_spec', async (req, res) => {
  const { kategori } = req.query; // Extract the kategori parameter from the query string
  try {
    const produkTopUpList = await prisma.produk_top_up.findMany({
      where: {
        Kategori: kategori, // Add the filter condition for kategori
      },
    });
    res.status(200).json(produkTopUpList);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/produk_top_up_disc', async (req, res) => {
  try {
    const produkTopUpList = await prisma.produk_top_up.findMany({
      where: {
        diskon: {
          gt: 0, // Filter condition where Diskon is greater than 0
        },
      },
    });
    res.status(200).json(produkTopUpList);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});