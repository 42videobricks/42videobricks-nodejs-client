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
import VideoMultipartUploadInitResponsePartsInner from './VideoMultipartUploadInitResponsePartsInner';

/**
 * The VideoMultipartUploadInitResponse model module.
 * @module model/VideoMultipartUploadInitResponse
 * @version 1.1
 */
class VideoMultipartUploadInitResponse {
    /**
     * Constructs a new <code>VideoMultipartUploadInitResponse</code>.
     * Video Mutlipart Upload Init response object
     * @alias module:model/VideoMultipartUploadInitResponse
     */
    constructor() { 
        
        VideoMultipartUploadInitResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VideoMultipartUploadInitResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VideoMultipartUploadInitResponse} obj Optional instance to populate.
     * @return {module:model/VideoMultipartUploadInitResponse} The populated <code>VideoMultipartUploadInitResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VideoMultipartUploadInitResponse();

            if (data.hasOwnProperty('chunkSize')) {
                obj['chunkSize'] = ApiClient.convertToType(data['chunkSize'], 'Number');
            }
            if (data.hasOwnProperty('fileId')) {
                obj['fileId'] = ApiClient.convertToType(data['fileId'], 'String');
            }
            if (data.hasOwnProperty('fileKey')) {
                obj['fileKey'] = ApiClient.convertToType(data['fileKey'], 'String');
            }
            if (data.hasOwnProperty('parts')) {
                obj['parts'] = ApiClient.convertToType(data['parts'], [VideoMultipartUploadInitResponsePartsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VideoMultipartUploadInitResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VideoMultipartUploadInitResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['fileId'] && !(typeof data['fileId'] === 'string' || data['fileId'] instanceof String)) {
            throw new Error("Expected the field `fileId` to be a primitive type in the JSON string but got " + data['fileId']);
        }
        // ensure the json data is a string
        if (data['fileKey'] && !(typeof data['fileKey'] === 'string' || data['fileKey'] instanceof String)) {
            throw new Error("Expected the field `fileKey` to be a primitive type in the JSON string but got " + data['fileKey']);
        }
        if (data['parts']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['parts'])) {
                throw new Error("Expected the field `parts` to be an array in the JSON data but got " + data['parts']);
            }
            // validate the optional field `parts` (array)
            for (const item of data['parts']) {
                VideoMultipartUploadInitResponsePartsInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * part chunk size
 * @member {Number} chunkSize
 */
VideoMultipartUploadInitResponse.prototype['chunkSize'] = undefined;

/**
 * file id
 * @member {String} fileId
 */
VideoMultipartUploadInitResponse.prototype['fileId'] = undefined;

/**
 * file key
 * @member {String} fileKey
 */
VideoMultipartUploadInitResponse.prototype['fileKey'] = undefined;

/**
 * @member {Array.<module:model/VideoMultipartUploadInitResponsePartsInner>} parts
 */
VideoMultipartUploadInitResponse.prototype['parts'] = undefined;






export default VideoMultipartUploadInitResponse;
