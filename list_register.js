var currentUser = {
    name: 'Sugandi'
};

/**
 * @api {get} /getlistregister/{no_RM} getListRegister
 * @apiName getListRegister
 * @apiGroup ListRegister 
 * 
 * @apiParam {String} api_key Api Key terdaftar
 * @apiParam {Integer} no_RM Kode RM (RM)
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://api.rsudkraton.com/getlistregister/222222' \
 *      --header 'key: your-api-key'
 * 
 * @apiSuccess {booelan} ok Status sukses
 * @apiSuccess {object} hasil Informasi List history register
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 * {
 *     "ok": true,
 *     "hasil": [
 *          {
 *              "no_reg": "012704180001",
 *              "no_RM": "222222",
 *              "status_keluar": 0,
 *              "waktu": "07:53:32",
 *              "tgl_reg": "2018-04-27 00:00:00",
 *              "nama_sub_unit": "Spesialis Dalam 1"
 *           },
 *           {
 *              "no_reg": "012604180011",
 *              "no_RM": "222222",
 *              "status_keluar": 0,
 *              "waktu": "13:38:45",
 *              "tgl_reg": "2018-04-26 00:00:00",
 *              "nama_sub_unit": "Spesialis THT"
 *           },
 *      ]
 * }
 */
function getListRegister() {
    return; 
}