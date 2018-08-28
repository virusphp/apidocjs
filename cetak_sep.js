var currentUser = {
    name: 'Sugandi'
};

/**
 * @api {post} /sep/insert cetakSep
 * @apiName cetakSep
 * @apiGroup BPJS-SEP
 * 
 * @apiParam {json} json request json 
 * 
 * @apiExample Example usage:
 * curl --request POST \
 *      --url 'https://api.rsudkraton.com/sep/insert' \
 *      --Content-Type 'application/json' \
 * 
 * @apiSuccess {json} metadata Informasi code dan pesan
 * @apiSuccess {json} response Informasi SEP
 * 
 * @apiSuccessExample {json} Request-Sample:
 *                                                     
 *       {
 *          "request": {
 *             "t_sep": {
 *                "noKartu": "0001112230666",
 *                "tglSep": "2017-10-18",
 *                "ppkPelayanan": "0301R001",
 *                "jnsPelayanan": "2",
 *                "klsRawat": "3",
 *                "noMR": "123456",
 *                "rujukan": {
 *                   "asalRujukan": "1",
 *                   "tglRujukan": "2017-10-17",
 *                   "noRujukan": "1234567",
 *                   "ppkRujukan": "00010001"
 *                },
 *                "catatan": "test",
 *                "diagAwal": "A00.1",
 *                "poli": {
 *                   "tujuan": "INT",
 *                   "eksekutif": "0"
 *                },
 *                "cob": {
 *                   "cob": "0"
 *                },
 *                "katarak": {
 *                   "katarak": "0"
 *                },
 *                "jaminan": {
 *                   "lakaLantas": "1",
 *                   "penjamin": {
 *                      "penjamin" : "1",
 *                      "tglKejadian" : "2018-08-01",
 *                      "keterangan" : "kll",
 *                      "suples" : {
 *                          "suplesi" : "0", 
 *                          "noSepSuplesi" : "0301R0010718V000001", 
 *                          "lokasiLaka" : {
 *                              "kdPropinsi" : "03", 
 *                              "kdKabupaten" : "0050", 
 *                              "kdKecamatan" : "0574" 
 *                          }
 *                      }
 *                   }
 *                },
 *                "skdp": {
 *                  "noSurat" : "000002", 
 *                  "kdDPJP" : "31661", 
 *                }
 *                "noTelp": "08191999999",
 *                "user": "Admin CS"
 *             }
 *          }
 *       }                    
 * 
 * @apiSuccessExample {json} Success-Response:
 *       {
 *          "metaData": {
 *             "code": "200",
 *             "message": "Sukses"
 *          },
 *          "response": {
 *             "sep": {
 *                "catatan": "test",
 *                "diagnosa": "A00.1 - Cholera due to Vibrio cholerae 01, biovar eltor",
 *                "jnsPelayanan": "R.Inap",
 *                "kelasRawat": "1",
 *                "noSep": "0301R0011117V000008",
 *                "penjamin": "-",
 *                "peserta": {
 *                   "asuransi": "-",
 *                   "hakKelas": "Kelas 1",
 *                   "jnsPeserta": "PNS PUSAT",
 *                   "kelamin": "Laki-Laki",
 *                   "nama": "ZIYADUL",
 *                   "noKartu": "0001112230666",
 *                   "noMr": "123456",
 *                   "tglLahir": "2008-02-05"
 *                },
 *                "informasi:": {
 *                   "Dinsos":null,
 *                   "prolanisPRB":null,
 *                   "noSKTM":null
 *                },
 *                "poli": "-",
 *                "poliEksekutif": "-",
 *                "tglSep": "2017-10-12"
 *             }
 *          }
 *       }
 */
function cetakSep() {
    return; 
}