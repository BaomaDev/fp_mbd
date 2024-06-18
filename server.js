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
  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
