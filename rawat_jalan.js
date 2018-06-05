var currentUser = {
    name: 'Sugandi'
};

/**
 * @api {get} /getrawatjalan/{no_reg} getRawatJalan
 * @apiName getRawatJalan
 * @apiGroup RawatJalan
 * 
 * @apiParam {String} api_key Api Key terdaftar
 * @apiParam {String} no_reg No registrasi pasien
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://api.rsudkraton.com/getrawatjalan/00000000124' \
 *      --header 'key: your-api-key'
 * 
 * @apiSuccess {integer} current_page Status halaman
 * @apiSuccess {array} data Informasi Tarif karcis
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 * {
 *    "ok": true,
 *    "hasil": 
 *        {
 *          "no_reg": "00000000124",
 *          "no_RM": "360418",
 *          "kd_poliklinik": 33,
 *          "kd_cara_kunjungan": 1,
 *          "status_kunjungan": 0,
 *          "jns_kasus": 1,
 *          "waktu_anamnesa": "2015-01-01 09:33:27",
 *          "uraian_anamnesa": "",
 *          "terapi": "",
 *          "status_proses": 1,
 *          "kd_dokter": "00000047",
 *          "status_berkas": "0",
 *          "Status_Diagnosa": "1",
 *          "no_reg_tahunan": "2015.000001",
 *          "Status_Tambah_Diagnosa": 1,
 *          "Waktu_Dokumen_Keluar": null,
 *          "Waktu_Dokumen_Kembali": null,
 *          "Reg_SMS": null
 *        }
 * }
 */
function getJawatJalan() {
    return; 
}