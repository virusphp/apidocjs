var currentUser = {
    name: 'Sugandi'
};

/**
 * @api {post} /sendpasien loginPasien
 * @apiName GetUser
 * @apiGroup Login
 * 
 * @apiParam {String} api_key Api Key terdaftar
 * @apiParam {Integer} no_RM Nomer rekam medis terdaftar
 * @apiParam {Date} tgl_lahir Tanggal lahir pasien terdaftar
 * 
 * @apiExample Example usage:
 * curl --request POST \
 *      --url 'https://api.rsudkraton.com/sendpasien' \
 *      --header 'content-type: application/x-www-form-urlencoded' \
 *      --header 'key: your-api-key'
 *      --data 'no_RM=123456&tgl_lahir=1992-2-1'
 * 
 * @apiSuccess {booelan} ok Status sukses
 * @apiSuccess {object} hasil Informasi pasien login
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
  * {
 *     "ok": true,
 *     "hasil": {
 *         "no_RM": "123456",
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