var currentUser = {
    name: 'Sugandi'
};

/**
 * @api {delete} /sep/delete deleteSep
 * @apiName deleteSep
 * @apiGroup BPJS-SEP
 * 
 * @apiParam {json} json request json 
 * 
 * @apiExample Example usage:
 * curl --request DELETE \
 *      --url 'https://api.rsudkraton.com/sep/delete' \
 *      --Content-Type 'application/json' \
 * 
 * @apiSuccess {json} metadata Informasi code dan pesan
 * @apiSuccess {json} response Informasi SEP
 * 
 * @apiSuccessExample {json} Request-Sample:
 *                                                  
 *  {
 *     "request": {
 *        "t_sep": {
 *           "noSep": "0301R0011017V000007",
 *           "user": "Coba Ws"
 *        }
 *     }
 *  }
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 *  {
 *    "metaData": {
 *           "code": "200"
 *           "message": "OK"
 *       }
 *   "response": "0301R0011017V000007"
 * }
 */
function deleteSep() {
    return; 
}