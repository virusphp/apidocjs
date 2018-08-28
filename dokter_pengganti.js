var currentUser = {
    name: 'Sugandi'
};

/**
 * @api {get} /getdokterpengganti/{kd_poli}/{tgl_reg} Dokter Pengganti
 * @apiName getDokterPengganti
 * @apiGroup Dokter
 * 
 * @apiParam {String} api_key Api Key terdaftar
 * @apiParam {Integer} kd_sub_unit Kode sub unit (Poliklinik)
 * @apiParam {Date} tgl_reg Tanggal registrasi (Tanggal registrasi)
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://api.rsudkraton.com/getdokterpengganti/1/2018-1-1' \
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
 * @api {get} /getalldokterpengganti Semua Dokter Pengganti
 * @apiName getAllDokterPengganti
 * @apiGroup Dokter
 * 
 * @apiParam {string} api_key Api Key terdaftar
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://api.rsudkraton.com/getalldokterpengganti' \
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

/**
 * @api {get} /getjadwaldokter/{tanggal} Cek Jadwal Dokter
 * @apiName getJadwalDokter
 * @apiGroup Dokter
 * 
 * @apiParam {string} api_key Api Key terdaftar
 * @apiParam {date} tanggal Tanggal registrasi (Tanggal registrasi)
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://api.rsudkraton.com/getjadwaldokter/2018-1-1' \
 *      --header 'key: your-api-key'
 * 
 * @apiSuccess {integer} curent_page Status halaman
 * @apiSuccess {array} data Informasi Dokter pengganti
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 * {
 *    "ok": true,
 *    "hasil": [
 *        {
 *          "Kd_Pegawai": "00000001",
 *          "Kd_Sub_Unit": 1,
 *          "nama_sub_unit": "Klinik Umum",
 *          "Kd_Hari": 3,
 *          "Jumlah_Kunjungan": 60,
 *          "nama_pegawai": "dr Apriliani Retno Nugrahini -"
 *        }
 *      ]
 * }
 */
function getJadwalDokter() {
    return; 
}