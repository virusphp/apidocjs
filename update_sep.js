var currentUser = {
    name: 'Sugandi'
};

/**
 * @api {put} /sep/update updateSep
 * @apiName updateSep
 * @apiGroup SEP
 * 
 * @apiParam {json} json request json 
 * 
 * @apiExample Example usage:
 * curl --request PUT \
 *      --url 'https://api.rsudkraton.com/sep/update' \
 *      --Content-Type 'application/json' \
 * 
 * @apiSuccess {json} metadata Informasi code dan pesan
 * @apiSuccess {json} response Informasi SEP
 * 
 * @apiSuccessExample {json} Request-Sample:
 *                                                     
 *                                                  
 *   {
 *      "request": {
 *         "t_sep": {
 *            "noSep": "0301R0011117V000008",
 *            "klsRawat": "1",
 *            "noMR": "123456",
 *            "rujukan": {
 *               "asalRujukan": "1",
 *               "tglRujukan": "2017-10-23",
 *               "noRujukan": "1234567",
 *               "ppkRujukan": "00010001"
 *            },
 *            "catatan": "test",
 *            "diagAwal": "B00.1",
 *            "poli": {
 *               "eksekutif": "0"
 *            },
 *            "cob": {
 *               "cob": "0"
 *            },
 *            "jaminan": {
 *               "lakaLantas": "1",
 *               "penjamin": "1,2",
 *               "lokasiLaka": "Jakarta"
 *            },
 *            "noTelp": "081919999",
 *            "user": "Coba Ws"
 *         }
 *      }
 *   }                
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 *     {
 *        "metaData": {
 *            "code": "200",
 *            "message": "Sukses"
 *         },
 *         "response": "0301R0011117V000008"
 *      }
 */
function cetakSep() {
    return; 
}