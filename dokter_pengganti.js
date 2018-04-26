var currentUser = {
    name: 'Sugandi'
};

/**
 * @api {get} /getdokterpengganti/namaPoli getDokterPengganti
 * @apiName getDokterPengganti
 * @apiGroup Dokter
 * 
 * @apiParam {string} api_key Api Key terdaftar
 * @apiParam {integer} kd_sub_unit Kode sub unit (Poliklinik)
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://e-hospital-jateng.com/getdokterpengganti/1' \
 *      --header 'key: your-api-key'
 * 
 * @apiSuccess {booelan} ok Status sukses
 * @apiSuccess {object} hasil Informasi Dokter pengganti
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
* {
 *     "ok": true,
 *     "hasil": [
 *          "Kd_Pegawai": "123456",
 *          "Kd_Sub_Unit": 1,
 *          "Kd_Hari": 2,
 *          "Jumlah_Kunjungan": 50,
 *          "nama_pegawai": "dr Agustina Angelita"
 *      ]
 * }
 */
function getDokterPengganti() {
    return; 
}

/**
 * @api {get} /getalldokterpengganti getAllDokterPengganti
 * @apiName getAllDokterPengganti
 * @apiGroup Dokter
 * 
 * @apiParam {string} api_key Api Key terdaftar
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://e-hospital-jateng.com/getalldokterpengganti' \
 *      --header 'key: your-api-key'
 * 
 * @apiSuccess {integer} curent_page Status halaman
 * @apiSuccess {array} data Informasi Dokter pengganti
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
* {
 *     "current_page": 1,
 *     "data": [
 *          "Kd_Izin": 1,
 *          "Kd_Pegawai": "123456",
 *          "Kd_Sub_Unit": 1,
 *          "tanggal": "2018-04-04"
 *          "Status_Pergantian": 1,
 *          "keterangan": "Poli tutup dokter sedang ijin"
 *      ]
 * }
 */
function getAllDokterPengganti() {
    return; 
}