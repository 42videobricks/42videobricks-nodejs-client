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

import ApiClient from '../ApiClient';
import Pagination from './Pagination';
import Video from './Video';

/**
 * The VideoList model module.
 * @module model/VideoList
 * @version 1.2.0
 */
class VideoList {
    /**
     * Constructs a new <code>VideoList</code>.
     * Video Object list
     * @alias module:model/VideoList
     * @implements module:model/Pagination
     * @param offset {Number} 
     * @param limit {Number} 
     * @param total {Number} 
     */
    constructor(offset, limit, total) { 
        Pagination.initialize(this, offset, limit, total);
        VideoList.initialize(this, offset, limit, total);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, offset, limit, total) { 
        obj['offset'] = offset;
        obj['limit'] = limit;
        obj['total'] = total;
    }

    /**
     * Constructs a <code>VideoList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VideoList} obj Optional instance to populate.
     * @return {module:model/VideoList} The populated <code>VideoList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VideoList();
            Pagination.constructFromObject(data, obj);

            if (data.hasOwnProperty('offset')) {
                obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Video]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VideoList</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VideoList</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of VideoList.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['data']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['data'])) {
                throw new Error("Expected the field `data` to be an array in the JSON data but got " + data['data']);
            }
            // validate the optional field `data` (array)
            for (const item of data['data']) {
                Video.validateJSON(item);
            };
        }

        return true;
    }


}

VideoList.RequiredProperties = ["offset", "limit", "total"];

/**
 * @member {Number} offset
 */
VideoList.prototype['offset'] = undefined;

/**
 * @member {Number} limit
 */
VideoList.prototype['limit'] = undefined;

/**
 * @member {Number} total
 */
VideoList.prototype['total'] = undefined;

/**
 * @member {Array.<module:model/Video>} data
 */
VideoList.prototype['data'] = undefined;


// Implement Pagination interface:
/**
 * @member {Number} offset
 */
Pagination.prototype['offset'] = undefined;
/**
 * @member {Number} limit
 */
Pagination.prototype['limit'] = undefined;
/**
 * @member {Number} total
 */
Pagination.prototype['total'] = undefined;




export default VideoList;

