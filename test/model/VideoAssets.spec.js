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
    factory(root.expect, root.42videobricks);
  }
}(this, function(expect, 42videobricks) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new 42videobricks.VideoAssets();
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

  describe('VideoAssets', function() {
    it('should create an instance of VideoAssets', function() {
      // uncomment below and update the code to test VideoAssets
      //var instance = new 42videobricks.VideoAssets();
      //expect(instance).to.be.a(42videobricks.VideoAssets);
    });

    it('should have the property thumbnail (base name: "thumbnail")', function() {
      // uncomment below and update the code to test the property thumbnail
      //var instance = new 42videobricks.VideoAssets();
      //expect(instance).to.be();
    });

    it('should have the property player (base name: "player")', function() {
      // uncomment below and update the code to test the property player
      //var instance = new 42videobricks.VideoAssets();
      //expect(instance).to.be();
    });

    it('should have the property stream (base name: "stream")', function() {
      // uncomment below and update the code to test the property stream
      //var instance = new 42videobricks.VideoAssets();
      //expect(instance).to.be();
    });

    it('should have the property iframe (base name: "iframe")', function() {
      // uncomment below and update the code to test the property iframe
      //var instance = new 42videobricks.VideoAssets();
      //expect(instance).to.be();
    });

  });

}));