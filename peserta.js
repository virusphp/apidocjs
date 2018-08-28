var currentUser = {
    name: 'Sugandi'
};

/**
 * @api {get} /peserta/nik/{nik}/tglsep/{tgl_sep} Peserta Nik
 * @apiName pesertaNik
 * @apiGroup Peserta
 * 
  * @apiParam {String} api_key Api Key terdaftar
  * @apiParam {nik} nik no induk kependudukan peserta terdaftar
  * @apiParam {date} tgl_sep tanggal sep peserta terdaftar
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://api.rsudkraton.com/peserta/nik/3374132708800008/tglsep/2018-08-27' \
 *      --Content-Type 'application/json' \
 * 
 * @apiSuccess {json} metadata Informasi code dan pesan
 * @apiSuccess {json} response Informasi data Peserta
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 *        {
 * "metaData": {
 *   "code": "200",
 *   "message": "OK"
 * },
 * "response": {
 *   "peserta": {
 *     "cob": {
 *       "nmAsuransi": null,
 *       "noAsuransi": null,
 *       "tglTAT": null,
 *       "tglTMT": null
 *     },
 *     "hakKelas": {
 *       "keterangan": "KELAS II",
 *       "kode": "2"
 *     },
 *     "informasi": {
 *       "dinsos": null,
 *       "noSKTM": null,
 *       "prolanisPRB": null
 *     },
 *     "jenisPeserta": {
 *       "keterangan": "PEGAWAI SWASTA",
 *       "kode": "13"
 *     },
 *     "mr": {
 *       "noMR": null,
 *       "noTelepon": null
 *     },
 *     "nama": "MARTIN EKO SETIAWAN",
 *     "nik": "3374132708800008",
 *     "noKartu": "0001851105598",
 *     "pisa": "1",
 *     "provUmum": {
 *       "kdProvider": "0173U048",
 *       "nmProvider": "KARTIKA DEVI ANJARDINI, DR."
 *     },
 *     "sex": "L",
 *     "statusPeserta": {
 *       "keterangan": "AKTIF",
 *       "kode": "0"
 *     },
 *     "tglCetakKartu": "2016-10-06",
 *     "tglLahir": "1980-08-27",
 *     "tglTAT": "2050-12-31",
 *     "tglTMT": "2015-06-01",
 *     "umur": {
 *       "umurSaatPelayanan": "38 tahun ,0 bulan ,0 hari",
 *       "umurSekarang": "38 tahun ,0 bulan ,1 hari"
 *     }
 *   }
 * }
 *}
 */

function PesertaNik() {
    return; 
}

/**
 * @api {get} /peserta/nokartu/{no_kartu}/tglsep/{tgl_sep} Peserta No Kartu
 * @apiName pesertaNoKartu
 * @apiGroup Peserta
 * 
  * @apiParam {String} api_key Api Key terdaftar
  * @apiParam {no_kartu} no_kartu no Kartu peserta terdaftar
  * @apiParam {date} tgl_sep tanggal sep peserta terdaftar
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://api.rsudkraton.com/peserta/nokartu/0001851105598/tglsep/2018-08-27' \
 *      --Content-Type 'application/json' \
 * 
 * @apiSuccess {json} metadata Informasi code dan pesan
 * @apiSuccess {json} response Informasi data Peserta
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 *        {
 * "metaData": {
 *   "code": "200",
 *   "message": "OK"
 * },
 * "response": {
 *   "peserta": {
 *     "cob": {
 *       "nmAsuransi": null,
 *       "noAsuransi": null,
 *       "tglTAT": null,
 *       "tglTMT": null
 *     },
 *     "hakKelas": {
 *       "keterangan": "KELAS II",
 *       "kode": "2"
 *     },
 *     "informasi": {
 *       "dinsos": null,
 *       "noSKTM": null,
 *       "prolanisPRB": null
 *     },
 *     "jenisPeserta": {
 *       "keterangan": "PEGAWAI SWASTA",
 *       "kode": "13"
 *     },
 *     "mr": {
 *       "noMR": null,
 *       "noTelepon": null
 *     },
 *     "nama": "MARTIN EKO SETIAWAN",
 *     "nik": "3374132708800008",
 *     "noKartu": "0001851105598",
 *     "pisa": "1",
 *     "provUmum": {
 *       "kdProvider": "0173U048",
 *       "nmProvider": "KARTIKA DEVI ANJARDINI, DR."
 *     },
 *     "sex": "L",
 *     "statusPeserta": {
 *       "keterangan": "AKTIF",
 *       "kode": "0"
 *     },
 *     "tglCetakKartu": "2016-10-06",
 *     "tglLahir": "1980-08-27",
 *     "tglTAT": "2050-12-31",
 *     "tglTMT": "2015-06-01",
 *     "umur": {
 *       "umurSaatPelayanan": "38 tahun ,0 bulan ,0 hari",
 *       "umurSekarang": "38 tahun ,0 bulan ,1 hari"
 *     }
 *   }
 * }
 *}
 */

function PesertaNoKartu() {
    return; 
}