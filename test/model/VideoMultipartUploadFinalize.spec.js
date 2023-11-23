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
    instance = new Api42Vb.VideoMultipartUploadFinalize();
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

  describe('VideoMultipartUploadFinalize', function() {
    it('should create an instance of VideoMultipartUploadFinalize', function() {
      // uncomment below and update the code to test VideoMultipartUploadFinalize
      //var instance = new Api42Vb.VideoMultipartUploadFinalize();
      //expect(instance).to.be.a(Api42Vb.VideoMultipartUploadFinalize);
    });

    it('should have the property fileId (base name: "fileId")', function() {
      // uncomment below and update the code to test the property fileId
      //var instance = new Api42Vb.VideoMultipartUploadFinalize();
      //expect(instance).to.be();
    });

    it('should have the property fileKey (base name: "fileKey")', function() {
      // uncomment below and update the code to test the property fileKey
      //var instance = new Api42Vb.VideoMultipartUploadFinalize();
      //expect(instance).to.be();
    });

    it('should have the property parts (base name: "parts")', function() {
      // uncomment below and update the code to test the property parts
      //var instance = new Api42Vb.VideoMultipartUploadFinalize();
      //expect(instance).to.be();
    });

  });

}));
