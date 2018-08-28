var currentUser = {
    name: 'Sugandi'
};

/**
 * @api {get} /getnotagihan/{no_tagihan} No Tagihan
 * @apiName no_tagihan
 * @apiGroup Tagihan
 * 
 * @apiParam {string} no_tagihan peserta
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://api.rsudkraton.com/getnotagihan/11017V000015' \
 *      --Content-Type 'application/json' \
 * 
 * @apiSuccess {json} metadata Informasi code dan pesan
 * @apiSuccess {json} response Informasi No Bukti
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 *   {
 *      "ok": true,
 *       "hasil": {
 *           "no_bukti": "1"
 *       }
 *   }
 */

function noTagihan() {
    return; 
}