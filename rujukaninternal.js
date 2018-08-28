var currentUser = {
    name: 'Sugandi'
};

/**
 * @api {post} /rujukaninternal/{no_rujukan} Rujukan Internal
 * @apiName rujukaninternal
 * @apiGroup Rujukan
 * 
 * @apiParam {String} api_key Api Key terdaftar
 * @apiParam {string} no_rujukan no rujukan  terdaftar
 * 
 * @apiExample Example usage:
 * curl --request POST \
 *      --url 'https://api.rsudkraton.com/rujukannternal/030107010217Y001465' \
 *      --header 'key: your-api-key' \
 * 
 * @apiSuccess {json} metadata Informasi code dan pesan
 * @apiSuccess {json} response Informasi rujukan
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 *  {
 *       "metaData": 
 *           {
 *               "code": "200",
 *               "message": "Sukses"
 *           },
 *       "response": 
 *           {
 *           "rujukan": {
*             "diagnosa": {
*                "kode": "N40",
*               "nama": "Hyperplasia of prostate"
*             },
*             "keluhan": "kencing tidak puas",
*             "noKunjungan": "030107010217Y001465",
*             "pelayanan": {
*                "kode": "2",
*                "nama": "Rawat Jalan"
*             },
*             "peserta": {
*                "cob": {
*                   "nmAsuransi": null,
*                   "noAsuransi": null,
*                   "tglTAT": null,
*                   "tglTMT": null
*                },
*                "hakKelas": {
*                   "keterangan": "KELAS I",
*                   "kode": "1"
*                },
*                "informasi": {
*                   "dinsos": null,
*                   "noSKTM": null,
*                   "prolanisPRB": null
*                },
*                "jenisPeserta": {
*                   "keterangan": "PENERIMA PENSIUN PNS",
*                   "kode": "15"
*                },
*                "mr": {
*                   "noMR": "298036",
*                   "noTelepon": null
*                },
*                "nama": "MUSDIWAR,BA",
*                "nik": null,
*                "noKartu": "0000416382632",
*                "pisa": "2",
*                "provUmum": {
*                   "kdProvider": "03010701",
*                   "nmProvider": "SITEBA"
*                },
*                "sex": "L",
*                "statusPeserta": {
*                   "keterangan": "AKTIF",
*                   "kode": "0"
*                },
*                "tglCetakKartu": "2017-11-13",
*                "tglLahir": "1938-08-31",
*                "tglTAT": "2038-08-31",
*                "tglTMT": "1996-08-20",
*                "umur": {
*                   "umurSaatPelayanan": "78 tahun ,6 bulan ,6 hari",
*                   "umurSekarang": "79 tahun ,3 bulan ,18 hari"
*                }
*             },
*             "poliRujukan": {
*                "kode": "URO",
*                "nama": "UROLOGI"
*             },
*             "provPerujuk": {
*                "kode": "03010701",
*                "nama": "SITEBA"
*             },
*             "tglKunjungan": "2017-02-25"
*         }
*       }
*    }
*/