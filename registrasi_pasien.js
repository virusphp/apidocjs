var currentUser = {
    name: 'Sugandi'
};

/**
 * @api {post} /sendregister registrasiPasien
 * @apiName SendPasien
 * @apiGroup Registrasi
 * 
 * @apiParam {String} api_key Api Key terdaftar
 * @apiParam {no_reg} no_reg Nomer registrasi medis terdaftar
 * @apiParam {kd_sub_unit} kd_sub_unit Kode Klinik terdaftar
 * @apiParam {no_RM} no_RM No Reka Medis terdaftar
 * @apiParam {tgl_reg} tgl_reg Tanggal registrasi
 * @apiParam {waktu} waktu Waktu registrasi&123456789124$%^&kd+su_su
 * @apiParam {kd_cara_bayar} kd_cara_bayar KD Bayar Pasien
 * @apiParam {user_id} user_id User Admin pendaftaran
 * @apiParam {kd_asal_pasien} kd_asal_pasien Kd Pasien registrasi 
 * @apiParam {kd_pegawai} kd_pegawai Kd Dokter terdaftar 
 * @apiParam {no_telp} no_telp No Telp pasien pendaftar 
 * @apiParam {kd_tarif} kd_tarif Kd Tarif Poli terdaftar 
 * 
 * @apiExample Example usage:
 * curl --request POST \
 *      --url 'https://api.rsudkraton.com/sendregister' \
 *      --header 'content-type: application/x-www-form-urlencoded' \
 *      --header 'key: your-api-key'
 *      --data 'no_RM=123456&no_reg=123456789124&kd_sub_unit=2&no_RM=123456&tgl_reg=2018-06-12& \
 *              waktu=11:22:11&kd_cara_bayar=1&user_id=0003&kd_asal_pasien=3&kd_pegawai=000023&no_telp=08825468&kd_tarif=33'
 * 
 * @apiSuccess {booelan} ok Status sukses
 * @apiSuccess {object} hasil Informasi registrasi pasien
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
  * {
 *     "ok": true,
 *     "hasil": {
 *         "no_antrian": "1",
 *         "nama_poli": "Poli Umum"
 *     }    
 * }
 */

/**
 * @api {put} /updateregister Updateregistrasi
 * @apiName UpdatePasien
 * @apiGroup Registrasi
 * 
 * @apiParam {String} api_key Api Key terdaftar
 * @apiParam {no_reg} no_reg Nomer registrasi medis terdaftar
 * @apiParam {no_RM} no_RM No Reka Medis terdaftar
 * @apiParam {no_SJP} no_SJP No SEP 
 * 
 * @apiExample Example usage:
 * curl --request PUT \
 *      --url 'https://api.rsudkraton.com/updateregister' \
 *      --header 'content-type: application/x-www-form-urlencoded' \
 *      --header 'key: your-api-key' \
 *      --data 'no_RM=123456&no_reg=123456789124&no_SJP=2JI3J3K123456'
 * 
 * @apiSuccess {booelan} ok Status sukses
 * @apiSuccess {object} hasil Informasi registrasi pasien
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 * {
 *     "ok": true,
 *     "hasil": {
 *         "no_SJP": "success",
 *     }    
 * }
*/

function postRegister() {
    return {code:200,data:currentUser};
}

function setName(name){
    if(name.length === 0){
        return {code:404,message:'Nama kosong error'};
    }
    currentUser.name = name;
    return {code:204};
}