var currentUser = {
    name: 'Sugandi'
};

/**
 * @api {get} /referensi/diagnosa/{parameter} diagnosa
 * @apiName diagnosa
 * @apiGroup Referensi
 * 
 * @apiParam {String} api_key Api Key terdaftar
 * @apiParam {string} kd_diagnosa Kode diagnosa terdaftar
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://api.rsudkraton.com/referensi/diagnosa/A05' \
 *      --header 'key: your-api-key' \
 * 
 * @apiSuccess {json} metadata Informasi code dan pesan
 * @apiSuccess {json} response Informasi diagnosa
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
 *           "diagnosa": 
 *               [
 *                   {
 *                       "kode": "A04",
 *                       "nama": "A04 - Other bacterial intestinal infections"
 *                   }
 *               ],
 *           }
 *   }
 */
function diagnosa() {
    return; 
}

/**
 * @api {get} /referensi/poli/{parameter} poli
 * @apiName poli 
 * @apiGroup Referensi
 * 
 * @apiParam {string} kd_poli Kode Poli terdaftar
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://api.rsudkraton.com/referensi/poli/ICU' \
 *      --header 'key: your-api-key' \
 * 
 * @apiSuccess {json} metadata Informasi code dan pesan
 * @apiSuccess {json} response Informasi diagnosa
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 *{
 *   "metaData": {
 *       "code": "200",
 *       "message": "Sukses"
 *   },
 *   "response": {
 *       "poli": [
 *           {
 *               "kode": "ICU",
 *               "nama": "Intensive Care Unit"
 *           }
 *       ]
 *   }
 *}
 */
function poli() {
    return; 
}

/**
 * @api {get} /referensi/dokter/{parameter} dokter
 * @apiName dokter 
 * @apiGroup Referensi
 * 
 * @apiParam {string} nama_dokter Nama Dokter terdaftar
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://api.rsudkraton.com/referensi/dokter/Satroni%20Lawa' \
 *      --header 'key: your-api-key' \
 * 
 * @apiSuccess {json} metadata Informasi code dan pesan
 * @apiSuccess {json} response Informasi diagnosa
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 *{
 *          "metaData":{
 *             "code":"200",
 *             "message":"Sukses"
 *          },
 *          "response":{
 *             "list":[
 *                {
 *                   "kode":"3",
 *                   "nama":"Satro Jadhit, dr"
 *                },
 *                {
 *                   "kode":"2",
 *                   "nama":"Satroni Lawa, dr"
 *                }
 *             ]
 *          }
 *       }
 */
function dokter() {
    return; 
}