# SI-LULUS: Portal Pengumuman Kelulusan SMK

Repositori ini adalah **Starter Kit (Mentahan Aplikasi)** untuk proyek praktik Cloud Engineering berbasis Agile Scrum. Aplikasi ini dirancang sangat ringan menggunakan Node.js dan Express, dengan tujuan utama melatih siswa melakukan penyebaran (deployment) aplikasi ke dalam server virtual AWS EC2.

Aplikasi ini mendemonstrasikan pemisahan nyata antara sisi Klien (Frontend) dan sisi Server (Backend), di mana kerahasiaan data nilai siswa (JSON) aman tereksekusi di dalam mesin server tanpa bisa diintip melalui browser.

## Struktur File Aplikasi

Aplikasi ini sengaja dibuat sederhana tanpa kerumitan database SQL agar fokus pembelajaran tetap pada infrastruktur server awan (Cloud Infrastructure).

* **`index.js`** : Otak utama dari server (Backend). Mengatur port 80, merespons permintaan browser, dan membaca data dari file JSON.
* **`data.json`** : Simulasi database rahasia. Berisi daftar Nomor Induk Siswa Nasional (NISN) beserta status kelulusannya. File ini aman di dalam server dan tidak dikirim ke browser.
* **`index.html`** : Wajah aplikasi (Frontend). Halaman antarmuka tempat pengunjung memasukkan NISN.
* **`package.json`** : Daftar identitas proyek dan pustaka (library) yang dibutuhkan sistem, yaitu Express.js.

---

## Misi Eksekusi (Khusus Peran Backend Deployment Engineer)

Jika kamu sedang membaca halaman ini dari dalam layar terminal hitam Linux (AWS EC2), ikuti langkah-langkah di bawah ini secara berurutan untuk meniupkan nyawa ke server kelompokmu!

### Langkah 1: Kloning Repositori
Pastikan kamu sudah berada di dalam mesin Ubuntu AWS. Tarik kode aplikasi ini ke dalam servermu dengan perintah:

```bash
git clone https://github.com/retno412/si-lulus.git
```

### Langkah 2: Masuk ke Ruang Kerja
Pindahkan arah terminalmu ke dalam folder aplikasi yang baru saja diunduh:

```bash
cd si-lulus
```

### Langkah 3: Instalasi Alat Dapur (Dependencies)
Mesin Linux perlu mengunduh pustaka `express` agar aplikasi bisa berjalan. Ketik perintah ini:

```bash
npm install
```

### Langkah 4: Merapal Mantra Keabadian (Deployment via PM2)
Jangan gunakan perintah `node index.js` biasa, karena web akan langsung mati ketika layar laptopmu ditutup. Gunakan PM2 (Mandor Latar Belakang).

Pastikan PM2 sudah terinstal di servermu:

```bash
sudo npm install -g pm2
```

Jalankan aplikasi SI-LULUS secara permanen:

```bash
sudo pm2 start index.js --name "silulus"
```

### Langkah 5: Pengujian
Buka browser di HP atau laptop, lalu ketikkan **Alamat IP Publik** dari server EC2 kelompok kalian. Jika halaman pencarian NISN muncul dan bisa merespons data kelulusan, misi kalian berhasil 100%!

---

## Panduan Pengujian Lokal (Untuk Guru / Modifikasi Kodingan)

Jika Anda ingin menguji atau mengubah tampilan HTML di laptop pribadi sebelum mengunggahnya ke server awan, **JANGAN MENGGUNAKAN LIVE SERVER** (seperti ekstensi VS Code). Live server hanya membaca Frontend dan akan menghasilkan pesan "Kesalahan Jaringan / Server Down".

**Cara pengujian lokal yang benar:**

1. Buka terminal/CMD di laptop lokal Anda, arahkan ke folder ini.
2. Ketik `npm install` untuk memasang Express.
3. Ketik `node index.js` untuk menyalakan server lokal.
4. Buka browser dan ketik `localhost` atau `localhost:80`. Aplikasi akan berjalan dengan sempurna.
