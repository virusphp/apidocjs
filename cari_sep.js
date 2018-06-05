var currentUser = {
    name: 'Sugandi'
};

/**
 * @api {get} /sep/{parameter} cariSep
 * @apiName cariSep
 * @apiGroup SEP
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