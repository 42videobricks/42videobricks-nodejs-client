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
 * The VideoMultipartUploadInitResponsePartsInner model module.
 * @module model/VideoMultipartUploadInitResponsePartsInner
 * @version 1.1.1
 */
class VideoMultipartUploadInitResponsePartsInner {
    /**
     * Constructs a new <code>VideoMultipartUploadInitResponsePartsInner</code>.
     * part signed url object
     * @alias module:model/VideoMultipartUploadInitResponsePartsInner
     */
    constructor() { 
        
        VideoMultipartUploadInitResponsePartsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VideoMultipartUploadInitResponsePartsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VideoMultipartUploadInitResponsePartsInner} obj Optional instance to populate.
     * @return {module:model/VideoMultipartUploadInitResponsePartsInner} The populated <code>VideoMultipartUploadInitResponsePartsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VideoMultipartUploadInitResponsePartsInner();

            if (data.hasOwnProperty('signedUrl')) {
                obj['signedUrl'] = ApiClient.convertToType(data['signedUrl'], 'String');
            }
            if (data.hasOwnProperty('PartNumber')) {
                obj['PartNumber'] = ApiClient.convertToType(data['PartNumber'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VideoMultipartUploadInitResponsePartsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VideoMultipartUploadInitResponsePartsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['signedUrl'] && !(typeof data['signedUrl'] === 'string' || data['signedUrl'] instanceof String)) {
            throw new Error("Expected the field `signedUrl` to be a primitive type in the JSON string but got " + data['signedUrl']);
        }

        return true;
    }


}



/**
 * part signed url
 * @member {String} signedUrl
 */
VideoMultipartUploadInitResponsePartsInner.prototype['signedUrl'] = undefined;

/**
 * part number
 * @member {Number} PartNumber
 */
VideoMultipartUploadInitResponsePartsInner.prototype['PartNumber'] = undefined;






export default VideoMultipartUploadInitResponsePartsInner;

