var currentUser = {
    name: 'Sugandi'
};

/**
 * @api {post} /sendPasien loginPasien
 * @apiName GetUser
 * @apiGroup Login
 * 
 * @apiParam {string} api_key Api Key terdaftar
 * @apiParam {integer} no_rm Nomer rekam medis terdaftar
 * @apiParam {bcrypt} tgl_lahir Tanggal lahir pasien terdaftar
 * 
 * @apiSuccess {booelan} ok Status sukses
 * @apiSuccess {object} hasil Informasi pasien login
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
  * {
 *     "ok": true,
 *     "hasil": {
 *         "no_rm": "123456",
 *         "nama_pasien": "AGUS MULYANI",
 *         "tgl_lahir": "1992-2-1",
 *         "jns_kel": 1,
 *         "alamat": "Desa Sijeruk RT2 RW3",
 *         "kd_kelurahan": 123,
 *         "jenis_pasien": 0,
 *         "cara_bayar": [
 *             {
 *                 "kd_cara_bayar": 2,
 *                 "keterangan": "Asuransi Lain",
 *             },
 *             {
 *                 "kd_cara_bayar": 2,
 *                 "keterangan": "Asuransi Lain",
 *             }
 *         ]
 *     }    
 * }
 */
function postUser() {
    return {code:200,data:currentUser};
}

function setName(name){
    if(name.length === 0){
        return {code:404,message:'Nama kosong error'};
    }
    currentUser.name = name;
    return {code:204};
}