var currentUser = {
    name: 'Sugandi'
};

/**
 * @api {post} /api/eclaim/create Simpan ke Viewer
 * @apiName ViewerPost
 * @apiGroup Viewer-Bpjs
 * 
 * @apiParam {json} json request json 
 * 
 * @apiExample Example usage:
 * curl --request POST \
 *      --url 'https://viewer.rsudkraton.com/api/eclaim/create' \
 *      --Content-Type 'application/json' \
 * 
 * @apiSuccess {json} metadata Informasi code
 * @apiSuccess {json} response Informasi Viewer
 * 
 * @apiSuccessExample {json} Request-Sample:
 *                                                     
 *       {
 *          "no_rm": "123515",
 *          "no_reg": "013151561615",
 *          "no_sep": "12154515151515",
 *          "tgl_sep": "2019-10-10",
 *          "file_claim": "fileclaim.pdf"
 *       }                    
 * 
 * @apiSuccessExample {json} Success-Response:
 *       {
 *          "kode":  200
 *          "pesan":  "Data berhaisl disimpan!"
 *       }
 */
function createVirified() {
    return; 
}