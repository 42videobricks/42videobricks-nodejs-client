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

import ApiClient from '../ApiClient';

/**
 * The VideoAssets model module.
 * @module model/VideoAssets
 * @version 1.1
 */
class VideoAssets {
    /**
     * Constructs a new <code>VideoAssets</code>.
     * Video Assets Object
     * @alias module:model/VideoAssets
     */
    constructor() { 
        
        VideoAssets.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VideoAssets</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VideoAssets} obj Optional instance to populate.
     * @return {module:model/VideoAssets} The populated <code>VideoAssets</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VideoAssets();

            if (data.hasOwnProperty('thumbnail')) {
                obj['thumbnail'] = ApiClient.convertToType(data['thumbnail'], 'String');
            }
            if (data.hasOwnProperty('player')) {
                obj['player'] = ApiClient.convertToType(data['player'], 'String');
            }
            if (data.hasOwnProperty('stream')) {
                obj['stream'] = ApiClient.convertToType(data['stream'], 'String');
            }
            if (data.hasOwnProperty('iframe')) {
                obj['iframe'] = ApiClient.convertToType(data['iframe'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VideoAssets</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VideoAssets</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['thumbnail'] && !(typeof data['thumbnail'] === 'string' || data['thumbnail'] instanceof String)) {
            throw new Error("Expected the field `thumbnail` to be a primitive type in the JSON string but got " + data['thumbnail']);
        }
        // ensure the json data is a string
        if (data['player'] && !(typeof data['player'] === 'string' || data['player'] instanceof String)) {
            throw new Error("Expected the field `player` to be a primitive type in the JSON string but got " + data['player']);
        }
        // ensure the json data is a string
        if (data['stream'] && !(typeof data['stream'] === 'string' || data['stream'] instanceof String)) {
            throw new Error("Expected the field `stream` to be a primitive type in the JSON string but got " + data['stream']);
        }
        // ensure the json data is a string
        if (data['iframe'] && !(typeof data['iframe'] === 'string' || data['iframe'] instanceof String)) {
            throw new Error("Expected the field `iframe` to be a primitive type in the JSON string but got " + data['iframe']);
        }

        return true;
    }


}



/**
 * Url of the video thumbnail (cann be empty ?)
 * @member {String} thumbnail
 */
VideoAssets.prototype['thumbnail'] = undefined;

/**
 * Url to the video player code
 * @member {String} player
 */
VideoAssets.prototype['player'] = undefined;

/**
 * Url to the video player stream
 * @member {String} stream
 */
VideoAssets.prototype['stream'] = undefined;

/**
 * html code to integrate the player in an iframe
 * @member {String} iframe
 */
VideoAssets.prototype['iframe'] = undefined;






export default VideoAssets;

