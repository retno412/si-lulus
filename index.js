const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 80; // Wajib Port 80 agar sesuai dengan konfigurasi Security Group siswa

// Middleware agar bisa membaca format JSON dari request Frontend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Variabel untuk menyimpan data kelulusan
let dataSiswa = [];

// Membaca file data.json saat server pertama kali menyala
try {
    const rawData = fs.readFileSync(path.join(__dirname, 'data.json'));
    dataSiswa = JSON.parse(rawData);
} catch (error) {
    console.error("Gagal membaca database:", error);
}

// Endpoint 1: Menampilkan halaman web frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Endpoint 2: Menerima pencarian NISN dari frontend dan membalas dengan status lulus
app.post('/cek-kelulusan', (req, res) => {
    const nisnDicari = req.body.nisn;
    const hasilPencarian = dataSiswa.find(siswa => siswa.nisn === nisnDicari);
    
    if (hasilPencarian) {
        res.json({ ditemukan: true, data: hasilPencarian });
    } else {
        res.json({ ditemukan: false, pesan: "NISN tidak terdaftar di sistem." });
    }
});

// Menyalakan mesin server
app.listen(PORT, () => {
    console.log(`Server Portal SI-LULUS aktif dan berjalan di Port ${PORT}`);
});