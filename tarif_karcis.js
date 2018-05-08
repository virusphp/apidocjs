var currentUser = {
    name: 'Sugandi'
};

/**
 * @api {get} /getalltarifkarcis getAllTarifKarcis
 * @apiName getAllTarifKarcis
 * @apiGroup TarifKarcis
 * 
 * @apiParam {String} api_key Api Key terdaftar
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://api.rsudkraton.com/getalltarifkarcis' \
 *      --header 'key: your-api-key'
 * 
 * @apiSuccess {integer} current_page Status halaman
 * @apiSuccess {array} data Informasi Tarif karcis
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 * {
 *     "current_page": 1,
 *     "data": [
 *          "kd_sub_unit": 1,
 *          "js": 18000,
 *          "nama_sub_unit": "Klinik Umum",
 *          "ba": 0,
 *          "jp": 22000,
 *          "harga": 40000,
 *          "Rek_P": "4101010030010001",
 *          "idx_Tarif": 13371,
 *          "kd_tarif": "T150000014",
 *          "nama_tarif": "Pemeriksaan Poliklinik Dokter Umum"
 *      ]
 * }
 */
function getAllTarifKarcis() {
    return; 
}

/**
 * @api {get} /gettarifkarcis/kd_sub_unit getTarifKarcis
 * @apiName getTarifKarcis 
 * @apiGroup TarifKarcis
 * 
 * @apiParam {String} api_key Api Key terdaftar
 * @apiParam {String} kd_sub_unit Nomor sub unit (poliklinik)
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://api.rsudkraton.com/gettarifkarcis/4' \
 *      --header 'key: your-api-key'
 * 
 * @apiSuccess {booelan} ok Status sukses
 * @apiSuccess {object} data Informasi pasien
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 * {
 *   "ok": true,
 *   "hasil": {
 *      "kd_sub_unit": 4,
 *      "js": 18000,
 *      "nama_sub_unit": "Spesialis Mata",
 *      "ba": 0,
 *      "jp": 36000,
 *      "harga": 54000,
 *      "Rek_P": "4101010010010001",
 *      "idx_Tarif": 13381,
 *      "kd_tarif": "T150000024",
 *      "nama_tarif": "Pemeriksaan Poliklinik Dokter Mata"
 *   }
 * }
 */
function getTarifKarcis() {
    return; 
}