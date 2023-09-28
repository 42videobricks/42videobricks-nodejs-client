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
    instance = new 42videobricks.VideoAttachment();
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

  describe('VideoAttachment', function() {
    it('should create an instance of VideoAttachment', function() {
      // uncomment below and update the code to test VideoAttachment
      //var instance = new 42videobricks.VideoAttachment();
      //expect(instance).to.be.a(42videobricks.VideoAttachment);
    });

    it('should have the property videoId (base name: "videoId")', function() {
      // uncomment below and update the code to test the property videoId
      //var instance = new 42videobricks.VideoAttachment();
      //expect(instance).to.be();
    });

    it('should have the property attachmentType (base name: "attachmentType")', function() {
      // uncomment below and update the code to test the property attachmentType
      //var instance = new 42videobricks.VideoAttachment();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new 42videobricks.VideoAttachment();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new 42videobricks.VideoAttachment();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instance = new 42videobricks.VideoAttachment();
      //expect(instance).to.be();
    });

  });

}));
