/**
 * API Agillitas Cartões Pré-pagos
 * API para manipular recursos relacionadas aos  cartões pré-pagos Agillitas.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DetalhamentoExtrato'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DetalhamentoExtrato'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiAgillitasCartesPrPagos) {
      root.ApiAgillitasCartesPrPagos = {};
    }
    root.ApiAgillitasCartesPrPagos.ExtratoResponse = factory(root.ApiAgillitasCartesPrPagos.ApiClient, root.ApiAgillitasCartesPrPagos.DetalhamentoExtrato);
  }
}(this, function(ApiClient, DetalhamentoExtrato) {
  'use strict';




  /**
   * The ExtratoResponse model module.
   * @module model/ExtratoResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ExtratoResponse</code>.
   * @alias module:model/ExtratoResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ExtratoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExtratoResponse} obj Optional instance to populate.
   * @return {module:model/ExtratoResponse} The populated <code>ExtratoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('extrato')) {
        obj['extrato'] = ApiClient.convertToType(data['extrato'], [DetalhamentoExtrato]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/DetalhamentoExtrato>} extrato
   */
  exports.prototype['extrato'] = undefined;



  return exports;
}));


