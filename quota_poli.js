var currentUser = {
    name: 'Sugandi'
};

/**
 * @api {get} /getquotapoli/{tanggal}/{kd_sub_unit} getquotapoli
 * @apiName getquotapoli
 * @apiGroup Quota
 * 
 * @apiParam {string} tanggal pendaftaran
 * @apiParam {string} kd_sub_unit kd sub unit yang terpilih
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://api.rsudkraton.com/getquotapoli/2018-05-23/1' \
 *      --Content-Type 'application/json' \
 * 
 * @apiSuccess {json} metadata Informasi code dan pesan
 * @apiSuccess {json} response Informasi Quota Poli
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 *   {
 *      "ok": true,
 *       "hasil": {
 *           "Kuota": "3"
 *       }
 *   }
 */

function getquotapoli() {
    return; 
}