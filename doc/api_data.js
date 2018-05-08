define({ "api": [
  {
    "type": "get",
    "url": "/getalldokterpengganti",
    "title": "getAllDokterPengganti",
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
    "url": "/getdokterpengganti/kd_poli/tgl_reg",
    "title": "getDokterPengganti",
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
    "url": "/getjadwaldokter/tanggal",
    "title": "getJadwalDokter",
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
    "url": "/getlistregister/no_RM",
    "title": "getListRegister",
    "name": "getListRegister",
    "group": "ListRegister",
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
    "groupTitle": "ListRegister"
  },
  {
    "type": "post",
    "url": "/sendpasien",
    "title": "loginPasien",
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
    "title": "getAllPasien",
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
    "url": "/getpasien/noRM",
    "title": "getPasien",
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
    "url": "/getrawatjalan/no_reg",
    "title": "getRawatJalan",
    "name": "getRawatJalan",
    "group": "RawatJalan",
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
    "groupTitle": "RawatJalan"
  },
  {
    "type": "get",
    "url": "/getallsubunit",
    "title": "getAllSubUnit",
    "name": "getAllSubUnit",
    "group": "SubUnit",
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
    "groupTitle": "SubUnit"
  },
  {
    "type": "get",
    "url": "/getsubunit/kd_sub_unit",
    "title": "getSubUnit",
    "name": "getSubUnit",
    "group": "SubUnit",
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
    "groupTitle": "SubUnit"
  },
  {
    "type": "get",
    "url": "/getalltarifkarcis",
    "title": "getAllTarifKarcis",
    "name": "getAllTarifKarcis",
    "group": "TarifKarcis",
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
          "content": "\n{\n    \"current_page\": 1,\n    \"data\": [\n         \"kd_sub_unit\": 1,\n         \"js\": 18000,\n         \"nama_sub_unit\": \"Klinik Umum\",\n         \"ba\": 0,\n         \"jp\": 22000,\n         \"harga\": 40000,\n         \"Rek_P\": \"4101010030010001\",\n         \"idx_Tarif\": 13371,\n         \"kd_tarif\": \"T150000014\",\n         \"nama_tarif\": \"Pemeriksaan Poliklinik Dokter Umum\"\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./tarif_karcis.js",
    "groupTitle": "TarifKarcis"
  },
  {
    "type": "get",
    "url": "/gettarifkarcis/kd_sub_unit",
    "title": "getTarifKarcis",
    "name": "getTarifKarcis",
    "group": "TarifKarcis",
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
    "groupTitle": "TarifKarcis"
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
    "group": "_home_sugandi_PROJECT_documentasi_doc_doc_main_js",
    "groupTitle": "_home_sugandi_PROJECT_documentasi_doc_doc_main_js",
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
    "group": "_home_sugandi_PROJECT_documentasi_doc_main_js",
    "groupTitle": "_home_sugandi_PROJECT_documentasi_doc_main_js",
    "name": ""
  }
] });
