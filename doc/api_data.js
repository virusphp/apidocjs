define({ "api": [
  {
    "type": "get",
    "url": "/referensi/kelas",
    "title": "Referensi Kelas Kamar",
    "name": "Kamar",
    "group": "BPJS_Kamar",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>Api Key terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "kd_ppk",
            "description": "<p>Kode ppk rumah sakit</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/referensi/kelas' \\\n     --header 'key: your-api-key' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi code dan pesan</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi diagnosa</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n     \"metaData\": \n         {\n             \"code\": \"1\",\n             \"message\": \"Ok\"\n             \"totalitems\": 16\n         },\n     \"response\": \n         {\n         \"list\": \n             [\n                 {\n                     \"kodekelas\": \"VIP\",\n                     \"namakelas\": \"VVIP\"\n                 },\n                {\n                     \"kodekelas\": \"NON\",\n                     \"namakelas\": \"-\"\n                 }\n             ],\n         }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./bpjs_referensi_kamar.js",
    "groupTitle": "BPJS_Kamar"
  },
  {
    "type": "post",
    "url": "/kamar/create/{ppk}",
    "title": "Buat Kamar",
    "name": "createKamar",
    "group": "BPJS_Kamar",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>request json</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request POST \\\n     --url 'https://api.rsudkraton.com/kamar/create/115051' \\\n     --Content-Type 'application/json' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi code dan pesan</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi Kamar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Sample:",
          "content": "                                              \n{\n    \"kodekelas\": \"VIP\",\n    \"koderuang\": \"VIP 1\",\n    \"namaruang\": \"Ruang Angrek VIP\",\n    \"kapasitas\": \"1\",\n    \"tersedia\": \"0\",\n    \"tersediapria\": \"0\",\n    \"tersediawanita\": \"0\",\n    \"tersediapriawanita\": \"0\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n   \"metaData\": {\n      \"code\": \"1\",\n      \"message\": \"Data berhaisil di simpan.\"\n   },\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./bpjs_ketersediaan_kamar.js",
    "groupTitle": "BPJS_Kamar"
  },
  {
    "type": "post",
    "url": "/kamar/update/{ppk}",
    "title": "Hapus Kamar",
    "name": "hapusKamar",
    "group": "BPJS_Kamar",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>request json</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request POST \\\n     --url 'https://api.rsudkraton.com/kamar/update/115051' \\\n     --Content-Type 'application/json' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi code dan pesan</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi Kamar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Sample:",
          "content": "                                              \n{\n    \"kodekelas\": \"VIP\",\n    \"koderuang\": \"VIP 1\",\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n   \"metaData\": {\n      \"code\": \"1\",\n      \"message\": \"Data berhaisil di hapus.\"\n   },\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./bpjs_ketersediaan_kamar.js",
    "groupTitle": "BPJS_Kamar"
  },
  {
    "type": "get",
    "url": "/kamar/show/{ppk}/{start}/{limit}",
    "title": "Show Kamar",
    "name": "showKamar",
    "group": "BPJS_Kamar",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/kamar/show/115051/1/2' \\\n     --Content-Type 'application/json' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi code dan pesan</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi Kamar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"metaData\": {\n      \"code\": \"1\",\n      \"message\": \"Data berhaisil di hapus.\"\n   },\n   \"response\": {\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./bpjs_ketersediaan_kamar.js",
    "groupTitle": "BPJS_Kamar"
  },
  {
    "type": "post",
    "url": "/kamar/update/{ppk}",
    "title": "Update Kamar",
    "name": "updateKamar",
    "group": "BPJS_Kamar",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>request json</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request POST \\\n     --url 'https://api.rsudkraton.com/kamar/update/115051' \\\n     --Content-Type 'application/json' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi code dan pesan</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi Kamar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Sample:",
          "content": "                                              \n{\n    \"kodekelas\": \"VIP\",\n    \"koderuang\": \"VIP 1\",\n    \"namaruang\": \"Ruang Angrek VIP\",\n    \"kapasitas\": \"1\",\n    \"tersedia\": \"0\",\n    \"tersediapria\": \"0\",\n    \"tersediawanita\": \"0\",\n    \"tersediapriawanita\": \"0\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n   \"metaData\": {\n      \"code\": \"1\",\n      \"message\": \"Data berhaisil di simpan.\"\n   },\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./bpjs_ketersediaan_kamar.js",
    "groupTitle": "BPJS_Kamar"
  },
  {
    "type": "get",
    "url": "/mon/hispelayanan/nokartu/{no_kartu}/tglmulai/{tgl_mul}/tglakhir/{tgl_akhir}",
    "title": "Monitoring History",
    "name": "history",
    "group": "BPJS_Monitoring",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>Api Key terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "no_kartu",
            "description": "<p>no kartu terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "tgl_mul",
            "description": "<p>tanggal mulai sep terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "tgl_akhir",
            "description": "<p>tanggal akhir sep terdaftar</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/mon/hispelayanan/nokartu/0031254455/tglmulai/2018-01-01/tglakhir/2018-01-10' \\\n     --Content-Type 'application/json' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi code dan pesan</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi Semua data history pelayanan</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n {\n   \"metaData\": {\n      \"code\": \"200\",\n      \"message\": \"Sukses\"\n   },\n   \"response\": {\n      \"histori\": [\n        {\n            \"diagnosa\": A00.1 - Cholera due to Vibrio cholerae 01, biovar eltor\",\n            \"jnsPelayanan\": \"1\",\n            \"kelasRawat\": \"Kelas 1\",\n            \"namaPeserta\": \"HANIF ABDURRAHMAN\",\n            \"noKartu\": \"0001819122189\",\n            \"noSep\": \"0301R00110170000004\",\n            \"poli\": null,\n            \"ppkPelayanan\": \"RS YOS SUDARSO\",\n            \"tglPlgSep\": \"2017-10-03\",\n            \"tglSep\": \"2017-10-01\"\n        },\n         {\n            \"diagnosa\": A00.1 - Cholera due to Vibrio cholerae 01, biovar eltor\",\n            \"jnsPelayanan\": \"1\",\n            \"kelasRawat\": \"Kelas 1\",\n            \"namaPeserta\": \"HANIF ABDURRAHMAN\",\n            \"noKartu\": \"0001819122189\",\n            \"noSep\": \"0301R00110170000004\",\n            \"poli\": null,\n            \"ppkPelayanan\": \"RS YOS SUDARSO\",\n            \"tglPlgSep\": \"2017-10-10\",\n            \"tglSep\": \"2017-10-01\"\n        },\n         \n     ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./bpjs_monitoring.js",
    "groupTitle": "BPJS_Monitoring"
  },
  {
    "type": "get",
    "url": "/mon/kunjungan/tanggal/{tgl_sep}/jnspel/{jns_pel}",
    "title": "Monitoring Kunjungan",
    "name": "kunjungan",
    "group": "BPJS_Monitoring",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>Api Key terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "tgl_sep",
            "description": "<p>tanggal cetak sep terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "jns_pel",
            "description": "<p>jenis rawat terdaftar</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/mon/kunjungan/tanggal/2018-01-01/jnspel/2' \\\n     --Content-Type 'application/json' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi code dan pesan</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi Semua data kunjungan</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n {\n   \"metaData\": {\n      \"code\": \"200\",\n      \"message\": \"Sukses\"\n   },\n   \"response\": {\n      \"sep\": [\n        {\n            \"diagnosa\": \"K65.0\",\n            \"jnsPelayanan\": \"R.Inap\",\n            \"kelasRawat\": \"2\",\n            \"nama\": \"HANIF ABDURRAHMAN\",\n            \"noKartu\": \"0001819122189\",\n            \"noSep\": \"0301R00110170000004\",\n            \"poli\": null,\n            \"tglPlgSep\": \"2017-10-03\",\n            \"tglSep\": \"2017-10-01\"\n        },\n         {\n            \"diagnosa\": \"I50.0\",\n            \"jnsPelayanan\": \"R.Inap\",\n            \"kelasRawat\": \"3\",\n            \"nama\": \"ASRIZAL\",\n            \"noKartu\": \"0002283324674\",\n            \"noSep\": \"0301R00110170000005\",\n            \"poli\": null,\n            \"tglPlgSep\": \"2017-10-10\",\n            \"tglSep\": \"2017-10-01\"\n        },\n         \n     ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./bpjs_monitoring.js",
    "groupTitle": "BPJS_Monitoring"
  },
  {
    "type": "get",
    "url": "/peserta/nik/{nik}/tglsep/{tgl_sep}",
    "title": "Peserta Nik",
    "name": "pesertaNik",
    "group": "BPJS_Peserta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>Api Key terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "nik",
            "optional": false,
            "field": "nik",
            "description": "<p>no induk kependudukan peserta terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "tgl_sep",
            "description": "<p>tanggal sep peserta terdaftar</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/peserta/nik/3374132708800008/tglsep/2018-08-27' \\\n     --Content-Type 'application/json' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi code dan pesan</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi data Peserta</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n       {\n\"metaData\": {\n  \"code\": \"200\",\n  \"message\": \"OK\"\n},\n\"response\": {\n  \"peserta\": {\n    \"cob\": {\n      \"nmAsuransi\": null,\n      \"noAsuransi\": null,\n      \"tglTAT\": null,\n      \"tglTMT\": null\n    },\n    \"hakKelas\": {\n      \"keterangan\": \"KELAS II\",\n      \"kode\": \"2\"\n    },\n    \"informasi\": {\n      \"dinsos\": null,\n      \"noSKTM\": null,\n      \"prolanisPRB\": null\n    },\n    \"jenisPeserta\": {\n      \"keterangan\": \"PEGAWAI SWASTA\",\n      \"kode\": \"13\"\n    },\n    \"mr\": {\n      \"noMR\": null,\n      \"noTelepon\": null\n    },\n    \"nama\": \"MARTIN EKO SETIAWAN\",\n    \"nik\": \"3374132708800008\",\n    \"noKartu\": \"0001851105598\",\n    \"pisa\": \"1\",\n    \"provUmum\": {\n      \"kdProvider\": \"0173U048\",\n      \"nmProvider\": \"KARTIKA DEVI ANJARDINI, DR.\"\n    },\n    \"sex\": \"L\",\n    \"statusPeserta\": {\n      \"keterangan\": \"AKTIF\",\n      \"kode\": \"0\"\n    },\n    \"tglCetakKartu\": \"2016-10-06\",\n    \"tglLahir\": \"1980-08-27\",\n    \"tglTAT\": \"2050-12-31\",\n    \"tglTMT\": \"2015-06-01\",\n    \"umur\": {\n      \"umurSaatPelayanan\": \"38 tahun ,0 bulan ,0 hari\",\n      \"umurSekarang\": \"38 tahun ,0 bulan ,1 hari\"\n    }\n  }\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./bpjs_peserta.js",
    "groupTitle": "BPJS_Peserta"
  },
  {
    "type": "get",
    "url": "/peserta/nokartu/{no_kartu}/tglsep/{tgl_sep}",
    "title": "Peserta No Kartu",
    "name": "pesertaNoKartu",
    "group": "BPJS_Peserta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>Api Key terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "no_kartu",
            "optional": false,
            "field": "no_kartu",
            "description": "<p>no Kartu peserta terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "tgl_sep",
            "description": "<p>tanggal sep peserta terdaftar</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/peserta/nokartu/0001851105598/tglsep/2018-08-27' \\\n     --Content-Type 'application/json' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi code dan pesan</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi data Peserta</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n       {\n\"metaData\": {\n  \"code\": \"200\",\n  \"message\": \"OK\"\n},\n\"response\": {\n  \"peserta\": {\n    \"cob\": {\n      \"nmAsuransi\": null,\n      \"noAsuransi\": null,\n      \"tglTAT\": null,\n      \"tglTMT\": null\n    },\n    \"hakKelas\": {\n      \"keterangan\": \"KELAS II\",\n      \"kode\": \"2\"\n    },\n    \"informasi\": {\n      \"dinsos\": null,\n      \"noSKTM\": null,\n      \"prolanisPRB\": null\n    },\n    \"jenisPeserta\": {\n      \"keterangan\": \"PEGAWAI SWASTA\",\n      \"kode\": \"13\"\n    },\n    \"mr\": {\n      \"noMR\": null,\n      \"noTelepon\": null\n    },\n    \"nama\": \"MARTIN EKO SETIAWAN\",\n    \"nik\": \"3374132708800008\",\n    \"noKartu\": \"0001851105598\",\n    \"pisa\": \"1\",\n    \"provUmum\": {\n      \"kdProvider\": \"0173U048\",\n      \"nmProvider\": \"KARTIKA DEVI ANJARDINI, DR.\"\n    },\n    \"sex\": \"L\",\n    \"statusPeserta\": {\n      \"keterangan\": \"AKTIF\",\n      \"kode\": \"0\"\n    },\n    \"tglCetakKartu\": \"2016-10-06\",\n    \"tglLahir\": \"1980-08-27\",\n    \"tglTAT\": \"2050-12-31\",\n    \"tglTMT\": \"2015-06-01\",\n    \"umur\": {\n      \"umurSaatPelayanan\": \"38 tahun ,0 bulan ,0 hari\",\n      \"umurSekarang\": \"38 tahun ,0 bulan ,1 hari\"\n    }\n  }\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./bpjs_peserta.js",
    "groupTitle": "BPJS_Peserta"
  },
  {
    "type": "get",
    "url": "/referensi/diagnosa/{kd_diagnosa}",
    "title": "Referensi Diagnosa",
    "name": "diagnosa",
    "group": "BPJS_Referensi",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>Api Key terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "kd_diagnosa",
            "description": "<p>Kode diagnosa terdaftar</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/referensi/diagnosa/A05' \\\n     --header 'key: your-api-key' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi code dan pesan</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi diagnosa</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n     \"metaData\": \n         {\n             \"code\": \"200\",\n             \"message\": \"Sukses\"\n         },\n     \"response\": \n         {\n         \"diagnosa\": \n             [\n                 {\n                     \"kode\": \"A04\",\n                     \"nama\": \"A04 - Other bacterial intestinal infections\"\n                 }\n             ],\n         }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./bpjs_referensi.js",
    "groupTitle": "BPJS_Referensi"
  },
  {
    "type": "get",
    "url": "/referensi/dokter/{nama_dokter}",
    "title": "Refernsi Dokter (*)",
    "name": "dokter",
    "group": "BPJS_Referensi",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nama_dokter",
            "description": "<p>Nama Dokter terdaftar</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/referensi/dokter/Satroni%20Lawa' \\\n     --header 'key: your-api-key' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi code dan pesan</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi diagnosa</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n         \"metaData\":{\n            \"code\":\"200\",\n            \"message\":\"Sukses\"\n         },\n         \"response\":{\n            \"list\":[\n               {\n                  \"kode\":\"3\",\n                  \"nama\":\"Satro Jadhit, dr\"\n               },\n               {\n                  \"kode\":\"2\",\n                  \"nama\":\"Satroni Lawa, dr\"\n               }\n            ]\n         }\n      }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./bpjs_referensi.js",
    "groupTitle": "BPJS_Referensi"
  },
  {
    "type": "get",
    "url": "/referensi/dokter/pelayanan/{jns_pel}/tglpelayanan/{tgl_pel}/spesialis/{kd_spesialis}",
    "title": "Referensi Dokter DPJP",
    "name": "dpjp",
    "group": "BPJS_Referensi",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>Api Key terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "jns_pel",
            "description": "<p>jenis pelayanan terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "tgl_pel",
            "description": "<p>tanggal pelayanan terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "kd_spesialis",
            "description": "<p>kd_spesial pelayanan terdaftar</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/referensi/dokter/pelayanan/2/tglpelayanan/2018-01-01/spesialis/3215' \\\n     --header 'key: your-api-key' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi code dan pesan</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi dokter dpjp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n     \"metaData\": \n         {\n             \"code\": \"200\",\n             \"message\": \"Sukses\"\n         },\n     \"response\": \n         {\n         \"list\": \n             [\n                 {\n                     \"kode\": \"12345\",\n                     \"nama\":\"Satro Jadhit, dr\"\n                 },\n                 {\n                     \"kode\": \"54321\",\n                     \"nama\":\"Satroni Lawa, dr\"\n                 }\n             ],\n         }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./bpjs_referensi_tambahan.js",
    "groupTitle": "BPJS_Referensi"
  },
  {
    "type": "get",
    "url": "/referensi/kabupaten/provinsi/{kd_prov}",
    "title": "Referensi Kabupaten",
    "name": "kabupaten",
    "group": "BPJS_Referensi",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>Api Key terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "kd_prov",
            "description": "<p>kode provinsi terdaftar</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/referensi/kabupaten/provinsi/12 \\\n     --header 'key: your-api-key' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi code dan pesan</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi kabupaten</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n     \"metaData\": \n         {\n             \"code\": \"200\",\n             \"message\": \"Sukses\"\n         },\n     \"response\": \n         {\n         \"list\": \n             [\n                 {\n                     \"kode\": \"0227\",\n                     \"nama\":\"KAB. BADUNG\"\n                 },\n                 {\n                     \"kode\": \"0230\",\n                     \"nama\":\"KAB. BANGLI\"\n                 }\n             ],\n         }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./bpjs_referensi_tambahan.js",
    "groupTitle": "BPJS_Referensi"
  },
  {
    "type": "get",
    "url": "/referensi/kecamatan/kabupaten/{kd_kab}",
    "title": "Referensi Kecamatan",
    "name": "kecamatan",
    "group": "BPJS_Referensi",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>Api Key terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "kd_kab",
            "description": "<p>kode kabupaten terdaftar</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/referensi/kecamatan/kabupaten/0125 \\\n     --header 'key: your-api-key' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi code dan pesan</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi kecamatan</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n     \"metaData\": \n         {\n             \"code\": \"200\",\n             \"message\": \"Sukses\"\n         },\n     \"response\": \n         {\n         \"list\": \n             [\n                 {\n                     \"kode\": \"3139\",\n                     \"nama\":\"KUTA\"\n                 },\n                 {\n                     \"kode\": \"3135\",\n                     \"nama\":\"KUTA UTARA\"\n                 }\n             ],\n         }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./bpjs_referensi_tambahan.js",
    "groupTitle": "BPJS_Referensi"
  },
  {
    "type": "get",
    "url": "/referensi/poli/{kd_poli}",
    "title": "Referensi Poli",
    "name": "poli",
    "group": "BPJS_Referensi",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "kd_poli",
            "description": "<p>Kode Poli terdaftar</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/referensi/poli/ICU' \\\n     --header 'key: your-api-key' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi code dan pesan</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi diagnosa</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n  \"metaData\": {\n      \"code\": \"200\",\n      \"message\": \"Sukses\"\n  },\n  \"response\": {\n      \"poli\": [\n          {\n              \"kode\": \"ICU\",\n              \"nama\": \"Intensive Care Unit\"\n          }\n      ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./bpjs_referensi.js",
    "groupTitle": "BPJS_Referensi"
  },
  {
    "type": "get",
    "url": "/referensi/provinsi",
    "title": "Referensi Provinsi",
    "name": "provinsi",
    "group": "BPJS_Referensi",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>Api Key terdaftar</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/referensi/provinsi \\\n     --header 'key: your-api-key' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi code dan pesan</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi propinsi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n     \"metaData\": \n         {\n             \"code\": \"200\",\n             \"message\": \"Sukses\"\n         },\n     \"response\": \n         {\n         \"list\": \n             [\n                 {\n                     \"kode\": \"16\",\n                     \"nama\":\"Bali\"\n                 },\n                 {\n                     \"kode\": \"17\",\n                     \"nama\":\"Banten\"\n                 }\n             ],\n         }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./bpjs_referensi_tambahan.js",
    "groupTitle": "BPJS_Referensi"
  },
  {
    "type": "get",
    "url": "/rujukan/{no_rujukan}",
    "title": "Rujukan",
    "name": "rujukan",
    "group": "BPJS_Rujukan",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>Api Key terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "no_rujukan",
            "description": "<p>no rujukan  terdaftar</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/rujukan/030107010217Y001465' \\\n     --header 'key: your-api-key' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi code dan pesan</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi rujukan</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n     \"metaData\": \n         {\n             \"code\": \"200\",\n             \"message\": \"Sukses\"\n         },\n     \"response\": \n         {\n         \"rujukan\": {\n           \"diagnosa\": {\n              \"kode\": \"N40\",\n             \"nama\": \"Hyperplasia of prostate\"\n           },\n           \"keluhan\": \"kencing tidak puas\",\n           \"noKunjungan\": \"030107010217Y001465\",\n           \"pelayanan\": {\n              \"kode\": \"2\",\n              \"nama\": \"Rawat Jalan\"\n           },\n           \"peserta\": {\n              \"cob\": {\n                 \"nmAsuransi\": null,\n                 \"noAsuransi\": null,\n                 \"tglTAT\": null,\n                 \"tglTMT\": null\n              },\n              \"hakKelas\": {\n                 \"keterangan\": \"KELAS I\",\n                 \"kode\": \"1\"\n              },\n              \"informasi\": {\n                 \"dinsos\": null,\n                 \"noSKTM\": null,\n                 \"prolanisPRB\": null\n              },\n              \"jenisPeserta\": {\n                 \"keterangan\": \"PENERIMA PENSIUN PNS\",\n                 \"kode\": \"15\"\n              },\n              \"mr\": {\n                 \"noMR\": \"298036\",\n                 \"noTelepon\": null\n              },\n              \"nama\": \"MUSDIWAR,BA\",\n              \"nik\": null,\n              \"noKartu\": \"0000416382632\",\n              \"pisa\": \"2\",\n              \"provUmum\": {\n                 \"kdProvider\": \"03010701\",\n                 \"nmProvider\": \"SITEBA\"\n              },\n              \"sex\": \"L\",\n              \"statusPeserta\": {\n                 \"keterangan\": \"AKTIF\",\n                 \"kode\": \"0\"\n              },\n              \"tglCetakKartu\": \"2017-11-13\",\n              \"tglLahir\": \"1938-08-31\",\n              \"tglTAT\": \"2038-08-31\",\n              \"tglTMT\": \"1996-08-20\",\n              \"umur\": {\n                 \"umurSaatPelayanan\": \"78 tahun ,6 bulan ,6 hari\",\n                 \"umurSekarang\": \"79 tahun ,3 bulan ,18 hari\"\n              }\n           },\n           \"poliRujukan\": {\n              \"kode\": \"URO\",\n              \"nama\": \"UROLOGI\"\n           },\n           \"provPerujuk\": {\n              \"kode\": \"03010701\",\n              \"nama\": \"SITEBA\"\n           },\n           \"tglKunjungan\": \"2017-02-25\"\n       }\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./bpjs-rujukan.js",
    "groupTitle": "BPJS_Rujukan"
  },
  {
    "type": "get",
    "url": "/rujukan/list/perseta{no_nokartu}",
    "title": "Rujukan Multi",
    "name": "rujukan_multi",
    "group": "BPJS_Rujukan",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>Api Key terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "no_kartu",
            "description": "<p>no kartu peserta  terdaftar</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/rujukan/list/peserta/030107010217Y001465' \\\n     --header 'key: your-api-key' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi code dan pesan</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi rujukan multi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n     \"metaData\": \n         {\n             \"code\": \"200\",\n             \"message\": \"Sukses\"\n         },\n     \"response\": \n         {\n         \"rujukan\": {\n           \"diagnosa\": {\n              \"kode\": \"N40\",\n             \"nama\": \"Hyperplasia of prostate\"\n           },\n           \"keluhan\": \"kencing tidak puas\",\n           \"noKunjungan\": \"030107010217Y001465\",\n           \"pelayanan\": {\n              \"kode\": \"2\",\n              \"nama\": \"Rawat Jalan\"\n           },\n           \"peserta\": {\n              \"cob\": {\n                 \"nmAsuransi\": null,\n                 \"noAsuransi\": null,\n                 \"tglTAT\": null,\n                 \"tglTMT\": null\n              },\n              \"hakKelas\": {\n                 \"keterangan\": \"KELAS I\",\n                 \"kode\": \"1\"\n              },\n              \"informasi\": {\n                 \"dinsos\": null,\n                 \"noSKTM\": null,\n                 \"prolanisPRB\": null\n              },\n              \"jenisPeserta\": {\n                 \"keterangan\": \"PENERIMA PENSIUN PNS\",\n                 \"kode\": \"15\"\n              },\n              \"mr\": {\n                 \"noMR\": \"298036\",\n                 \"noTelepon\": null\n              },\n              \"nama\": \"MUSDIWAR,BA\",\n              \"nik\": null,\n              \"noKartu\": \"0000416382632\",\n              \"pisa\": \"2\",\n              \"provUmum\": {\n                 \"kdProvider\": \"03010701\",\n                 \"nmProvider\": \"SITEBA\"\n              },\n              \"sex\": \"L\",\n              \"statusPeserta\": {\n                 \"keterangan\": \"AKTIF\",\n                 \"kode\": \"0\"\n              },\n              \"tglCetakKartu\": \"2017-11-13\",\n              \"tglLahir\": \"1938-08-31\",\n              \"tglTAT\": \"2038-08-31\",\n              \"tglTMT\": \"1996-08-20\",\n              \"umur\": {\n                 \"umurSaatPelayanan\": \"78 tahun ,6 bulan ,6 hari\",\n                 \"umurSekarang\": \"79 tahun ,3 bulan ,18 hari\"\n              }\n           },\n           \"poliRujukan\": {\n              \"kode\": \"URO\",\n              \"nama\": \"UROLOGI\"\n           },\n           \"provPerujuk\": {\n              \"kode\": \"03010701\",\n              \"nama\": \"SITEBA\"\n           },\n           \"tglKunjungan\": \"2017-02-25\"\n       }\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./bpjs_rujukan_multi.js",
    "groupTitle": "BPJS_Rujukan"
  },
  {
    "type": "get",
    "url": "/rujukan/peserta/{no_kartu}",
    "title": "Rujukan Peserta",
    "name": "rujukanpeserta",
    "group": "BPJS_Rujukan",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>Api Key terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "no_kartu",
            "description": "<p>no kartu  terdaftar</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/rujukan/peserta/0000416382632' \\\n     --header 'key: your-api-key' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi code dan pesan</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi rujukan</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n     \"metaData\": \n         {\n             \"code\": \"200\",\n             \"message\": \"Sukses\"\n         },\n     \"response\": \n         {\n         \"rujukan\": {\n           \"diagnosa\": {\n              \"kode\": \"N40\",\n             \"nama\": \"Hyperplasia of prostate\"\n           },\n           \"keluhan\": \"kencing tidak puas\",\n           \"noKunjungan\": \"030107010217Y001465\",\n           \"pelayanan\": {\n              \"kode\": \"2\",\n              \"nama\": \"Rawat Jalan\"\n           },\n           \"peserta\": {\n              \"cob\": {\n                 \"nmAsuransi\": null,\n                 \"noAsuransi\": null,\n                 \"tglTAT\": null,\n                 \"tglTMT\": null\n              },\n              \"hakKelas\": {\n                 \"keterangan\": \"KELAS I\",\n                 \"kode\": \"1\"\n              },\n              \"informasi\": {\n                 \"dinsos\": null,\n                 \"noSKTM\": null,\n                 \"prolanisPRB\": null\n              },\n              \"jenisPeserta\": {\n                 \"keterangan\": \"PENERIMA PENSIUN PNS\",\n                 \"kode\": \"15\"\n              },\n              \"mr\": {\n                 \"noMR\": \"298036\",\n                 \"noTelepon\": null\n              },\n              \"nama\": \"MUSDIWAR,BA\",\n              \"nik\": null,\n              \"noKartu\": \"0000416382632\",\n              \"pisa\": \"2\",\n              \"provUmum\": {\n                 \"kdProvider\": \"03010701\",\n                 \"nmProvider\": \"SITEBA\"\n              },\n              \"sex\": \"L\",\n              \"statusPeserta\": {\n                 \"keterangan\": \"AKTIF\",\n                 \"kode\": \"0\"\n              },\n              \"tglCetakKartu\": \"2017-11-13\",\n              \"tglLahir\": \"1938-08-31\",\n              \"tglTAT\": \"2038-08-31\",\n              \"tglTMT\": \"1996-08-20\",\n              \"umur\": {\n                 \"umurSaatPelayanan\": \"78 tahun ,6 bulan ,6 hari\",\n                 \"umurSekarang\": \"79 tahun ,3 bulan ,18 hari\"\n              }\n           },\n           \"poliRujukan\": {\n              \"kode\": \"URO\",\n              \"nama\": \"UROLOGI\"\n           },\n           \"provPerujuk\": {\n              \"kode\": \"03010701\",\n              \"nama\": \"SITEBA\"\n           },\n           \"tglKunjungan\": \"2017-02-25\"\n       }\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./bpjs-rujukan.js",
    "groupTitle": "BPJS_Rujukan"
  },
  {
    "type": "get",
    "url": "/sep/{parameter}",
    "title": "Cari SEP",
    "name": "cariSep",
    "group": "BPJS_SEP",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "no_sep",
            "description": "<p>peserta</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/sep/0301R0011017V000015' \\\n     --Content-Type 'application/json' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi code dan pesan</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi SEP</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n   \"metaData\": {\n      \"code\": \"200\",\n      \"message\": \"Sukses\"\n   },\n   \"response\": {\n      \"catatan\": \"test\",\n      \"diagnosa\": \"Cholera due to Vibrio cholerae 01, biovar eltor\",\n      \"jnsPelayanan\": \"Rawat INap\",\n      \"kelasRawat\": \"1\",\n      \"noSep\": \"0301R0011017V000015\",\n      \"penjamin\": null,\n      \"peserta\": {\n         \"asuransi\": null,\n         \"hakKelas\": \"Kelas 2\",\n         \"jnsPeserta\": \"PNS Pusat\",\n         \"kelamin\": \"L\",\n         \"nama\": \"SRI MULYONO\",\n         \"noKartu\": \"0001267311161\",\n         \"noMr\": \"123456\",\n         \"tglLahir\": \"1982-01-05\"\n      },\n      \"poli\": \"Poli Penyakit Dalam\",\n      \"poliEksekutif\": \"0\",\n      \"tglSep\": \"2017-10-30\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./bpjs_cari_sep.js",
    "groupTitle": "BPJS_SEP"
  },
  {
    "type": "post",
    "url": "/sep/insert",
    "title": "Cetak SEP",
    "name": "cetakSep",
    "group": "BPJS_SEP",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>request json</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request POST \\\n     --url 'https://api.rsudkraton.com/sep/insert' \\\n     --Content-Type 'application/json' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi code dan pesan</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi SEP</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Sample:",
          "content": "                                              \n{\n   \"request\": {\n      \"t_sep\": {\n         \"noKartu\": \"0001112230666\",\n         \"tglSep\": \"2017-10-18\",\n         \"ppkPelayanan\": \"0301R001\",\n         \"jnsPelayanan\": \"2\",\n         \"klsRawat\": \"3\",\n         \"noMR\": \"123456\",\n         \"rujukan\": {\n            \"asalRujukan\": \"1\",\n            \"tglRujukan\": \"2017-10-17\",\n            \"noRujukan\": \"1234567\",\n            \"ppkRujukan\": \"00010001\"\n         },\n         \"catatan\": \"test\",\n         \"diagAwal\": \"A00.1\",\n         \"poli\": {\n            \"tujuan\": \"INT\",\n            \"eksekutif\": \"0\"\n         },\n         \"cob\": {\n            \"cob\": \"0\"\n         },\n         \"katarak\": {\n            \"katarak\": \"0\"\n         },\n         \"jaminan\": {\n            \"lakaLantas\": \"1\",\n            \"penjamin\": {\n               \"penjamin\" : \"1\",\n               \"tglKejadian\" : \"2018-08-01\",\n               \"keterangan\" : \"kll\",\n               \"suples\" : {\n                   \"suplesi\" : \"0\", \n                   \"noSepSuplesi\" : \"0301R0010718V000001\", \n                   \"lokasiLaka\" : {\n                       \"kdPropinsi\" : \"03\", \n                       \"kdKabupaten\" : \"0050\", \n                       \"kdKecamatan\" : \"0574\" \n                   }\n               }\n            }\n         },\n         \"skdp\": {\n           \"noSurat\" : \"000002\", \n           \"kdDPJP\" : \"31661\", \n         }\n         \"noTelp\": \"08191999999\",\n         \"user\": \"Admin CS\"\n      }\n   }\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n   \"metaData\": {\n      \"code\": \"200\",\n      \"message\": \"Sukses\"\n   },\n   \"response\": {\n      \"sep\": {\n         \"catatan\": \"test\",\n         \"diagnosa\": \"A00.1 - Cholera due to Vibrio cholerae 01, biovar eltor\",\n         \"jnsPelayanan\": \"R.Inap\",\n         \"kelasRawat\": \"1\",\n         \"noSep\": \"0301R0011117V000008\",\n         \"penjamin\": \"-\",\n         \"peserta\": {\n            \"asuransi\": \"-\",\n            \"hakKelas\": \"Kelas 1\",\n            \"jnsPeserta\": \"PNS PUSAT\",\n            \"kelamin\": \"Laki-Laki\",\n            \"nama\": \"ZIYADUL\",\n            \"noKartu\": \"0001112230666\",\n            \"noMr\": \"123456\",\n            \"tglLahir\": \"2008-02-05\"\n         },\n         \"informasi:\": {\n            \"Dinsos\":null,\n            \"prolanisPRB\":null,\n            \"noSKTM\":null\n         },\n         \"poli\": \"-\",\n         \"poliEksekutif\": \"-\",\n         \"tglSep\": \"2017-10-12\"\n      }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./bpjs_cetak_sep.js",
    "groupTitle": "BPJS_SEP"
  },
  {
    "type": "delete",
    "url": "/sep/delete",
    "title": "Delete SEP",
    "name": "deleteSep",
    "group": "BPJS_SEP",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>request json</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request DELETE \\\n     --url 'https://api.rsudkraton.com/sep/delete' \\\n     --Content-Type 'application/json' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi code dan pesan</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi SEP</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Sample:",
          "content": "                                                \n{\n   \"request\": {\n      \"t_sep\": {\n         \"noSep\": \"0301R0011017V000007\",\n         \"user\": \"Coba Ws\"\n      }\n   }\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "\n {\n   \"metaData\": {\n          \"code\": \"200\"\n          \"message\": \"OK\"\n      }\n  \"response\": \"0301R0011017V000007\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./bpjs_delete_sep.js",
    "groupTitle": "BPJS_SEP"
  },
  {
    "type": "get",
    "url": "/sep/jasaraharja/suplesi/{no_kartu}/tglpel/{tgl_pel}",
    "title": "Suplesi Jasa Raharja",
    "name": "suplesiJasaRaharja",
    "group": "BPJS_SEP",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "api_key",
            "description": "<p>api key terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "no_kartu",
            "description": "<p>nomer kartu peserta terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "tgl_pel",
            "description": "<p>tanggal pelayanan terdaftar</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/sep/jasaraharja/suplesi/0301R0011017V000015/tglpel/2018-08-01' \\\n     --Content-Type 'application/json' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi code dan pesan</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi Potensi Sep sebagai suplesi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n   \"metaData\": {\n      \"code\": \"200\",\n      \"message\": \"Sukses\"\n   },\n   \"response\": {\n     \"jaminan\": \n        [\n            {\n                \"noRegister\": \"1234\",\n                \"noSep\": \"0301R0110818V000008\",\n                \"noSepAwal\": \"0301R0110818V000008\",\n                \"noSuratJaminan\": \"-\",\n                \"tglKejadian\": \"2018-08-06\",\n                \"tglSep\": \"2018-08-08\"                                    \n            },\n                            {\n                \"noRegister\": \"44222\",\n                \"noSep\": \"0301R0110818V000018\",\n                \"noSepAwal\": \"0301R0110818V000008\",\n                \"noSuratJaminan\": \"-\",\n                \"tglKejadian\": \"2018-08-06\",\n                \"tglSep\": \"2018-08-08\"                                    \n            }    \n        ],\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./bpjs_cari_sep.js",
    "groupTitle": "BPJS_SEP"
  },
  {
    "type": "put",
    "url": "/sep/update",
    "title": "Update SEP",
    "name": "updateSep",
    "group": "BPJS_SEP",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>request json</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request PUT \\\n     --url 'https://api.rsudkraton.com/sep/update' \\\n     --Content-Type 'application/json' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi code dan pesan</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi SEP</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Sample:",
          "content": "                                                  \n                                               \n{\n   \"request\": {\n      \"t_sep\": {\n         \"noSep\": \"0301R0011117V000008\",\n         \"klsRawat\": \"1\",\n         \"noMR\": \"123456\",\n         \"rujukan\": {\n            \"asalRujukan\": \"1\",\n            \"tglRujukan\": \"2017-10-23\",\n            \"noRujukan\": \"1234567\",\n            \"ppkRujukan\": \"00010001\"\n         },\n         \"catatan\": \"test\",\n         \"diagAwal\": \"B00.1\",\n         \"poli\": {\n            \"eksekutif\": \"0\"\n         },\n         \"cob\": {\n            \"cob\": \"0\"\n         },\n         \"katarak\": {\n            \"katarak\": \"1\"\n         },\n         \"jaminan\": {\n                \"lakaLantas\": \"1\",\n                \"penjamin\": {\n                   \"penjamin\" : \"1\",\n                   \"tglKejadian\" : \"2018-08-01\",\n                   \"keterangan\" : \"kll\",\n                   \"suples\" : {\n                       \"suplesi\" : \"0\", \n                       \"noSepSuplesi\" : \"0301R0010718V000001\", \n                       \"lokasiLaka\" : {\n                           \"kdPropinsi\" : \"03\", \n                           \"kdKabupaten\" : \"0050\", \n                           \"kdKecamatan\" : \"0574\" \n                       }\n                   }\n                }\n             },\n         \"noTelp\": \"081919999\",\n         \"user\": \"Coba Ws\"\n      }\n   }\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "\n{\n   \"metaData\": {\n       \"code\": \"200\",\n       \"message\": \"Sukses\"\n    },\n    \"response\": \"0301R0011117V000008\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./bpjs_update_sep.js",
    "groupTitle": "BPJS_SEP"
  },
  {
    "type": "put",
    "url": "/sep/updtglplg",
    "title": "Update Pulang",
    "name": "updtglplg",
    "group": "BPJS_SEP",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>request json</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request PUT \\\n     --url 'https://api.rsudkraton.com/sep/updtglplg' \\\n     --Content-Type 'application/json' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi code dan pesan</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi SEP</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Sample:",
          "content": "                                                  \n                                               \n{\n   \"request\": {\n      \"t_sep\": \n       {\n           \"noSep\":\"0301R00105160000569\",\n           \"tglPlg\":\"2016-06-12 12:32:00\",\n           \"ppkPelayanan\":\"1105R001\"\n       }\n   }\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "\n{\n   \"metaData\": {\n       \"code\": \"200\",\n       \"message\": \"Ok\"\n    },\n    \"response\": \"0301R00105160000569\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./bpjs_update_plg_sep.js",
    "groupTitle": "BPJS_SEP"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/doc/main.js",
    "group": "D__PROJECT_dokumentasi_doc_doc_main_js",
    "groupTitle": "D__PROJECT_dokumentasi_doc_doc_main_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "D__PROJECT_dokumentasi_doc_main_js",
    "groupTitle": "D__PROJECT_dokumentasi_doc_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/getalldokterpengganti",
    "title": "Semua Dokter Pengganti",
    "name": "getAllDokterPengganti",
    "group": "Dokter",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "api_key",
            "description": "<p>Api Key terdaftar</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/getalldokterpengganti' \\\n     --header 'key: your-api-key'",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "curent_page",
            "description": "<p>Status halaman</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": "<p>Informasi Dokter pengganti</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"current_page\": 1,\n    \"data\": [\n         \"Kd_Izin\": 1,\n         \"Kd_Pegawai\": \"123456\",\n         \"Kd_Sub_Unit\": 1,\n         \"tanggal\": \"2018-04-04\"\n         \"Status_Pergantian\": 1,\n         \"keterangan\": \"Poli tutup dokter sedang ijin\"\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./dokter_pengganti.js",
    "groupTitle": "Dokter"
  },
  {
    "type": "get",
    "url": "/getdokterpengganti/{kd_poli}/{tgl_reg}",
    "title": "Dokter Pengganti",
    "name": "getDokterPengganti",
    "group": "Dokter",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>Api Key terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "kd_sub_unit",
            "description": "<p>Kode sub unit (Poliklinik)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "tgl_reg",
            "description": "<p>Tanggal registrasi (Tanggal registrasi)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/getdokterpengganti/1/2018-1-1' \\\n     --header 'key: your-api-key'",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "booelan",
            "optional": false,
            "field": "ok",
            "description": "<p>Status sukses</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "hasil",
            "description": "<p>Informasi Dokter pengganti</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"ok\": true,\n    \"hasil\": [\n         \"Kd_Pegawai\": \"123456\",\n         \"Kd_Sub_Unit\": 1,\n         \"Kd_Hari\": 2,\n         \"Jumlah_Kunjungan\": 50,\n         \"nama_pegawai\": \"dr Agustina Angelita\"\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./dokter_pengganti.js",
    "groupTitle": "Dokter"
  },
  {
    "type": "get",
    "url": "/getjadwaldokter/{tanggal}",
    "title": "Cek Jadwal Dokter",
    "name": "getJadwalDokter",
    "group": "Dokter",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "api_key",
            "description": "<p>Api Key terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "tanggal",
            "description": "<p>Tanggal registrasi (Tanggal registrasi)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/getjadwaldokter/2018-1-1' \\\n     --header 'key: your-api-key'",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "curent_page",
            "description": "<p>Status halaman</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": "<p>Informasi Dokter pengganti</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n   \"ok\": true,\n   \"hasil\": [\n       {\n         \"Kd_Pegawai\": \"00000001\",\n         \"Kd_Sub_Unit\": 1,\n         \"nama_sub_unit\": \"Klinik Umum\",\n         \"Kd_Hari\": 3,\n         \"Jumlah_Kunjungan\": 60,\n         \"nama_pegawai\": \"dr Apriliani Retno Nugrahini -\"\n       }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./dokter_pengganti.js",
    "groupTitle": "Dokter"
  },
  {
    "type": "get",
    "url": "/getallharilibur",
    "title": "Semua Hari Libur",
    "name": "getallharilibur",
    "group": "Hari_Libur",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>Api Key terdaftar</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/getallharilibur' \\\n     --Content-Type 'application/json' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi code dan pesan</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi Semua Hari libur</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n   \"ok\": true,\n    \"hasil\": [\n      {\n       \"tgl_libur\": \"2018-05-07\",\n       \"keterangan\": \"Kenaikan Yesus Krisus\"\n       },\n       {\n       \"tgl_libur\": \"2018-05-11\",\n       \"keterangan\": \"asgdahsdg\"\n       },\n       {\n       \"tgl_libur\": \"2018-05-12\",\n       \"keterangan\": null\n       },\n       {\n       \"tgl_libur\": \"2018-05-14\",\n       \"keterangan\": null\n       },\n       {\n       \"tgl_libur\": \"2018-05-15\",\n       \"keterangan\": null\n       }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./hari_libur.js",
    "groupTitle": "Hari_Libur"
  },
  {
    "type": "get",
    "url": "/getharilibur/{tanggal}",
    "title": "Cek Hari Libur",
    "name": "getharilibur",
    "group": "Hari_Libur",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>Api Key terdaftar</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/getharilibur/2018-05-07' \\\n     --Content-Type 'application/json' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi code dan pesan</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi Hari libur</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n  \"ok\": true,\n   \"hasil\": \n    {\n     \"tgl_libur\": \"2018-05-07\",\n     \"keterangan\": \"Kenaikan Yesus Krisus\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./hari_libur.js",
    "groupTitle": "Hari_Libur"
  },
  {
    "type": "get",
    "url": "/getlistregister/{no_RM}",
    "title": "List Register",
    "name": "getListRegister",
    "group": "List_Register",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>Api Key terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "no_RM",
            "description": "<p>Kode RM (RM)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/getlistregister/222222' \\\n     --header 'key: your-api-key'",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "booelan",
            "optional": false,
            "field": "ok",
            "description": "<p>Status sukses</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "hasil",
            "description": "<p>Informasi List history register</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"ok\": true,\n    \"hasil\": [\n         {\n             \"no_reg\": \"012704180001\",\n             \"no_RM\": \"222222\",\n             \"status_keluar\": 0,\n             \"waktu\": \"07:53:32\",\n             \"tgl_reg\": \"2018-04-27 00:00:00\",\n             \"nama_sub_unit\": \"Spesialis Dalam 1\"\n          },\n          {\n             \"no_reg\": \"012604180011\",\n             \"no_RM\": \"222222\",\n             \"status_keluar\": 0,\n             \"waktu\": \"13:38:45\",\n             \"tgl_reg\": \"2018-04-26 00:00:00\",\n             \"nama_sub_unit\": \"Spesialis THT\"\n          },\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./list_register.js",
    "groupTitle": "List_Register"
  },
  {
    "type": "post",
    "url": "/sendpasien",
    "title": "Login Pasien",
    "name": "GetUser",
    "group": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>Api Key terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "no_RM",
            "description": "<p>Nomer rekam medis terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "tgl_lahir",
            "description": "<p>Tanggal lahir pasien terdaftar</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request POST \\\n     --url 'https://api.rsudkraton.com/sendpasien' \\\n     --header 'content-type: application/x-www-form-urlencoded' \\\n     --header 'key: your-api-key'\n     --data 'no_RM=123456&tgl_lahir=1992-2-1'",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "booelan",
            "optional": false,
            "field": "ok",
            "description": "<p>Status sukses</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "hasil",
            "description": "<p>Informasi pasien login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"ok\": true,\n    \"hasil\": {\n        \"no_RM\": \"123456\",\n        \"nama_pasien\": \"AGUS MULYANI\",\n        \"tgl_lahir\": \"1992-2-1\",\n        \"jns_kel\": 1,\n        \"alamat\": \"Desa Sijeruk RT2 RW3\",\n        \"kd_kelurahan\": 123,\n        \"jenis_pasien\": 0,\n        \"cara_bayar\": [\n            {\n                \"kd_cara_bayar\": 2,\n                \"keterangan\": \"Asuransi Lain\",\n            },\n            {\n                \"kd_cara_bayar\": 2,\n                \"keterangan\": \"Asuransi Lain\",\n            }\n        ]\n    }    \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./login.js",
    "groupTitle": "Login"
  },
  {
    "type": "get",
    "url": "/getallpasien",
    "title": "Semua Pasien",
    "name": "getAllPasien",
    "group": "Pasien",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>Api Key terdaftar</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/getallpasien' \\\n     --header 'key: your-api-key'",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "current_page",
            "description": "<p>Status halaman</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": "<p>Informasi pasien</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"current_page\": 1,\n    \"data\": [\n         \"no_RM\": 123456,\n         \"nama_pasien\": \"Agus Dermawan\"\n         \"tempat_lahir\": \"Pekalongan\",\n         \"tgl_lahir\": \"1999-01-01 00:00:00\",\n         \"jns_kel\": 0,\n         \"jenis_pasien\": 1,\n         \"alamat\": \"PASIR SARI RT 4/1  PKL\",\n         \"nama_kelurahan\": \"Panjang Wetan\"\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./pasien.js",
    "groupTitle": "Pasien"
  },
  {
    "type": "get",
    "url": "/getpasien/{no_RM}",
    "title": "Cek Pasien",
    "name": "getPasien",
    "group": "Pasien",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "api_key",
            "description": "<p>Api Key terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "no_RM",
            "description": "<p>Nomor rekam medis</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/getpasien/111111' \\\n     --header 'key: your-api-key'",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "booelan",
            "optional": false,
            "field": "ok",
            "description": "<p>Status sukses</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>Informasi pasien</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"ok\": true,\n    \"hasil\": [\n         \"no_RM\": 123456,\n         \"nama_pasien\": \"Agus Dermawan\"\n         \"tempat_lahir\": \"Pekalongan\",\n         \"tgl_lahir\": \"1999-01-01 00:00:00\",\n         \"jns_kel\": 0,\n         \"jenis_pasien\": 1,\n         \"alamat\": \"PASIR SARI RT 4/1  PKL\",\n         \"nama_kelurahan\": \"Panjang Wetan\"\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./pasien.js",
    "groupTitle": "Pasien"
  },
  {
    "type": "get",
    "url": "/getquotapoli/{tanggal}/{kd_sub_unit}",
    "title": "Cek Kuota Poli",
    "name": "getquotapoli",
    "group": "Quota",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tanggal",
            "description": "<p>pendaftaran</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "kd_sub_unit",
            "description": "<p>kd sub unit yang terpilih</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/getquotapoli/2018-05-23/1' \\\n     --Content-Type 'application/json' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi code dan pesan</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi Quota Poli</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n   \"ok\": true,\n    \"hasil\": {\n        \"Kuota\": \"3\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./quota_poli.js",
    "groupTitle": "Quota"
  },
  {
    "type": "get",
    "url": "/getrawatjalan/{no_reg}",
    "title": "Cek Rawat Jalan",
    "name": "getRawatJalan",
    "group": "Rawat_Jalan",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>Api Key terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "no_reg",
            "description": "<p>No registrasi pasien</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/getrawatjalan/00000000124' \\\n     --header 'key: your-api-key'",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "current_page",
            "description": "<p>Status halaman</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": "<p>Informasi Tarif karcis</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n   \"ok\": true,\n   \"hasil\": \n       {\n         \"no_reg\": \"00000000124\",\n         \"no_RM\": \"360418\",\n         \"kd_poliklinik\": 33,\n         \"kd_cara_kunjungan\": 1,\n         \"status_kunjungan\": 0,\n         \"jns_kasus\": 1,\n         \"waktu_anamnesa\": \"2015-01-01 09:33:27\",\n         \"uraian_anamnesa\": \"\",\n         \"terapi\": \"\",\n         \"status_proses\": 1,\n         \"kd_dokter\": \"00000047\",\n         \"status_berkas\": \"0\",\n         \"Status_Diagnosa\": \"1\",\n         \"no_reg_tahunan\": \"2015.000001\",\n         \"Status_Tambah_Diagnosa\": 1,\n         \"Waktu_Dokumen_Keluar\": null,\n         \"Waktu_Dokumen_Kembali\": null,\n         \"Reg_SMS\": null\n       }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./rawat_jalan.js",
    "groupTitle": "Rawat_Jalan"
  },
  {
    "type": "post",
    "url": "/sendregister",
    "title": "Registrasi Pasien",
    "name": "SendPasien",
    "group": "Registrasi",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>Api Key terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "no_reg",
            "optional": false,
            "field": "no_reg",
            "description": "<p>Nomer registrasi medis terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "kd_sub_unit",
            "optional": false,
            "field": "kd_sub_unit",
            "description": "<p>Kode Klinik terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "no_RM",
            "optional": false,
            "field": "no_RM",
            "description": "<p>No Reka Medis terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "tgl_reg",
            "optional": false,
            "field": "tgl_reg",
            "description": "<p>Tanggal registrasi</p>"
          },
          {
            "group": "Parameter",
            "type": "waktu",
            "optional": false,
            "field": "waktu",
            "description": "<p>Waktu registrasi&amp;123456789124$%^&amp;kd+su_su</p>"
          },
          {
            "group": "Parameter",
            "type": "kd_cara_bayar",
            "optional": false,
            "field": "kd_cara_bayar",
            "description": "<p>KD Bayar Pasien</p>"
          },
          {
            "group": "Parameter",
            "type": "user_id",
            "optional": false,
            "field": "user_id",
            "description": "<p>User Admin pendaftaran</p>"
          },
          {
            "group": "Parameter",
            "type": "kd_asal_pasien",
            "optional": false,
            "field": "kd_asal_pasien",
            "description": "<p>Kd Pasien registrasi</p>"
          },
          {
            "group": "Parameter",
            "type": "kd_pegawai",
            "optional": false,
            "field": "kd_pegawai",
            "description": "<p>Kd Dokter terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "no_telp",
            "optional": false,
            "field": "no_telp",
            "description": "<p>No Telp pasien pendaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "kd_tarif",
            "optional": false,
            "field": "kd_tarif",
            "description": "<p>Kd Tarif Poli terdaftar</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request POST \\\n     --url 'https://api.rsudkraton.com/sendregister' \\\n     --header 'content-type: application/x-www-form-urlencoded' \\\n     --header 'key: your-api-key'\n     --data 'no_RM=123456&no_reg=123456789124&kd_sub_unit=2&no_RM=123456&tgl_reg=2018-06-12& \\\n             waktu=11:22:11&kd_cara_bayar=1&user_id=0003&kd_asal_pasien=3&kd_pegawai=000023&no_telp=08825468&kd_tarif=33'",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "booelan",
            "optional": false,
            "field": "ok",
            "description": "<p>Status sukses</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "hasil",
            "description": "<p>Informasi registrasi pasien</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"ok\": true,\n    \"hasil\": {\n        \"no_antrian\": \"1\",\n        \"nama_poli\": \"Poli Umum\"\n    }    \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./registrasi_pasien.js",
    "groupTitle": "Registrasi"
  },
  {
    "type": "put",
    "url": "/updateregister",
    "title": "Update Registrasi",
    "name": "UpdatePasien",
    "group": "Registrasi",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>Api Key terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "no_reg",
            "optional": false,
            "field": "no_reg",
            "description": "<p>Nomer registrasi medis terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "no_RM",
            "optional": false,
            "field": "no_RM",
            "description": "<p>No Reka Medis terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "no_SJP",
            "optional": false,
            "field": "no_SJP",
            "description": "<p>No SEP</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request PUT \\\n     --url 'https://api.rsudkraton.com/updateregister' \\\n     --header 'content-type: application/x-www-form-urlencoded' \\\n     --header 'key: your-api-key' \\\n     --data 'no_RM=123456&no_reg=123456789124&no_SJP=2JI3J3K123456'",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "booelan",
            "optional": false,
            "field": "ok",
            "description": "<p>Status sukses</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "hasil",
            "description": "<p>Informasi registrasi pasien</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"ok\": true,\n    \"hasil\": {\n        \"no_SJP\": \"success\",\n    }    \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./registrasi_pasien.js",
    "groupTitle": "Registrasi"
  },
  {
    "type": "post",
    "url": "/rujukaninternal/{no_rujukan}",
    "title": "Rujukan Internal",
    "name": "rujukaninternal",
    "group": "Rujukan",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>Api Key terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "no_rujukan",
            "description": "<p>no rujukan  terdaftar</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request POST \\\n     --url 'https://api.rsudkraton.com/rujukannternal/030107010217Y001465' \\\n     --header 'key: your-api-key' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi code dan pesan</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi rujukan</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n     \"metaData\": \n         {\n             \"code\": \"200\",\n             \"message\": \"Sukses\"\n         },\n     \"response\": \n         {\n         \"rujukan\": {\n           \"diagnosa\": {\n              \"kode\": \"N40\",\n             \"nama\": \"Hyperplasia of prostate\"\n           },\n           \"keluhan\": \"kencing tidak puas\",\n           \"noKunjungan\": \"030107010217Y001465\",\n           \"pelayanan\": {\n              \"kode\": \"2\",\n              \"nama\": \"Rawat Jalan\"\n           },\n           \"peserta\": {\n              \"cob\": {\n                 \"nmAsuransi\": null,\n                 \"noAsuransi\": null,\n                 \"tglTAT\": null,\n                 \"tglTMT\": null\n              },\n              \"hakKelas\": {\n                 \"keterangan\": \"KELAS I\",\n                 \"kode\": \"1\"\n              },\n              \"informasi\": {\n                 \"dinsos\": null,\n                 \"noSKTM\": null,\n                 \"prolanisPRB\": null\n              },\n              \"jenisPeserta\": {\n                 \"keterangan\": \"PENERIMA PENSIUN PNS\",\n                 \"kode\": \"15\"\n              },\n              \"mr\": {\n                 \"noMR\": \"298036\",\n                 \"noTelepon\": null\n              },\n              \"nama\": \"MUSDIWAR,BA\",\n              \"nik\": null,\n              \"noKartu\": \"0000416382632\",\n              \"pisa\": \"2\",\n              \"provUmum\": {\n                 \"kdProvider\": \"03010701\",\n                 \"nmProvider\": \"SITEBA\"\n              },\n              \"sex\": \"L\",\n              \"statusPeserta\": {\n                 \"keterangan\": \"AKTIF\",\n                 \"kode\": \"0\"\n              },\n              \"tglCetakKartu\": \"2017-11-13\",\n              \"tglLahir\": \"1938-08-31\",\n              \"tglTAT\": \"2038-08-31\",\n              \"tglTMT\": \"1996-08-20\",\n              \"umur\": {\n                 \"umurSaatPelayanan\": \"78 tahun ,6 bulan ,6 hari\",\n                 \"umurSekarang\": \"79 tahun ,3 bulan ,18 hari\"\n              }\n           },\n           \"poliRujukan\": {\n              \"kode\": \"URO\",\n              \"nama\": \"UROLOGI\"\n           },\n           \"provPerujuk\": {\n              \"kode\": \"03010701\",\n              \"nama\": \"SITEBA\"\n           },\n           \"tglKunjungan\": \"2017-02-25\"\n       }\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./rujukaninternal.js",
    "groupTitle": "Rujukan"
  },
  {
    "type": "get",
    "url": "/getallsubunit",
    "title": "Semua Sub Unit",
    "name": "getAllSubUnit",
    "group": "Sub_Unit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>Api Key terdaftar</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/getallsubunit/' \\\n     --header 'key: your-api-key'",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "curent_page",
            "description": "<p>Status halaman</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": "<p>Informasi Sub Unit</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"current_page\": 1,\n    \"data\": [\n         \"kd_sub_unit\": 1,\n         \"kd_unit\": 1,\n         \"nama_sub_unit\": Umum,\n         \"keterangan\": \"\"\n         \"menuname\": null,\n         \"enable\": 1,\n         \"no_perkiraan\": \"\",\n         \"PemeriksaanNol\": \"0\",\n         \"Kd_Sub_Unit_SMS\": \"0\",\n         \"Status_SIMRS_Penunjang\": \"0\",\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./subunit.js",
    "groupTitle": "Sub_Unit"
  },
  {
    "type": "get",
    "url": "/getsubunit/kd_sub_unit",
    "title": "Cek Sub Unit",
    "name": "getSubUnit",
    "group": "Sub_Unit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>Api Key terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "kd_sub_unit",
            "description": "<p>Kode sub unit (Poliklinik)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/getsubunit/1' \\\n     --header 'key: your-api-key'",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "booelan",
            "optional": false,
            "field": "ok",
            "description": "<p>Status sukses</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "hasil",
            "description": "<p>Informasi Nama poliklinik</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"ok\": true,\n    \"hasil\": [\n         \"kd_sub_unit\": 1,\n         \"kd_unit\": 1,\n         \"nama_sub_unit\": \"Umum\",\n         \"keterangan\": \"umum\",\n         \"menuname\": null,\n         \"enable\": 1,\n         \"no_perkiraan\": \"23942348293\",\n         \"PemeriksaanNol\": \"0\",\n         \"Kd_Sub_Unit_SMS\": \"021\",\n         \"Status_SIMRS_Penunjang\": null\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./subunit.js",
    "groupTitle": "Sub_Unit"
  },
  {
    "type": "get",
    "url": "/getnotagihan/{no_tagihan}",
    "title": "No Tagihan",
    "name": "no_tagihan",
    "group": "Tagihan",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "no_tagihan",
            "description": "<p>peserta</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/getnotagihan/11017V000015' \\\n     --Content-Type 'application/json' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi code dan pesan</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi No Bukti</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n   \"ok\": true,\n    \"hasil\": {\n        \"no_bukti\": \"1\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./no_tagihan.js",
    "groupTitle": "Tagihan"
  },
  {
    "type": "get",
    "url": "/tanggalserver",
    "title": "Tanggal server",
    "name": "tanggalserver",
    "group": "Tanggal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "api_key",
            "description": "<p>api key</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/sep/0301R0011017V000015' \\\n     --Content-Type 'application/json' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi ok</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi tanggal dan waktu</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n  \"ok\": \"200\",\n  \"tanggal\": \"2018-01-01\",\n  \"waktu\": \"00:00:00\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./tanggal_server.js",
    "groupTitle": "Tanggal"
  },
  {
    "type": "get",
    "url": "/getalltarifkarcis",
    "title": "Semua Tarif",
    "name": "getAllTarifKarcis",
    "group": "Tarif_Karcis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>Api Key terdaftar</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/getalltarifkarcis' \\\n     --header 'key: your-api-key'",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "current_page",
            "description": "<p>Status halaman</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": "<p>Informasi Tarif karcis</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n[\n     {\n         \"kd_sub_unit\": 1,\n         \"js\": 18000,\n         \"nama_sub_unit\": \"Klinik Umum\",\n         \"ba\": 0,\n         \"jp\": 22000,\n         \"harga\": 40000,\n         \"Rek_P\": \"4101010030010001\",\n         \"idx_Tarif\": 13371,\n         \"kd_tarif\": \"T150000014\",\n         \"nama_tarif\": \"Pemeriksaan Poliklinik Dokter Umum\"\n     }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./tarif_karcis.js",
    "groupTitle": "Tarif_Karcis"
  },
  {
    "type": "get",
    "url": "/gettarifkarcis/kd_sub_unit",
    "title": "Cek Tarif Poli",
    "name": "getTarifKarcis",
    "group": "Tarif_Karcis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>Api Key terdaftar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "kd_sub_unit",
            "description": "<p>Nomor sub unit (poliklinik)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/gettarifkarcis/4' \\\n     --header 'key: your-api-key'",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "booelan",
            "optional": false,
            "field": "ok",
            "description": "<p>Status sukses</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>Informasi pasien</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n  \"ok\": true,\n  \"hasil\": {\n     \"kd_sub_unit\": 4,\n     \"js\": 18000,\n     \"nama_sub_unit\": \"Spesialis Mata\",\n     \"ba\": 0,\n     \"jp\": 36000,\n     \"harga\": 54000,\n     \"Rek_P\": \"4101010010010001\",\n     \"idx_Tarif\": 13381,\n     \"kd_tarif\": \"T150000024\",\n     \"nama_tarif\": \"Pemeriksaan Poliklinik Dokter Mata\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./tarif_karcis.js",
    "groupTitle": "Tarif_Karcis"
  },
  {
    "type": "post",
    "url": "/user/create",
    "title": "Get Data Registrasi User",
    "name": "getUserApi",
    "group": "UserAPI",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nama",
            "description": "<p>Nama pengguna</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username pengguna</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email pengguna</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password pengguna</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "kota",
            "description": "<p>Kota Asal pengguna</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request GET \\\n     --url 'https://api.rsudkraton.com/user/create' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "ok",
            "description": "<p>Status registrasi</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "pesan",
            "description": "<p>registrasi sukses</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n        \"oke\": true,\n        \"pesan\": \"Berhasil Registrasi\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./registrasi_user_api.js",
    "groupTitle": "UserAPI"
  },
  {
    "type": "delete",
    "url": "/api/eclaim/delete/{no_reg}",
    "title": "Delete ke Viewer",
    "name": "ViewerDelete",
    "group": "Viewer_Bpjs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>request json</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request PUT \\\n     --url 'https://viewer.rsudkraton.com/api/eclaim/delete/013151561615' \\\n     --Content-Type 'application/json' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi code</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi Vuewer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Sample:",
          "content": "                                              \n{\n   \"no_reg\": \"013151561615\",\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n   \"kode\":  200\n   \"pesan\":  \"Data berhaisl diHapus!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./viewer_delete.js",
    "groupTitle": "Viewer_Bpjs"
  },
  {
    "type": "post",
    "url": "/api/eclaim/create",
    "title": "Simpan ke Viewer",
    "name": "ViewerPost",
    "group": "Viewer_Bpjs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>request json</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request POST \\\n     --url 'https://viewer.rsudkraton.com/api/eclaim/create' \\\n     --Content-Type 'application/json' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi code</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi Viewer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Sample:",
          "content": "                                              \n{\n   \"no_rm\": \"123515\",\n   \"no_reg\": \"013151561615\",\n   \"no_sep\": \"12154515151515\",\n   \"tgl_sep\": \"2019-10-10\",\n   \"file_claim\": \"fileclaim.pdf\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n   \"kode\":  200\n   \"pesan\":  \"Data berhaisl disimpan!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./viewer_create.js",
    "groupTitle": "Viewer_Bpjs"
  },
  {
    "type": "put",
    "url": "/api/eclaim/update/{no_reg}",
    "title": "Update ke Viewer",
    "name": "ViewerUpdate",
    "group": "Viewer_Bpjs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>request json</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request PUT \\\n     --url 'https://viewer.rsudkraton.com/api/eclaim/update/013151561615' \\\n     --Content-Type 'application/json' \\",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "metadata",
            "description": "<p>Informasi code</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Informasi Vuewer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Sample:",
          "content": "                                              \n{\n   \"no_rm\": \"123515\",\n   \"no_reg\": \"013151561615\",\n   \"no_sep\": \"12154515151515\",\n   \"tgl_sep\": \"2019-10-10\",\n   \"file_claim\": \"fileclaim.pdf\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n   \"kode\":  200\n   \"pesan\":  \"Data berhaisl diUpdate!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./viewer_update.js",
    "groupTitle": "Viewer_Bpjs"
  }
] });
