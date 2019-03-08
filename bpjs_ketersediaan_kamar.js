var currentUser = {
    name: 'Sugandi'
};

/**
 * @api {post} /kamar/create/{ppk} Buat Kamar
 * @apiName createKamar
 * @apiGroup BPJS-Kamar
 * 
 * @apiParam {json} json request json 
 * 
 * @apiExample Example usage:
 * curl --request POST \
 *      --url 'https://api.rsudkraton.com/kamar/create/115051' \
 *      --Content-Type 'application/json' \
 * 
 * @apiSuccess {json} metadata Informasi code dan pesan
 * @apiSuccess {json} response Informasi Kamar
 * 
 * @apiSuccessExample {json} Request-Sample:
 *                                                     
 *       {
 *           "kodekelas": "VIP",
 *           "koderuang": "VIP 1",
 *           "namaruang": "Ruang Angrek VIP",
 *           "kapasitas": "1",
 *           "tersedia": "0",
 *           "tersediapria": "0",
 *           "tersediawanita": "0",
 *           "tersediapriawanita": "0"
 *       }                   
 * 
 * @apiSuccessExample {json} Success-Response:
 *       {
 *          "metaData": {
 *             "code": "1",
 *             "message": "Data berhaisil di simpan."
 *          },
 *       }
 */
function buatKamar() {
    return; 
}

/**
 * @api {post} /kamar/update/{ppk} Update Kamar
 * @apiName updateKamar
 * @apiGroup BPJS-Kamar
 * 
 * @apiParam {json} json request json 
 * 
 * @apiExample Example usage:
 * curl --request POST \
 *      --url 'https://api.rsudkraton.com/kamar/update/115051' \
 *      --Content-Type 'application/json' \
 * 
 * @apiSuccess {json} metadata Informasi code dan pesan
 * @apiSuccess {json} response Informasi Kamar
 * 
 * @apiSuccessExample {json} Request-Sample:
 *                                                     
 *       {
 *           "kodekelas": "VIP",
 *           "koderuang": "VIP 1",
 *           "namaruang": "Ruang Angrek VIP",
 *           "kapasitas": "1",
 *           "tersedia": "0",
 *           "tersediapria": "0",
 *           "tersediawanita": "0",
 *           "tersediapriawanita": "0"
 *       }                   
 * 
 * @apiSuccessExample {json} Success-Response:
 *       {
 *          "metaData": {
 *             "code": "1",
 *             "message": "Data berhaisil di simpan."
 *          },
 *       }
 */
function updateKamar() {
    return; 
}

/**
 * @api {post} /kamar/update/{ppk} Hapus Kamar
 * @apiName hapusKamar
 * @apiGroup BPJS-Kamar
 * 
 * @apiParam {json} json request json 
 * 
 * @apiExample Example usage:
 * curl --request POST \
 *      --url 'https://api.rsudkraton.com/kamar/update/115051' \
 *      --Content-Type 'application/json' \
 * 
 * @apiSuccess {json} metadata Informasi code dan pesan
 * @apiSuccess {json} response Informasi Kamar
 * 
 * @apiSuccessExample {json} Request-Sample:
 *                                                     
 *       {
 *           "kodekelas": "VIP",
 *           "koderuang": "VIP 1",
 *       }                   
 * 
 * @apiSuccessExample {json} Success-Response:
 *       {
 *          "metaData": {
 *             "code": "1",
 *             "message": "Data berhaisil di hapus."
 *          },
 *       }
 */
function hapusKamar() {
    return; 
}

/**
 * @api {get} /kamar/show/{ppk}/{start}/{limit} Show Kamar
 * @apiName showKamar
 * @apiGroup BPJS-Kamar
 * 
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://api.rsudkraton.com/kamar/show/115051/1/2' \
 *      --Content-Type 'application/json' \
 * 
 * @apiSuccess {json} metadata Informasi code dan pesan
 * @apiSuccess {json} response Informasi Kamar
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 *       {
 *          "metaData": {
 *             "code": "1",
 *             "message": "Data berhaisil di hapus."
 *          },
 *          "response": {
 *          }
 *       }
 */
function showKamar() {
    return; 
}