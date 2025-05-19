# DOKUMENTASI

Ini adalah dokumentasi singkat untuk penggunaan project

## Software Requirement

 - Node Js v22.15.0
 - Hapi js v21.4.0

## Clone & Install
Untuk menjalankan project ini dapat dilakukan dengan sederhana

 - clone project `git clone https://github.com/nersus15/rekrutmen-jp-pusdatin`
 - rename file .env-sample menjadi .env
 - `cd rekrutmen-jp-pusdatin`
 - `npm install`
 setelah proses instalasi dependensi nya selesai tinggal menjalankan project
 
 - `npm run start:dev`

## Endpoints

 - GET /rs/lists
	 menampilkan daftar rumah sakit beserta status koneksi ke SATUSEHAT KEMKES. ini adalah endpoint untuk soal nomor 1 (Join API)

**CONTOH RESPONSE**
``` {
    "status": "success",
    "data": {
        "response": [
            {
                "nama": "RS Khusus Daerah Duren Sawit",
                "email": "rsjiwadurensawit.developer@dto.kemkes.go.id",
                "organisasi_id": 1000266408,
                "kelas_rs": "A",
                "kota_kab": "Jakarta Timur",
                "status": "terkoneksi",
                "alamat": "Jl. Duren Sawit Baru Jakarta Timur"
            },
            {
                "nama": "RS Umum Daerah Budhi Asih",
                "email": "rsudbudhiasih.developer@dto.kemkes.go.id",
                "organisasi_id": 1000266501,
                "kelas_rs": "B",
                "kota_kab": "Jakarta Timur",
                "status": "terkoneksi",
                "alamat": "Jl. Dewi Sartika, Cawang III/ 200,Jakarta Timur"
            },
            {
                "nama": "RS Umum Daerah Cempaka Putih",
                "email": "rsudcempakaputih.developer@dto.kemkes.go.id",
                "organisasi_id": 1000266173,
                "kelas_rs": "D",
                "kota_kab": "Jakarta Pusat",
                "status": "terkoneksi",
                "alamat": "Jl.Rawasari Selatan No1"
            },
            {
                "nama": "RS Umum Daerah Cengkareng",
                "email": "rsudcengkareng.developer@dto.kemkes.go.id",
                "organisasi_id": 1000266422,
                "kelas_rs": "B",
                "kota_kab": "Jakarta Barat",
                "status": "terkoneksi",
                "alamat": "Jl.Kamal Raya Bumi Cengkareng Indah Cengkareng Timur"
            },
            {
                "nama": "RS Umum Daerah Cilincing",
                "email": "rsudcilincing.developer@dto.kemkes.go.id",
                "organisasi_id": 1000265662,
                "kelas_rs": "C",
                "kota_kab": "Jakarta Utara",
                "status": "terkoneksi",
                "alamat": "Jl. Madya Kebantenan Nomor 4, Semper Timur, Cilincing"
            },
            {
                "nama": "RS Umum Daerah Cipayung",
                "email": "rsudcipayung.developer@dto.kemkes.go.id",
                "organisasi_id": 1000266068,
                "kelas_rs": "D",
                "kota_kab": "Jakarta Timur",
                "status": "terkoneksi",
                "alamat": "Jl. Mini III RT 004 RW 003 Kelurahan Bambu Apus, Kecamatan CipayungKota Jakarta TimurDKI Jakarta"
            },
            {
                "nama": "RS Umum Daerah Ciracas",
                "email": "rsudciracas.developer@dto.kemkes.go.id",
                "organisasi_id": 1000266056,
                "kelas_rs": "D",
                "kota_kab": "Jakarta Timur",
                "status": "belum terkoneksi",
                "alamat": null
            },
            {
                "nama": "RS Umum Daerah Jagakarsa",
                "email": "rsudjagakarsa.developer@dto.kemkes.go.id",
                "organisasi_id": 1000265789,
                "kelas_rs": "D",
                "kota_kab": "Jakarta Selatan",
                "status": "terkoneksi",
                "alamat": "Jl. Moh. Kahfi  I No.27A, Kecamatan Jagakarsa Jakarta Selatan"
            },
            {
                "nama": "RS Umum Daerah Jati Padang",
                "email": "rsudjatipadang.developer@dto.kemkes.go.id",
                "organisasi_id": 1000265698,
                "kelas_rs": "D",
                "kota_kab": "Jakarta Selatan",
                "status": "terkoneksi",
                "alamat": "Jl. Raya Ragunan No. 16 dan 17, Kelurahan Pasar Minggu, Kecamatan Pasar Minggu, Kota Administrasi Jakarta Selatan, Provinsi DKI Jakarta. Kode pos 12520"
            },
            {
                "nama": "RS Umum Daerah Johar Baru",
                "email": "rsudjoharbaru.developer@dto.kemkes.go.id",
                "organisasi_id": 1000266018,
                "kelas_rs": "D",
                "kota_kab": "Jakarta Pusat",
                "status": "belum terkoneksi",
                "alamat": null
            },
            {
                "nama": "RS Umum Daerah Kalideres",
                "email": "rsudkecamatankalideres.developer@dto.kemkes.go.id",
                "organisasi_id": 1000265777,
                "kelas_rs": "D",
                "kota_kab": "Jakarta Barat",
                "status": "terkoneksi",
                "alamat": "Jl. Bedugul Blok NA, RT.008 RW.012, Perumahan Daan Mogot Baru, Kelurahan Kalideres, Kecamatan Kalideres, Kota Jakarta Barat, Provinsi DKI JakartaKode Pos: 11840"
            },
            {
                "nama": "RS Umum Daerah Kebayoran Baru",
                "email": "rsudkebayoranbaru.developer@dto.kemkes.go.id",
                "organisasi_id": 1000266329,
                "kelas_rs": "D",
                "kota_kab": "Jakarta Selatan",
                "status": "terkoneksi",
                "alamat": "Jl. Abdul Majid No 28, Kelurahan Cipete Utara, Kecamatan Kebayoran Baru, Kota Administrasi Jakarta S"
            },
            {
                "nama": "RS Umum Daerah Kebayoran Lama",
                "email": "rsudkebayoranlama.developer@dto.kemkes.go.id",
                "organisasi_id": 1000266070,
                "kelas_rs": "D",
                "kota_kab": "Jakarta Selatan",
                "status": "belum terkoneksi",
                "alamat": null
            },
            {
                "nama": "RS Umum Daerah Kemayoran",
                "email": "rsudkemayoran.developer@dto.kemkes.go.id",
                "organisasi_id": 1000265480,
                "kelas_rs": "D",
                "kota_kab": "Jakarta Pusat",
                "status": "belum terkoneksi",
                "alamat": null
            },
            {
                "nama": "RS Umum Daerah Kembangan",
                "email": "rsudkembangan.developer@dto.kemkes.go.id",
                "organisasi_id": 1000265430,
                "kelas_rs": "D",
                "kota_kab": "Jakarta Barat",
                "status": "terkoneksi",
                "alamat": "Jl. Topaz Raya Blok F 2 No. 3 Rt.15 Rw. 07, Kelurahan Meruya Utara,  Kecamatan Kembangan, Jakarta Barat 11620"
            },
            {
                "nama": "RS Umum Daerah Kepulauan Seribu",
                "email": "rsudkepulauanseribu.developer@dto.kemkes.go.id",
                "organisasi_id": 1000265715,
                "kelas_rs": "D",
                "kota_kab": "Kepulauan Seribu",
                "status": "terkoneksi",
                "alamat": "Pulau Pramuka Rt.001 RW.004"
            },
            {
                "nama": "RS Umum Daerah Koja",
                "email": "rsudkoja.developer@dto.kemkes.go.id",
                "organisasi_id": 1000266197,
                "kelas_rs": "B",
                "kota_kab": "Jakarta Utara",
                "status": "terkoneksi",
                "alamat": "Jl. Deli No.4 Tanjung Priok,Jakut"
            },
            {
                "nama": "RS Umum Daerah Kramat Jati",
                "email": "rsudkramatjati.developer@dto.kemkes.go.id",
                "organisasi_id": 1000265791,
                "kelas_rs": "D",
                "kota_kab": "Jakarta Timur",
                "status": "terkoneksi",
                "alamat": "Jln. Raya Inpres No. 48"
            },
            {
                "nama": "RS Umum Daerah Mampang Prapatan",
                "email": "rsudmampangprapatan.developer@dto.kemkes.go.id",
                "organisasi_id": 1000266020,
                "kelas_rs": "D",
                "kota_kab": "Jakarta Selatan",
                "status": "belum terkoneksi",
                "alamat": null
            },
            {
                "nama": "RS Umum Daerah Matraman",
                "email": "rsudmatraman.developer@dto.kemkes.go.id",
                "organisasi_id": 1000265478,
                "kelas_rs": "D",
                "kota_kab": "Jakarta Timur",
                "status": "terkoneksi",
                "alamat": "Jl. Kebon kelapa raya no. 29 kel. Utan kayu selatan kec. Matraman"
            },
            {
                "nama": "RS Umum Daerah Pademangan",
                "email": "rsudpademangan.developer@dto.kemkes.go.id",
                "organisasi_id": 1000265985,
                "kelas_rs": "D",
                "kota_kab": "Jakarta Utara",
                "status": "terkoneksi",
                "alamat": "Jl. Budi Mulia Raya No.2 Pademangan Barat"
            },
            {
                "nama": "RS Umum Daerah Pasar Minggu",
                "email": "rsudpasarminggu.developer@dto.kemkes.go.id",
                "organisasi_id": 1000265404,
                "kelas_rs": "B",
                "kota_kab": "Jakarta Selatan",
                "status": "terkoneksi",
                "alamat": "JL. TB. SIMATUPANG NO. 1 KELURAHAN RAGUNAN, KECAMATAN PASAR MINGGU - JAKARTA SELATAN"
            },
            {
                "nama": "RS Umum Daerah Pasar Rebo",
                "email": "rsudpasarrebo.developer@dto.kemkes.go.id",
                "organisasi_id": 1000265428,
                "kelas_rs": "B",
                "kota_kab": "Jakarta Timur",
                "status": "terkoneksi",
                "alamat": "Jl. TB Simatupang No.30"
            },
            {
                "nama": "RS Umum Daerah Pesanggrahan",
                "email": "rsudpesanggrahan.developer@dto.kemkes.go.id",
                "organisasi_id": 1000265600,
                "kelas_rs": "C",
                "kota_kab": "Jakarta Selatan",
                "status": "terkoneksi",
                "alamat": "Jalan Cenek I no. 1 Pesanggrahan"
            },
            {
                "nama": "RS Umum Daerah Sawah Besar",
                "email": "rsudsawahbesar.developer@dto.kemkes.go.id",
                "organisasi_id": 1000266159,
                "kelas_rs": "D",
                "kota_kab": "Jakarta Pusat",
                "status": "belum terkoneksi",
                "alamat": null
            },
            {
                "nama": "RS Umum Daerah Taman Sari",
                "email": "rsudtamansari.developer@dto.kemkes.go.id",
                "organisasi_id": 1000266317,
                "kelas_rs": "D",
                "kota_kab": "Jakarta Barat",
                "status": "belum terkoneksi",
                "alamat": null
            },
            {
                "nama": "RS Umum Daerah Tanah Abang",
                "email": "rsudtanahabang.developer@dto.kemkes.go.id",
                "organisasi_id": 1000266214,
                "kelas_rs": "D",
                "kota_kab": "Jakarta Pusat",
                "status": "terkoneksi",
                "alamat": "Jl. KH. Mas Mansyur No. 30 Kel. Kebon Kacang Kec. Tanah Abang, Jakarta Pusat"
            },
            {
                "nama": "RS Umum Daerah Tanjung Priok",
                "email": "rsudtanjungpriok.developer@dto.kemkes.go.id",
                "organisasi_id": 1000266484,
                "kelas_rs": "D",
                "kota_kab": "Jakarta Utara",
                "status": "terkoneksi",
                "alamat": "Jl. Bugis No. 03 Kel. Kebon Bawang Kec. Tanjung Priok"
            },
            {
                "nama": "RS Umum Daerah Tarakan",
                "email": "rsudtarakanjakarta.developer@dto.kemkes.go.id",
                "organisasi_id": 1000266525,
                "kelas_rs": "A",
                "kota_kab": "Jakarta Pusat",
                "status": "terkoneksi",
                "alamat": "Jl. Kyai Caringin no. 7 RT 11 / RW 04, Cideng, Kec. Gambir"
            },
            {
                "nama": "RS Umum Daerah Tebet",
                "email": "rsudtebet.developer@dto.kemkes.go.id",
                "organisasi_id": 1000265351,
                "kelas_rs": "C",
                "kota_kab": "Jakarta Selatan",
                "status": "terkoneksi",
                "alamat": "Jl. Prof. Dr. Soepomo, SH. No. 54, Tebet, Jakarta Selatan"
            },
            {
                "nama": "RS Umum Daerah Tugu Koja",
                "email": "rsudtugukoja.developer@dto.kemkes.go.id",
                "organisasi_id": 1000265806,
                "kelas_rs": "C",
                "kota_kab": "Jakarta Utara",
                "status": "terkoneksi",
                "alamat": "Jl. Walang Permai No 39, RT.008 RW.012, Kel. Tugu Utara, Kec. Koja, Kota Administrasi Jakarta Utara, DKI Jakarta"
            }
        ]
    }
}
```
	 
 - GET /rs/summary
	 menampilkan daftar rumah sakit beserta status koneksi ke SATUSEHAT KEMKES dan jumlah data yang sudah dikirimkan. ini adalah endpoint untuk soal nomor 2 (Summary API) dan nomor 3 (Filter API)
	 **QUERY PARAMS**
	 
	 1. kelas (untuk filter kelas rs) nilai yang di terima adalah **salah satu dari ['A', 'B', 'C', 'D']** bersifat **tidak case sensitive**
	 2. kabkota (untuk filter kabupaten/kota) nilai yang diterima adalah **salah satu dari  ['Jakarta Pusat', 'Kepulauan Seribu', 'Jakarta Timur', 'Jakarta Barat', 'Jakarta Selatan', 'Jakarta Utara']** dan bersifat **tidak case sensitive**

	**CONTOH RESPONSE**
	

 - Tanpa Filter

    ```{
	  "status": "success",
	  "data": {
	    "response": [
	      {
	        "nama": "RS Khusus Daerah Duren Sawit",
	        "email": "rsjiwadurensawit.developer@dto.kemkes.go.id",
	        "organisasi_id": 1000266408,
	        "kelas_rs": "A",
	        "kota_kab": "Jakarta Timur",
	        "status": "terkoneksi",
	        "alamat": "Jl. Duren Sawit Baru Jakarta Timur",
	        "jumlah_pengiriman_data": 0
	      },
	      {
	        "nama": "RS Umum Daerah Cempaka Putih",
	        "email": "rsudcempakaputih.developer@dto.kemkes.go.id",
	        "organisasi_id": 1000266173,
	        "kelas_rs": "D",
	        "kota_kab": "Jakarta Pusat",
	        "status": "terkoneksi",
	        "alamat": "Jl.Rawasari Selatan No1",
	        "jumlah_pengiriman_data": 34
	      },
	      {
	        "nama": "RS Umum Daerah Cengkareng",
	        "email": "rsudcengkareng.developer@dto.kemkes.go.id",
	        "organisasi_id": 1000266422,
	        "kelas_rs": "B",
	        "kota_kab": "Jakarta Barat",
	        "status": "terkoneksi",
	        "alamat": "Jl.Kamal Raya Bumi Cengkareng Indah Cengkareng Timur",
	        "jumlah_pengiriman_data": 15
	      },
	      ....
	      ]
      },
      }```
      
      

 - Dengan filter kelas C
    ```{
    "status": "success",
    "data": {
        "response": [
            {
                "nama": "RS Umum Daerah Cilincing",
                "email": "rsudcilincing.developer@dto.kemkes.go.id",
                "organisasi_id": 1000265662,
                "kelas_rs": "C",
                "kota_kab": "Jakarta Utara",
                "status": "terkoneksi",
                "alamat": "Jl. Madya Kebantenan Nomor 4, Semper Timur, Cilincing",
                "jumlah_pengiriman_data": 6
            },
            {
                "nama": "RS Umum Daerah Pesanggrahan",
                "email": "rsudpesanggrahan.developer@dto.kemkes.go.id",
                "organisasi_id": 1000265600,
                "kelas_rs": "C",
                "kota_kab": "Jakarta Selatan",
                "status": "terkoneksi",
                "alamat": "Jalan Cenek I no. 1 Pesanggrahan",
                "jumlah_pengiriman_data": 2
            },
            {
                "nama": "RS Umum Daerah Tebet",
                "email": "rsudtebet.developer@dto.kemkes.go.id",
                "organisasi_id": 1000265351,
                "kelas_rs": "C",
                "kota_kab": "Jakarta Selatan",
                "status": "terkoneksi",
                "alamat": "Jl. Prof. Dr. Soepomo, SH. No. 54, Tebet, Jakarta Selatan",
                "jumlah_pengiriman_data": 75
            },
            {
                "nama": "RS Umum Daerah Tugu Koja",
                "email": "rsudtugukoja.developer@dto.kemkes.go.id",
                "organisasi_id": 1000265806,
                "kelas_rs": "C",
                "kota_kab": "Jakarta Utara",
                "status": "terkoneksi",
                "alamat": "Jl. Walang Permai No 39, RT.008 RW.012, Kel. Tugu Utara, Kec. Koja, Kota Administrasi Jakarta Utara, DKI Jakarta",
                "jumlah_pengiriman_data": 34
            }
        ]
    }
	}

 - Dengan Filter kabkota jakarta utara
	```{
    "status": "success",
    "data": {
        "response": [
            {
                "nama": "RS Umum Daerah Cilincing",
                "email": "rsudcilincing.developer@dto.kemkes.go.id",
                "organisasi_id": 1000265662,
                "kelas_rs": "C",
                "kota_kab": "Jakarta Utara",
                "status": "terkoneksi",
                "alamat": "Jl. Madya Kebantenan Nomor 4, Semper Timur, Cilincing",
                "jumlah_pengiriman_data": 6
            },
            {
                "nama": "RS Umum Daerah Koja",
                "email": "rsudkoja.developer@dto.kemkes.go.id",
                "organisasi_id": 1000266197,
                "kelas_rs": "B",
                "kota_kab": "Jakarta Utara",
                "status": "terkoneksi",
                "alamat": "Jl. Deli No.4 Tanjung Priok,Jakut",
                "jumlah_pengiriman_data": 33
            },
            {
                "nama": "RS Umum Daerah Pademangan",
                "email": "rsudpademangan.developer@dto.kemkes.go.id",
                "organisasi_id": 1000265985,
                "kelas_rs": "D",
                "kota_kab": "Jakarta Utara",
                "status": "terkoneksi",
                "alamat": "Jl. Budi Mulia Raya No.2 Pademangan Barat",
                "jumlah_pengiriman_data": 52
            },
            {
                "nama": "RS Umum Daerah Tanjung Priok",
                "email": "rsudtanjungpriok.developer@dto.kemkes.go.id",
                "organisasi_id": 1000266484,
                "kelas_rs": "D",
                "kota_kab": "Jakarta Utara",
                "status": "terkoneksi",
                "alamat": "Jl. Bugis No. 03 Kel. Kebon Bawang Kec. Tanjung Priok",
                "jumlah_pengiriman_data": 42
            },
            {
                "nama": "RS Umum Daerah Tugu Koja",
                "email": "rsudtugukoja.developer@dto.kemkes.go.id",
                "organisasi_id": 1000265806,
                "kelas_rs": "C",
                "kota_kab": "Jakarta Utara",
                "status": "terkoneksi",
                "alamat": "Jl. Walang Permai No 39, RT.008 RW.012, Kel. Tugu Utara, Kec. Koja, Kota Administrasi Jakarta Utara, DKI Jakarta",
                "jumlah_pengiriman_data": 34
            }
        ]
    }
	}

 - Dengan filter kelas C dan kabkota jakarta utara
 ```{
    "status": "success",
    "data": {
        "response": [
            {
                "nama": "RS Umum Daerah Cilincing",
                "email": "rsudcilincing.developer@dto.kemkes.go.id",
                "organisasi_id": 1000265662,
                "kelas_rs": "C",
                "kota_kab": "Jakarta Utara",
                "status": "terkoneksi",
                "alamat": "Jl. Madya Kebantenan Nomor 4, Semper Timur, Cilincing",
                "jumlah_pengiriman_data": 6
            },
            {
                "nama": "RS Umum Daerah Tugu Koja",
                "email": "rsudtugukoja.developer@dto.kemkes.go.id",
                "organisasi_id": 1000265806,
                "kelas_rs": "C",
                "kota_kab": "Jakarta Utara",
                "status": "terkoneksi",
                "alamat": "Jl. Walang Permai No 39, RT.008 RW.012, Kel. Tugu Utara, Kec. Koja, Kota Administrasi Jakarta Utara, DKI Jakarta",
                "jumlah_pengiriman_data": 34
            }
        ]
    }
}
