var currentUser = {
    name: 'Sugandi'
};

/**
 * @api {get} /referensi/dokter/pelayanan/{jns_pel}/tglpelayanan/{tgl_pel}/spesialis/{kd_spesialis} Referensi Dokter DPJP
 * @apiName dpjp
 * @apiGroup BPJS-Referensi
 * 
 * @apiParam {String} api_key Api Key terdaftar
 * @apiParam {string} jns_pel jenis pelayanan terdaftar
 * @apiParam {date} tgl_pel tanggal pelayanan terdaftar
 * @apiParam {string} kd_spesialis kd_spesial pelayanan terdaftar
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://api.rsudkraton.com/referensi/dokter/pelayanan/2/tglpelayanan/2018-01-01/spesialis/3215' \
 *      --header 'key: your-api-key' \
 * 
 * @apiSuccess {json} metadata Informasi code dan pesan
 * @apiSuccess {json} response Informasi dokter dpjp
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 *  {
 *       "metaData": 
 *           {
 *               "code": "200",
 *               "message": "Sukses"
 *           },
 *       "response": 
 *           {
 *           "list": 
 *               [
 *                   {
 *                       "kode": "12345",
 *                       "nama":"Satro Jadhit, dr"
 *                   },
 *                   {
 *                       "kode": "54321",
 *                       "nama":"Satroni Lawa, dr"
 *                   }
 *               ],
 *           }
 *   }
 */
function dpjp() {
    return; 
}

/**
 * @api {get} /referensi/provinsi Referensi Provinsi
 * @apiName provinsi
 * @apiGroup BPJS-Referensi
 * 
 * @apiParam {String} api_key Api Key terdaftar
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://api.rsudkraton.com/referensi/provinsi \
 *      --header 'key: your-api-key' \
 * 
 * @apiSuccess {json} metadata Informasi code dan pesan
 * @apiSuccess {json} response Informasi propinsi
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 *  {
 *       "metaData": 
 *           {
 *               "code": "200",
 *               "message": "Sukses"
 *           },
 *       "response": 
 *           {
 *           "list": 
 *               [
 *                   {
 *                       "kode": "16",
 *                       "nama":"Bali"
 *                   },
 *                   {
 *                       "kode": "17",
 *                       "nama":"Banten"
 *                   }
 *               ],
 *           }
 *   }
 */
function propinsi() {
    return; 
}

/**
 * @api {get} /referensi/kabupaten/provinsi/{kd_prov} Referensi Kabupaten
 * @apiName kabupaten
 * @apiGroup BPJS-Referensi
 * 
 * @apiParam {String} api_key Api Key terdaftar
 * @apiParam {String} kd_prov kode provinsi terdaftar
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://api.rsudkraton.com/referensi/kabupaten/provinsi/12 \
 *      --header 'key: your-api-key' \
 * 
 * @apiSuccess {json} metadata Informasi code dan pesan
 * @apiSuccess {json} response Informasi kabupaten
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 *  {
 *       "metaData": 
 *           {
 *               "code": "200",
 *               "message": "Sukses"
 *           },
 *       "response": 
 *           {
 *           "list": 
 *               [
 *                   {
 *                       "kode": "0227",
 *                       "nama":"KAB. BADUNG"
 *                   },
 *                   {
 *                       "kode": "0230",
 *                       "nama":"KAB. BANGLI"
 *                   }
 *               ],
 *           }
 *   }
 */
function kabupaten() {
    return; 
}

/**
 * @api {get} /referensi/kecamatan/kabupaten/{kd_kab} Referensi Kecamatan
 * @apiName kecamatan
 * @apiGroup BPJS-Referensi
 * 
 * @apiParam {String} api_key Api Key terdaftar
 * @apiParam {String} kd_kab kode kabupaten terdaftar
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://api.rsudkraton.com/referensi/kecamatan/kabupaten/0125 \
 *      --header 'key: your-api-key' \
 * 
 * @apiSuccess {json} metadata Informasi code dan pesan
 * @apiSuccess {json} response Informasi kecamatan
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 *  {
 *       "metaData": 
 *           {
 *               "code": "200",
 *               "message": "Sukses"
 *           },
 *       "response": 
 *           {
 *           "list": 
 *               [
 *                   {
 *                       "kode": "3139",
 *                       "nama":"KUTA"
 *                   },
 *                   {
 *                       "kode": "3135",
 *                       "nama":"KUTA UTARA"
 *                   }
 *               ],
 *           }
 *   }
 */
function kecamatan() {
    return; 
}