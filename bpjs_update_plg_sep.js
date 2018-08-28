var currentUser = {
    name: 'Sugandi'
};

/**
 * @api {put} /sep/updtglplg Update Pulang 
 * @apiName updtglplg
 * @apiGroup BPJS-SEP
 * 
 * @apiParam {json} json request json 
 * 
 * @apiExample Example usage:
 * curl --request PUT \
 *      --url 'https://api.rsudkraton.com/sep/updtglplg' \
 *      --Content-Type 'application/json' \
 * 
 * @apiSuccess {json} metadata Informasi code dan pesan
 * @apiSuccess {json} response Informasi SEP
 * 
 * @apiSuccessExample {json} Request-Sample:
 *                                                     
 *                                                  
 *   {
 *      "request": {
 *         "t_sep": 
 *          {
 *              "noSep":"0301R00105160000569",
 *              "tglPulang":"2016-06-12",
 *              "user":"Coba Ws"
 *          }
 *      }
 *   }                
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 *     {
 *        "metaData": {
 *            "code": "200",
 *            "message": "Ok"
 *         },
 *         "response": "0301R00105160000569"
 *      }
 */
function updateplg() {
    return; 
}