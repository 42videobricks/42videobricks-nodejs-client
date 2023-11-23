/**
 * 42videobricks
 * 42videobricks is a Video Platform As A Service (VPaaS)
 *
 * The version of the OpenAPI document: 1.2
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
    instance = new Api42Vb.PlaylistsApi();
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

  describe('PlaylistsApi', function() {
    describe('addPlaylist', function() {
      it('should call addPlaylist successfully', function(done) {
        //uncomment below and update the code to test addPlaylist
        //instance.addPlaylist(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePlaylistById', function() {
      it('should call deletePlaylistById successfully', function(done) {
        //uncomment below and update the code to test deletePlaylistById
        //instance.deletePlaylistById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPlaylistById', function() {
      it('should call getPlaylistById successfully', function(done) {
        //uncomment below and update the code to test getPlaylistById
        //instance.getPlaylistById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPlaylists', function() {
      it('should call getPlaylists successfully', function(done) {
        //uncomment below and update the code to test getPlaylists
        //instance.getPlaylists(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePlaylistById', function() {
      it('should call updatePlaylistById successfully', function(done) {
        //uncomment below and update the code to test updatePlaylistById
        //instance.updatePlaylistById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
