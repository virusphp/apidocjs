var currentUser = {
    name: 'Sugandi'
};

/**
 * @api {get} /sep/{parameter} Cari SEP
 * @apiName cariSep
 * @apiGroup BPJS-SEP
 * 
 * @apiParam {string} no_sep peserta
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://api.rsudkraton.com/sep/0301R0011017V000015' \
 *      --Content-Type 'application/json' \
 * 
 * @apiSuccess {json} metadata Informasi code dan pesan
 * @apiSuccess {json} response Informasi SEP
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 *   {
 *      "metaData": {
 *         "code": "200",
 *         "message": "Sukses"
 *      },
 *      "response": {
 *         "catatan": "test",
 *         "diagnosa": "Cholera due to Vibrio cholerae 01, biovar eltor",
 *         "jnsPelayanan": "Rawat INap",
 *         "kelasRawat": "1",
 *         "noSep": "0301R0011017V000015",
 *         "penjamin": null,
 *         "peserta": {
 *            "asuransi": null,
 *            "hakKelas": "Kelas 2",
 *            "jnsPeserta": "PNS Pusat",
 *            "kelamin": "L",
 *            "nama": "SRI MULYONO",
 *            "noKartu": "0001267311161",
 *            "noMr": "123456",
 *            "tglLahir": "1982-01-05"
 *         },
 *         "poli": "Poli Penyakit Dalam",
 *         "poliEksekutif": "0",
 *         "tglSep": "2017-10-30"
 *      }
 *   }
 */
function deleteSep() {
    return; 
}

/**
 * @api {get} /sep/jasaraharja/suplesi/{no_kartu}/tglpel/{tgl_pel} Suplesi Jasa Raharja
 * @apiName suplesiJasaRaharja
 * @apiGroup BPJS-SEP
 * 
 * @apiParam {string} api_key api key terdaftar
 * @apiParam {string} no_kartu nomer kartu peserta terdaftar
 * @apiParam {date} tgl_pel tanggal pelayanan terdaftar
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://api.rsudkraton.com/sep/jasaraharja/suplesi/0301R0011017V000015/tglpel/2018-08-01' \
 *      --Content-Type 'application/json' \
 * 
 * @apiSuccess {json} metadata Informasi code dan pesan
 * @apiSuccess {json} response Informasi Potensi Sep sebagai suplesi
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 *   {
 *      "metaData": {
 *         "code": "200",
 *         "message": "Sukses"
 *      },
 *      "response": {
 *        "jaminan": 
 *           [
 *               {
 *                   "noRegister": "1234",
 *                   "noSep": "0301R0110818V000008",
 *                   "noSepAwal": "0301R0110818V000008",
 *                   "noSuratJaminan": "-",
 *                   "tglKejadian": "2018-08-06",
 *                   "tglSep": "2018-08-08"                                    
 *               },
 *                               {
 *                   "noRegister": "44222",
 *                   "noSep": "0301R0110818V000018",
 *                   "noSepAwal": "0301R0110818V000008",
 *                   "noSuratJaminan": "-",
 *                   "tglKejadian": "2018-08-06",
 *                   "tglSep": "2018-08-08"                                    
 *               }    
 *           ],
 *      }
 *   }
 */
function potensiSuplesi() {
    return; 
}