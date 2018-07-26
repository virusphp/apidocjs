var currentUser = {
    name: 'Sugandi'
};

/**
 * @api {get} /getallharilibur getAllHariLibur
 * @apiName getallharilibur
 * @apiGroup HariLibur
 * 
  * @apiParam {String} api_key Api Key terdaftar
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://api.rsudkraton.com/getallharilibur' \
 *      --Content-Type 'application/json' \
 * 
 * @apiSuccess {json} metadata Informasi code dan pesan
 * @apiSuccess {json} response Informasi Semua Hari libur 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 *   {
 *      "ok": true,
 *       "hasil": [
    *         {
    *          "tgl_libur": "2018-05-07",
    *          "keterangan": "Kenaikan Yesus Krisus"
    *          },
    *          {
    *          "tgl_libur": "2018-05-11",
    *          "keterangan": "asgdahsdg"
    *          },
    *          {
    *          "tgl_libur": "2018-05-12",
    *          "keterangan": null
    *          },
    *          {
    *          "tgl_libur": "2018-05-14",
    *          "keterangan": null
    *          },
    *          {
    *          "tgl_libur": "2018-05-15",
    *          "keterangan": null
    *          }
    *        ]
 *   }
 */

 /**
 * @api {get} /getharilibur/{tanggal} getHariLibur
 * @apiName getharilibur
 * @apiGroup HariLibur
 * 
  * @apiParam {String} api_key Api Key terdaftar
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://api.rsudkraton.com/getharilibur/2018-05-07' \
 *      --Content-Type 'application/json' \
 * 
 * @apiSuccess {json} metadata Informasi code dan pesan
 * @apiSuccess {json} response Informasi Hari libur 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 *   {
 *     "ok": true,
 *      "hasil": 
 *       {
 *        "tgl_libur": "2018-05-07",
 *        "keterangan": "Kenaikan Yesus Krisus"
 *       }
 *   }
 */

function harilibur() {
    return; 
}