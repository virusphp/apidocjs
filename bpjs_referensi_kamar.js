var currentUser = {
    name: 'Sugandi'
};

/**
 * @api {get} /referensi/kelas Referensi Kelas Kamar
 * @apiName Kamar
 * @apiGroup BPJS-Kamar
 * 
 * @apiParam {String} api_key Api Key terdaftar
 * @apiParam {string} kd_ppk Kode ppk rumah sakit
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://api.rsudkraton.com/referensi/kelas' \
 *      --header 'key: your-api-key' \
 * 
 * @apiSuccess {json} metadata Informasi code dan pesan
 * @apiSuccess {json} response Informasi diagnosa
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 *  {
 *       "metaData": 
 *           {
 *               "code": "1",
 *               "message": "Ok"
 *               "totalitems": 16
 *           },
 *       "response": 
 *           {
 *           "list": 
 *               [
 *                   {
 *                       "kodekelas": "VIP",
 *                       "namakelas": "VVIP"
 *                   },
 *                  {
 *                       "kodekelas": "NON",
 *                       "namakelas": "-"
 *                   }
 *               ],
 *           }
 *   }
 */
function kamar() {
    return; 
}