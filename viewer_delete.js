var currentUser = {
    name: 'Sugandi'
};

/**
 * @api {delete} /api/eclaim/delete/{no_reg} Delete ke Viewer
 * @apiName ViewerDelete
 * @apiGroup Viewer-Bpjs
 * 
 * @apiParam {json} json request json 
 * 
 * @apiExample Example usage:
 * curl --request PUT \
 *      --url 'https://viewer.rsudkraton.com/api/eclaim/delete/013151561615' \
 *      --Content-Type 'application/json' \
 * 
 * @apiSuccess {json} metadata Informasi code
 * @apiSuccess {json} response Informasi Vuewer
 * 
 * @apiSuccessExample {json} Request-Sample:
 *                                                     
 *       {
 *          "no_reg": "013151561615",
 *       }                    
 * 
 * @apiSuccessExample {json} Success-Response:
 *       {
 *          "kode":  200
 *          "pesan":  "Data berhaisl diHapus!"
 *       }
 */
function createVirified() {
    return; 
}