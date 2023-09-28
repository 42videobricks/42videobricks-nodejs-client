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
 * The DataVideoUsage model module.
 * @module model/DataVideoUsage
 * @version 1.1
 */
class DataVideoUsage {
    /**
     * Constructs a new <code>DataVideoUsage</code>.
     * Video Usage KPIs
     * @alias module:model/DataVideoUsage
     * @param monthId {String} month of the kpis
     * @param transcoding {Number} total of transcoding second since the begining of the month
     * @param hosting {Number} total of hosting second since the begining of the month
     */
    constructor(monthId, transcoding, hosting) { 
        
        DataVideoUsage.initialize(this, monthId, transcoding, hosting);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, monthId, transcoding, hosting) { 
        obj['monthId'] = monthId;
        obj['transcoding'] = transcoding;
        obj['hosting'] = hosting;
    }

    /**
     * Constructs a <code>DataVideoUsage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DataVideoUsage} obj Optional instance to populate.
     * @return {module:model/DataVideoUsage} The populated <code>DataVideoUsage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DataVideoUsage();

            if (data.hasOwnProperty('monthId')) {
                obj['monthId'] = ApiClient.convertToType(data['monthId'], 'String');
            }
            if (data.hasOwnProperty('transcoding')) {
                obj['transcoding'] = ApiClient.convertToType(data['transcoding'], 'Number');
            }
            if (data.hasOwnProperty('hosting')) {
                obj['hosting'] = ApiClient.convertToType(data['hosting'], 'Number');
            }
            if (data.hasOwnProperty('delivery')) {
                obj['delivery'] = ApiClient.convertToType(data['delivery'], 'Number');
            }
            if (data.hasOwnProperty('drm')) {
                obj['drm'] = ApiClient.convertToType(data['drm'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DataVideoUsage</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DataVideoUsage</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DataVideoUsage.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['monthId'] && !(typeof data['monthId'] === 'string' || data['monthId'] instanceof String)) {
            throw new Error("Expected the field `monthId` to be a primitive type in the JSON string but got " + data['monthId']);
        }

        return true;
    }


}

DataVideoUsage.RequiredProperties = ["monthId", "transcoding", "hosting"];

/**
 * month of the kpis
 * @member {String} monthId
 */
DataVideoUsage.prototype['monthId'] = undefined;

/**
 * total of transcoding second since the begining of the month
 * @member {Number} transcoding
 */
DataVideoUsage.prototype['transcoding'] = undefined;

/**
 * total of hosting second since the begining of the month
 * @member {Number} hosting
 */
DataVideoUsage.prototype['hosting'] = undefined;

/**
 * total of delivery (stream) second since the begining of the month
 * @member {Number} delivery
 */
DataVideoUsage.prototype['delivery'] = undefined;

/**
 * total of delivery (stream) second since the begining of the month
 * @member {Number} drm
 */
DataVideoUsage.prototype['drm'] = undefined;






export default DataVideoUsage;
