define({ "api": [
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
    "group": "D__Project_apidocjs_doc_doc_main_js",
    "groupTitle": "D__Project_apidocjs_doc_doc_main_js",
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
    "group": "D__Project_apidocjs_doc_main_js",
    "groupTitle": "D__Project_apidocjs_doc_main_js",
    "name": ""
  },
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
    "url": "/getdokterpengganti/{kd_poli}/{tgl_reg}",
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
    "url": "/getjadwaldokter/{tanggal}",
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
    "url": "/getlistregister/{no_RM}",
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
    "url": "/getpasien/{no_RM}",
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
    "url": "/getrawatjalan/{no_reg}",
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
    "url": "/referensi/diagnosa/{kd_diagnosa}",
    "title": "diagnosa",
    "name": "diagnosa",
    "group": "Referensi",
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
    "filename": "./referensi.js",
    "groupTitle": "Referensi"
  },
  {
    "type": "get",
    "url": "/referensi/dokter/{nama_dokter}",
    "title": "dokter",
    "name": "dokter",
    "group": "Referensi",
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
    "filename": "./referensi.js",
    "groupTitle": "Referensi"
  },
  {
    "type": "get",
    "url": "/referensi/poli/{kd_poli}",
    "title": "poli",
    "name": "poli",
    "group": "Referensi",
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
    "filename": "./referensi.js",
    "groupTitle": "Referensi"
  },
  {
    "type": "post",
    "url": "/sendregister",
    "title": "registrasiPasien",
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
    "title": "Updateregistrasi",
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
    "type": "get",
    "url": "/rujukan/{no_rujukan}",
    "title": "rujukan",
    "name": "rujukan",
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
    "filename": "./rujukan.js",
    "groupTitle": "Rujukan"
  },
  {
    "type": "get",
    "url": "/rujukan/peserta/{no_kartu}",
    "title": "rujukanpeserta",
    "name": "rujukanpeserta",
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
    "filename": "./rujukan.js",
    "groupTitle": "Rujukan"
  },
  {
    "type": "get",
    "url": "/sep/{parameter}",
    "title": "cariSep",
    "name": "cariSep",
    "group": "SEP",
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
    "filename": "./cari_sep.js",
    "groupTitle": "SEP"
  },
  {
    "type": "post",
    "url": "/sep/insert",
    "title": "cetakSep",
    "name": "cetakSep",
    "group": "SEP",
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
          "content": "                                              \n{\n   \"request\": {\n      \"t_sep\": {\n         \"noKartu\": \"0001112230666\",\n         \"tglSep\": \"2017-10-18\",\n         \"ppkPelayanan\": \"0301R001\",\n         \"jnsPelayanan\": \"2\",\n         \"klsRawat\": \"3\",\n         \"noMR\": \"123456\",\n         \"rujukan\": {\n            \"asalRujukan\": \"1\",\n            \"tglRujukan\": \"2017-10-17\",\n            \"noRujukan\": \"1234567\",\n            \"ppkRujukan\": \"00010001\"\n         },\n         \"catatan\": \"test\",\n         \"diagAwal\": \"A00.1\",\n         \"poli\": {\n            \"tujuan\": \"INT\",\n            \"eksekutif\": \"0\"\n         },\n         \"cob\": {\n            \"cob\": \"0\"\n         },\n         \"jaminan\": {\n            \"lakaLantas\": \"1\",\n            \"penjamin\": \"1\",\n            \"lokasiLaka\": \"Jakarta\"\n         },\n         \"noTelp\": \"081919999\",\n         \"user\": \"Coba Ws\"\n      }\n   }\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n   \"metaData\": {\n      \"code\": \"200\",\n      \"message\": \"Sukses\"\n   },\n   \"response\": {\n      \"sep\": {\n         \"catatan\": \"test\",\n         \"diagnosa\": \"A00.1 - Cholera due to Vibrio cholerae 01, biovar eltor\",\n         \"jnsPelayanan\": \"R.Inap\",\n         \"kelasRawat\": \"1\",\n         \"noSep\": \"0301R0011117V000008\",\n         \"penjamin\": \"-\",\n         \"peserta\": {\n            \"asuransi\": \"-\",\n            \"hakKelas\": \"Kelas 1\",\n            \"jnsPeserta\": \"PNS PUSAT\",\n            \"kelamin\": \"Laki-Laki\",\n            \"nama\": \"ZIYADUL\",\n            \"noKartu\": \"0001112230666\",\n            \"noMr\": \"123456\",\n            \"tglLahir\": \"2008-02-05\"\n         },\n         \"poli\": \"-\",\n         \"poliEksekutif\": \"-\",\n         \"tglSep\": \"2017-10-12\"\n      }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./cetak_sep.js",
    "groupTitle": "SEP"
  },
  {
    "type": "delete",
    "url": "/sep/delete",
    "title": "deleteSep",
    "name": "deleteSep",
    "group": "SEP",
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
    "filename": "./delete_sep.js",
    "groupTitle": "SEP"
  },
  {
    "type": "put",
    "url": "/sep/update",
    "title": "updateSep",
    "name": "updateSep",
    "group": "SEP",
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
          "content": "                                                  \n                                               \n{\n   \"request\": {\n      \"t_sep\": {\n         \"noSep\": \"0301R0011117V000008\",\n         \"klsRawat\": \"1\",\n         \"noMR\": \"123456\",\n         \"rujukan\": {\n            \"asalRujukan\": \"1\",\n            \"tglRujukan\": \"2017-10-23\",\n            \"noRujukan\": \"1234567\",\n            \"ppkRujukan\": \"00010001\"\n         },\n         \"catatan\": \"test\",\n         \"diagAwal\": \"B00.1\",\n         \"poli\": {\n            \"eksekutif\": \"0\"\n         },\n         \"cob\": {\n            \"cob\": \"0\"\n         },\n         \"jaminan\": {\n            \"lakaLantas\": \"1\",\n            \"penjamin\": \"1,2\",\n            \"lokasiLaka\": \"Jakarta\"\n         },\n         \"noTelp\": \"081919999\",\n         \"user\": \"Coba Ws\"\n      }\n   }\n}",
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
    "filename": "./update_sep.js",
    "groupTitle": "SEP"
  },
  {
    "type": "put",
    "url": "/sep/updtglplg",
    "title": "updtglplg",
    "name": "updtglplg",
    "group": "SEP",
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
          "content": "                                                  \n                                               \n{\n   \"request\": {\n      \"t_sep\": \n       {\n           \"noSep\":\"0301R00105160000569\",\n           \"tglPulang\":\"2016-06-12\",\n           \"user\":\"Coba Ws\"\n       }\n   }\n}",
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
    "filename": "./update_plg_sep.js",
    "groupTitle": "SEP"
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
          "content": "\n[\n     {\n         \"kd_sub_unit\": 1,\n         \"js\": 18000,\n         \"nama_sub_unit\": \"Klinik Umum\",\n         \"ba\": 0,\n         \"jp\": 22000,\n         \"harga\": 40000,\n         \"Rek_P\": \"4101010030010001\",\n         \"idx_Tarif\": 13371,\n         \"kd_tarif\": \"T150000014\",\n         \"nama_tarif\": \"Pemeriksaan Poliklinik Dokter Umum\"\n     }\n]",
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
    "type": "post",
    "url": "/user/create",
    "title": "getRegisterUser",
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
  }
] });
