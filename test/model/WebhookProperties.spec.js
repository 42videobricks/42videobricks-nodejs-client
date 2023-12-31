/**
 * 42videobricks
 * 42videobricks is a Video Platform As A Service (VPaaS)
 *
 * The version of the OpenAPI document: 1.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Api42Vb);
  }
}(this, function(expect, Api42Vb) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Api42Vb.WebhookProperties();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('WebhookProperties', function() {
    it('should create an instance of WebhookProperties', function() {
      // uncomment below and update the code to test WebhookProperties
      //var instance = new Api42Vb.WebhookProperties();
      //expect(instance).to.be.a(Api42Vb.WebhookProperties);
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new Api42Vb.WebhookProperties();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instance = new Api42Vb.WebhookProperties();
      //expect(instance).to.be();
    });

    it('should have the property eventType (base name: "eventType")', function() {
      // uncomment below and update the code to test the property eventType
      //var instance = new Api42Vb.WebhookProperties();
      //expect(instance).to.be();
    });

  });

}));
