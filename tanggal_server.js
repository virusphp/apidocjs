var currentUser = {
    name: 'Sugandi'
};

/**
 * @api {get} /tanggalserver tanggalserver
 * @apiName tanggalserver
 * @apiGroup Tanggal
 * 
 * @apiParam {string} api_key api key
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://api.rsudkraton.com/sep/0301R0011017V000015' \
 *      --Content-Type 'application/json' \
 * 
 * @apiSuccess {json} metadata Informasi ok 
 * @apiSuccess {json} response Informasi tanggal dan waktu
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 *   {
 *     "ok": "200",
 *     "tanggal": "2018-01-01",
 *     "waktu": "00:00:00"
 *   }
 */
function tanggalserver() {
    return; 
}