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
    define(['ApiClient', 'model/NovoCartaoPortadorContato', 'model/NovoCartaoPortadorEndereco'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NovoCartaoPortadorContato'), require('./NovoCartaoPortadorEndereco'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiAgillitasCartesPrPagos) {
      root.ApiAgillitasCartesPrPagos = {};
    }
    root.ApiAgillitasCartesPrPagos.NovoCartaoPortador = factory(root.ApiAgillitasCartesPrPagos.ApiClient, root.ApiAgillitasCartesPrPagos.NovoCartaoPortadorContato, root.ApiAgillitasCartesPrPagos.NovoCartaoPortadorEndereco);
  }
}(this, function(ApiClient, NovoCartaoPortadorContato, NovoCartaoPortadorEndereco) {
  'use strict';




  /**
   * The NovoCartaoPortador model module.
   * @module model/NovoCartaoPortador
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>NovoCartaoPortador</code>.
   * @alias module:model/NovoCartaoPortador
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>NovoCartaoPortador</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NovoCartaoPortador} obj Optional instance to populate.
   * @return {module:model/NovoCartaoPortador} The populated <code>NovoCartaoPortador</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('sobrenome')) {
        obj['sobrenome'] = ApiClient.convertToType(data['sobrenome'], 'String');
      }
      if (data.hasOwnProperty('dataNascimento')) {
        obj['dataNascimento'] = ApiClient.convertToType(data['dataNascimento'], 'Date');
      }
      if (data.hasOwnProperty('cpf')) {
        obj['cpf'] = ApiClient.convertToType(data['cpf'], 'String');
      }
      if (data.hasOwnProperty('contato')) {
        obj['contato'] = NovoCartaoPortadorContato.constructFromObject(data['contato']);
      }
      if (data.hasOwnProperty('endereco')) {
        obj['endereco'] = NovoCartaoPortadorEndereco.constructFromObject(data['endereco']);
      }
    }
    return obj;
  }

  /**
   * Nome do portador do cartão.
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;
  /**
   * Sobrenome do portador do cartão.
   * @member {String} sobrenome
   */
  exports.prototype['sobrenome'] = undefined;
  /**
   * Data de nascimento do portador do cartão (YYYY-MM-DD).
   * @member {Date} dataNascimento
   */
  exports.prototype['dataNascimento'] = undefined;
  /**
   * Numero do cadastro de pessoas física do portador.  Não deve conter pontos ou hífen.
   * @member {String} cpf
   */
  exports.prototype['cpf'] = undefined;
  /**
   * @member {module:model/NovoCartaoPortadorContato} contato
   */
  exports.prototype['contato'] = undefined;
  /**
   * @member {module:model/NovoCartaoPortadorEndereco} endereco
   */
  exports.prototype['endereco'] = undefined;



  return exports;
}));


