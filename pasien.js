var currentUser = {
    name: 'Sugandi'
};

/**
 * @api {get} /getallpasien getAllPasien
 * @apiName getAllPasien
 * @apiGroup Pasien
 * 
 * @apiParam {String} api_key Api Key terdaftar
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://api.rsudkraton.com/getallpasien' \
 *      --header 'key: your-api-key'
 * 
 * @apiSuccess {integer} current_page Status halaman
 * @apiSuccess {array} data Informasi pasien
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 * {
 *     "current_page": 1,
 *     "data": [
 *          "no_RM": 123456,
 *          "nama_pasien": "Agus Dermawan"
 *          "tempat_lahir": "Pekalongan",
 *          "tgl_lahir": "1999-01-01 00:00:00",
 *          "jns_kel": 0,
 *          "jenis_pasien": 1,
 *          "alamat": "PASIR SARI RT 4/1  PKL",
 *          "nama_kelurahan": "Panjang Wetan"
 *      ]
 * }
 */
function getAllPasien() {
    return; 
}

/**
 * @api {get} /getpasien/noRM getPasien
 * @apiName getPasien 
 * @apiGroup Pasien
 * 
 * @apiParam {string} api_key Api Key terdaftar
 * @apiParam {string} no_RM Nomor rekam medis
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://api.rsudkraton.com/getpasien/111111' \
 *      --header 'key: your-api-key'
 * 
 * @apiSuccess {booelan} ok Status sukses
 * @apiSuccess {object} data Informasi pasien
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 * {
 *     "ok": true,
 *     "hasil": [
 *          "no_RM": 123456,
 *          "nama_pasien": "Agus Dermawan"
 *          "tempat_lahir": "Pekalongan",
 *          "tgl_lahir": "1999-01-01 00:00:00",
 *          "jns_kel": 0,
 *          "jenis_pasien": 1,
 *          "alamat": "PASIR SARI RT 4/1  PKL",
 *          "nama_kelurahan": "Panjang Wetan"
 *      ]
 * }
 */
function getPasien() {
    return; 
}