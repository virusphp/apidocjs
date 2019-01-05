var currentUser = {
    name: 'Sugandi'
};

/**
 * @api {get} /mon/kunjungan/tanggal/{tgl_sep}/jnspel/{jns_pel} Monitoring Kunjungan
 * @apiName kunjungan
 * @apiGroup BPJS-Monitoring
 * 
  * @apiParam {String} api_key Api Key terdaftar
  * @apiParam {date} tgl_sep tanggal cetak sep terdaftar
  * @apiParam {string} jns_pel jenis rawat terdaftar
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://api.rsudkraton.com/mon/kunjungan/tanggal/2018-01-01/jnspel/2' \
 *      --Content-Type 'application/json' \
 * 
 * @apiSuccess {json} metadata Informasi code dan pesan
 * @apiSuccess {json} response Informasi Semua data kunjungan
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 *        {
 *          "metaData": {
 *             "code": "200",
 *             "message": "Sukses"
 *          },
 *          "response": {
 *             "sep": [
 *               {
 *                   "diagnosa": "K65.0",
 *                   "jnsPelayanan": "R.Inap",
 *                   "kelasRawat": "2",
 *                   "nama": "HANIF ABDURRAHMAN",
 *                   "noKartu": "0001819122189",
 *                   "noSep": "0301R00110170000004",
 *                   "poli": null,
 *                   "tglPlgSep": "2017-10-03",
 *                   "tglSep": "2017-10-01"
 *               },
*                {
 *                   "diagnosa": "I50.0",
 *                   "jnsPelayanan": "R.Inap",
 *                   "kelasRawat": "3",
 *                   "nama": "ASRIZAL",
 *                   "noKartu": "0002283324674",
 *                   "noSep": "0301R00110170000005",
 *                   "poli": null,
 *                   "tglPlgSep": "2017-10-10",
 *                   "tglSep": "2017-10-01"
 *               },
 *                
 *            ]
 *          }
 *       }
 */

function monitoringKunjungan() {
    return; 
}

/**
 * @api {get} /mon/hispelayanan/nokartu/{no_kartu}/tglmulai/{tgl_mul}/tglakhir/{tgl_akhir} Monitoring History
 * @apiName history
 * @apiGroup BPJS-Monitoring
 * 
  * @apiParam {String} api_key Api Key terdaftar
  * @apiParam {String} no_kartu no kartu terdaftar
  * @apiParam {date} tgl_mul tanggal mulai sep terdaftar
  * @apiParam {date} tgl_akhir tanggal akhir sep terdaftar
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://api.rsudkraton.com/mon/hispelayanan/nokartu/0031254455/tglmulai/2018-01-01/tglakhir/2018-01-10' \
 *      --Content-Type 'application/json' \
 * 
 * @apiSuccess {json} metadata Informasi code dan pesan
 * @apiSuccess {json} response Informasi Semua data history pelayanan
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 *        {
 *          "metaData": {
 *             "code": "200",
 *             "message": "Sukses"
 *          },
 *          "response": {
 *             "histori": [
 *               {
 *                   "diagnosa": A00.1 - Cholera due to Vibrio cholerae 01, biovar eltor",
 *                   "jnsPelayanan": "1",
 *                   "kelasRawat": "Kelas 1",
 *                   "namaPeserta": "HANIF ABDURRAHMAN",
 *                   "noKartu": "0001819122189",
 *                   "noSep": "0301R00110170000004",
 *                   "poli": null,
 *                   "ppkPelayanan": "RS YOS SUDARSO",
 *                   "tglPlgSep": "2017-10-03",
 *                   "tglSep": "2017-10-01"
 *               },
*                {
 *                   "diagnosa": A00.1 - Cholera due to Vibrio cholerae 01, biovar eltor",
 *                   "jnsPelayanan": "1",
 *                   "kelasRawat": "Kelas 1",
 *                   "namaPeserta": "HANIF ABDURRAHMAN",
 *                   "noKartu": "0001819122189",
 *                   "noSep": "0301R00110170000004",
 *                   "poli": null,
 *                   "ppkPelayanan": "RS YOS SUDARSO",
 *                   "tglPlgSep": "2017-10-10",
 *                   "tglSep": "2017-10-01"
 *               },
 *                
 *            ]
 *          }
 *       }
 */

function monitoringHistory() {
    return; 
}
