var currentUser = {
    name: 'Sugandi'
};

/**
 * @api {post} /user/create Get Data Registrasi User
 * @apiName getUserApi
 * @apiGroup UserAPI
 * @apiPermission admin
 * 
 * @apiParam {String} nama Nama pengguna
 * @apiParam {String} username Username pengguna
 * @apiParam {String} email Email pengguna
 * @apiParam {string} password Password pengguna
 * @apiParam {String} kota Kota Asal pengguna
 * 
 * @apiExample Example usage:
 * curl --request GET \
 *      --url 'https://api.rsudkraton.com/user/create' \
 * 
 * @apiSuccess {boolean} ok Status registrasi
 * @apiSuccess {string} pesan registrasi sukses
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 *  {
 *          "oke": true,
 *          "pesan": "Berhasil Registrasi",
 *  }
 * 
 */
function getRegisterUser() {
    return; 
}