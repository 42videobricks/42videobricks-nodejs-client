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


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import Video from '../model/Video';
import VideoAttachmentList from '../model/VideoAttachmentList';
import VideoList from '../model/VideoList';
import VideoMultipartUploadFinalize from '../model/VideoMultipartUploadFinalize';
import VideoMultipartUploadInit from '../model/VideoMultipartUploadInit';
import VideoMultipartUploadInitResponse from '../model/VideoMultipartUploadInitResponse';
import VideoProperties from '../model/VideoProperties';
import VideoStatus from '../model/VideoStatus';
import VideoUploadInitResponse from '../model/VideoUploadInitResponse';

/**
* Videos service.
* @module api/VideosApi
* @version 1.2.0
*/
export default class VideosApi {

    /**
    * Constructs a new VideosApi. 
    * @alias module:api/VideosApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addAttachmentByVideoId operation.
     * @callback module:api/VideosApi~addAttachmentByVideoIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload an attachement
     * Upload an attachement file and attached it to a video Currently: - attachement file type is limited to \"subtitle\" and \"caption\" (close caption) - supported file types: SRT (text/plain), VTT (text/vtt)
     * @param {String} videoId Id of the video
     * @param {module:model/String} attachmentType Type of attachment
     * @param {String} locale Le locale value of the attachment
     * @param {Object} opts Optional parameters
     * @param {File} [file] The file to upload
     * @param {module:api/VideosApi~addAttachmentByVideoIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    addAttachmentByVideoId(videoId, attachmentType, locale, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling addAttachmentByVideoId");
      }
      // verify the required parameter 'attachmentType' is set
      if (attachmentType === undefined || attachmentType === null) {
        throw new Error("Missing the required parameter 'attachmentType' when calling addAttachmentByVideoId");
      }
      // verify the required parameter 'locale' is set
      if (locale === undefined || locale === null) {
        throw new Error("Missing the required parameter 'locale' when calling addAttachmentByVideoId");
      }

      let pathParams = {
        'videoId': videoId,
        'attachmentType': attachmentType,
        'locale': locale
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'file': opts['file']
      };

      let authNames = ['api_key'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/videos/{videoId}/attachments/{attachmentType}/{locale}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the addThumbnailByVideoId operation.
     * @callback module:api/VideosApi~addThumbnailByVideoIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload a thumbnail
     * Upload an image file and set it as Thumbnail to the video
     * @param {String} videoId Id of the video
     * @param {Object} opts Optional parameters
     * @param {File} [file] The file to upload
     * @param {module:api/VideosApi~addThumbnailByVideoIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    addThumbnailByVideoId(videoId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling addThumbnailByVideoId");
      }

      let pathParams = {
        'videoId': videoId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'file': opts['file']
      };

      let authNames = ['api_key'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/videos/{videoId}/thumbnail', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the addVideo operation.
     * @callback module:api/VideosApi~addVideoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Video} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new video
     * You can create a video object by using this endpoint.  Once the video is created you can then upload the video.
     * @param {module:model/VideoProperties} videoProperties 
     * @param {module:api/VideosApi~addVideoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Video}
     */
    addVideo(videoProperties, callback) {
      let postBody = videoProperties;
      // verify the required parameter 'videoProperties' is set
      if (videoProperties === undefined || videoProperties === null) {
        throw new Error("Missing the required parameter 'videoProperties' when calling addVideo");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Video;
      return this.apiClient.callApi(
        '/videos', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAttachmentByVideoId operation.
     * @callback module:api/VideosApi~deleteAttachmentByVideoIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an attachment
     * Delete an attachment (and the attached file)
     * @param {String} videoId Id of the video
     * @param {module:model/String} attachmentType Type of attachment
     * @param {String} locale Le locale value of the attachment
     * @param {module:api/VideosApi~deleteAttachmentByVideoIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteAttachmentByVideoId(videoId, attachmentType, locale, callback) {
      let postBody = null;
      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling deleteAttachmentByVideoId");
      }
      // verify the required parameter 'attachmentType' is set
      if (attachmentType === undefined || attachmentType === null) {
        throw new Error("Missing the required parameter 'attachmentType' when calling deleteAttachmentByVideoId");
      }
      // verify the required parameter 'locale' is set
      if (locale === undefined || locale === null) {
        throw new Error("Missing the required parameter 'locale' when calling deleteAttachmentByVideoId");
      }

      let pathParams = {
        'videoId': videoId,
        'attachmentType': attachmentType,
        'locale': locale
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/videos/{videoId}/attachments/{attachmentType}/{locale}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteThumbnailByVideoId operation.
     * @callback module:api/VideosApi~deleteThumbnailByVideoIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a thumbnail
     * @param {String} videoId Id of the video
     * @param {module:api/VideosApi~deleteThumbnailByVideoIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteThumbnailByVideoId(videoId, callback) {
      let postBody = null;
      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling deleteThumbnailByVideoId");
      }

      let pathParams = {
        'videoId': videoId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/videos/{videoId}/thumbnail', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteVideoById operation.
     * @callback module:api/VideosApi~deleteVideoByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a video
     * @param {String} videoId Id of the video
     * @param {module:api/VideosApi~deleteVideoByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteVideoById(videoId, callback) {
      let postBody = null;
      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling deleteVideoById");
      }

      let pathParams = {
        'videoId': videoId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/videos/{videoId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the finalizeMultipartUploadVideoById operation.
     * @callback module:api/VideosApi~finalizeMultipartUploadVideoByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Multipart upload finalization
     * Once video parts are uploaded, finalize the upload by requesting to transcode the file.  New video file is replacing previous video file.
     * @param {String} videoId Id of the video
     * @param {Object} opts Optional parameters
     * @param {module:model/VideoMultipartUploadFinalize} [videoMultipartUploadFinalize] 
     * @param {module:api/VideosApi~finalizeMultipartUploadVideoByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    finalizeMultipartUploadVideoById(videoId, opts, callback) {
      opts = opts || {};
      let postBody = opts['videoMultipartUploadFinalize'];
      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling finalizeMultipartUploadVideoById");
      }

      let pathParams = {
        'videoId': videoId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/videos/{videoId}/multipart-upload/finalize', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the finalizeUploadVideoById operation.
     * @callback module:api/VideosApi~finalizeUploadVideoByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Single file upload finalization
     * Once video file is uploaded, finalize the upload by requesting to transcode the file. Finalize apply to the last signedurl provided by the upload initialization.  New video file is replacing previous video file.
     * @param {String} videoId Id of the video
     * @param {module:api/VideosApi~finalizeUploadVideoByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    finalizeUploadVideoById(videoId, callback) {
      let postBody = null;
      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling finalizeUploadVideoById");
      }

      let pathParams = {
        'videoId': videoId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/videos/{videoId}/upload/finalize', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAttachmentByVideoId operation.
     * @callback module:api/VideosApi~getAttachmentByVideoIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the attachment
     * Get a video attachement object
     * @param {String} videoId Id of the video
     * @param {module:model/String} attachmentType Type of attachment
     * @param {String} locale Le locale value of the attachment
     * @param {module:api/VideosApi~getAttachmentByVideoIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getAttachmentByVideoId(videoId, attachmentType, locale, callback) {
      let postBody = null;
      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling getAttachmentByVideoId");
      }
      // verify the required parameter 'attachmentType' is set
      if (attachmentType === undefined || attachmentType === null) {
        throw new Error("Missing the required parameter 'attachmentType' when calling getAttachmentByVideoId");
      }
      // verify the required parameter 'locale' is set
      if (locale === undefined || locale === null) {
        throw new Error("Missing the required parameter 'locale' when calling getAttachmentByVideoId");
      }

      let pathParams = {
        'videoId': videoId,
        'attachmentType': attachmentType,
        'locale': locale
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/videos/{videoId}/attachments/{attachmentType}/{locale}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAttachmentFileByVideoId operation.
     * @callback module:api/VideosApi~getAttachmentFileByVideoIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get attachement file
     * Get the attachement file Currently only text/plain files are handled.
     * @param {String} videoId Id of the video
     * @param {module:model/String} attachmentType Type of attachment
     * @param {String} locale Le locale value of the attachment
     * @param {module:api/VideosApi~getAttachmentFileByVideoIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getAttachmentFileByVideoId(videoId, attachmentType, locale, callback) {
      let postBody = null;
      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling getAttachmentFileByVideoId");
      }
      // verify the required parameter 'attachmentType' is set
      if (attachmentType === undefined || attachmentType === null) {
        throw new Error("Missing the required parameter 'attachmentType' when calling getAttachmentFileByVideoId");
      }
      // verify the required parameter 'locale' is set
      if (locale === undefined || locale === null) {
        throw new Error("Missing the required parameter 'locale' when calling getAttachmentFileByVideoId");
      }

      let pathParams = {
        'videoId': videoId,
        'attachmentType': attachmentType,
        'locale': locale
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/videos/{videoId}/attachments/{attachmentType}/{locale}/file', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAttachmentsByVideoId operation.
     * @callback module:api/VideosApi~getAttachmentsByVideoIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VideoAttachmentList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List of attachments
     * Return a list of attachments to a videos
     * @param {String} videoId Id of the video
     * @param {Object} opts Optional parameters
     * @param {module:model/String} [attachmentType] The type of attachments
     * @param {String} [locale] The locale
     * @param {Number} [limit] Number of elements to return (default=10)
     * @param {Number} [offset] offset for pagination
     * @param {module:api/VideosApi~getAttachmentsByVideoIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VideoAttachmentList}
     */
    getAttachmentsByVideoId(videoId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling getAttachmentsByVideoId");
      }

      let pathParams = {
        'videoId': videoId
      };
      let queryParams = {
        'attachmentType': opts['attachmentType'],
        'locale': opts['locale'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = VideoAttachmentList;
      return this.apiClient.callApi(
        '/videos/{videoId}/attachments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getVideoById operation.
     * @callback module:api/VideosApi~getVideoByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Video} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retun a single video
     * @param {String} videoId Id of the video
     * @param {Object} opts Optional parameters
     * @param {Boolean} [token] add a token to assets to alloaw access to private video
     * @param {module:api/VideosApi~getVideoByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Video}
     */
    getVideoById(videoId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling getVideoById");
      }

      let pathParams = {
        'videoId': videoId
      };
      let queryParams = {
        'token': opts['token']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Video;
      return this.apiClient.callApi(
        '/videos/{videoId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getVideoStatusById operation.
     * @callback module:api/VideosApi~getVideoStatusByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VideoStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retun the detailed status of the video
     * @param {String} videoId Id of the video
     * @param {module:api/VideosApi~getVideoStatusByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VideoStatus}
     */
    getVideoStatusById(videoId, callback) {
      let postBody = null;
      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling getVideoStatusById");
      }

      let pathParams = {
        'videoId': videoId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = VideoStatus;
      return this.apiClient.callApi(
        '/videos/{videoId}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getVideos operation.
     * @callback module:api/VideosApi~getVideosCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VideoList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List videos
     * Return the list of videos.  Return an empty list it there is no video to return.
     * @param {Object} opts Optional parameters
     * @param {Number} [limit] Number of elements to return (default=10)
     * @param {Number} [offset] offset for pagination
     * @param {String} [search] Keywords search in all indexed fields
     * @param {String} [sort] Sorting results
     * @param {module:api/VideosApi~getVideosCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VideoList}
     */
    getVideos(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'search': opts['search'],
        'sort': opts['sort']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = VideoList;
      return this.apiClient.callApi(
        '/videos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the initMultipartUploadVideoById operation.
     * @callback module:api/VideosApi~initMultipartUploadVideoByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VideoMultipartUploadInitResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Multipart upload intialization
     * Get signed urls to upload a big file split in multiparts Once the video is uploaded, do not forget to call the multipart upload finalize  New video file is replacing previous video file.
     * @param {String} videoId Id of the video
     * @param {Object} opts Optional parameters
     * @param {module:model/VideoMultipartUploadInit} [videoMultipartUploadInit] 
     * @param {module:api/VideosApi~initMultipartUploadVideoByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VideoMultipartUploadInitResponse}
     */
    initMultipartUploadVideoById(videoId, opts, callback) {
      opts = opts || {};
      let postBody = opts['videoMultipartUploadInit'];
      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling initMultipartUploadVideoById");
      }

      let pathParams = {
        'videoId': videoId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = VideoMultipartUploadInitResponse;
      return this.apiClient.callApi(
        '/videos/{videoId}/multipart-upload/init', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the initUploadVideoById operation.
     * @callback module:api/VideosApi~initUploadVideoByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VideoUploadInitResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Single file upload intialization
     * Get a single signed url to upload a file Once the video is uploaded, do not forget to call the single upload finalize  File formats currently supported: avi, mov, mp4, mpeg, mpg, mxf, ts. New video file is replacing previous video file.
     * @param {String} videoId Id of the video
     * @param {module:api/VideosApi~initUploadVideoByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VideoUploadInitResponse}
     */
    initUploadVideoById(videoId, callback) {
      let postBody = null;
      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling initUploadVideoById");
      }

      let pathParams = {
        'videoId': videoId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = VideoUploadInitResponse;
      return this.apiClient.callApi(
        '/videos/{videoId}/upload/init', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateVideoById operation.
     * @callback module:api/VideosApi~updateVideoByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing video
     * Update video properties  Only properties provided are updated.
     * @param {String} videoId Id of the video
     * @param {module:model/VideoProperties} videoProperties 
     * @param {module:api/VideosApi~updateVideoByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateVideoById(videoId, videoProperties, callback) {
      let postBody = videoProperties;
      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling updateVideoById");
      }
      // verify the required parameter 'videoProperties' is set
      if (videoProperties === undefined || videoProperties === null) {
        throw new Error("Missing the required parameter 'videoProperties' when calling updateVideoById");
      }

      let pathParams = {
        'videoId': videoId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/videos/{videoId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
