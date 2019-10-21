var currentUser = {
    name: 'Sugandi'
};

/**
 * @api {put} /api/eclaim/update/{no_reg} Update ke Viewer
 * @apiName ViewerUpdate
 * @apiGroup Viewer-Bpjs
 * 
 * @apiParam {json} json request json 
 * 
 * @apiExample Example usage:
 * curl --request PUT \
 *      --url 'https://viewer.rsudkraton.com/api/eclaim/update/013151561615' \
 *      --Content-Type 'application/json' \
 * 
 * @apiSuccess {json} metadata Informasi code
 * @apiSuccess {json} response Informasi Vuewer
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
 *          "pesan":  "Data berhaisl diUpdate!"
 *       }
 */
function createVirified() {
    return; 
}