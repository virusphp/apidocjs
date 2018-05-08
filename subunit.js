var currentUser = {
    name: 'Sugandi'
};

/**
 * @api {get} /getallsubunit getAllSubUnit
 * @apiName getAllSubUnit
 * @apiGroup SubUnit 
 * 
 * @apiParam {String} api_key Api Key terdaftar
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://api.rsudkraton.com/getallsubunit/' \
 *      --header 'key: your-api-key'
 * 
 * @apiSuccess {integer} curent_page Status halaman
 * @apiSuccess {array} data Informasi Sub Unit
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 * {
 *     "current_page": 1,
 *     "data": [
 *          "kd_sub_unit": 1,
 *          "kd_unit": 1,
 *          "nama_sub_unit": Umum,
 *          "keterangan": ""
 *          "menuname": null,
 *          "enable": 1,
 *          "no_perkiraan": "",
 *          "PemeriksaanNol": "0",
 *          "Kd_Sub_Unit_SMS": "0",
 *          "Status_SIMRS_Penunjang": "0",
 *      ]
 * }
 */
function getAllSubUnit() {
    return; 
}

/**
 * @api {get} /getsubunit/kd_sub_unit getSubUnit
 * @apiName getSubUnit
 * @apiGroup SubUnit
 * 
 * @apiParam {String} api_key Api Key terdaftar
 * @apiParam {Integer} kd_sub_unit Kode sub unit (Poliklinik)
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://api.rsudkraton.com/getsubunit/1' \
 *      --header 'key: your-api-key'
 * 
 * @apiSuccess {booelan} ok Status sukses
 * @apiSuccess {object} hasil Informasi Nama poliklinik
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 * {
 *     "ok": true,
 *     "hasil": [
 *          "kd_sub_unit": 1,
 *          "kd_unit": 1,
 *          "nama_sub_unit": "Umum",
 *          "keterangan": "umum",
 *          "menuname": null,
 *          "enable": 1,
 *          "no_perkiraan": "23942348293",
 *          "PemeriksaanNol": "0",
 *          "Kd_Sub_Unit_SMS": "021",
 *          "Status_SIMRS_Penunjang": null
 *      ]
 * }
 */
function getSubUnit() {
    return; 
}