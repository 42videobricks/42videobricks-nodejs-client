# Api42Vb.VideosApi

All URIs are relative to *https://api-sbx.42videobricks.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAttachmentByVideoId**](VideosApi.md#addAttachmentByVideoId) | **POST** /videos/{videoId}/attachments/{attachmentType}/{locale} | Upload an attachement
[**addThumbnailByVideoId**](VideosApi.md#addThumbnailByVideoId) | **POST** /videos/{videoId}/thumbnail | Upload a thumbnail
[**addVideo**](VideosApi.md#addVideo) | **POST** /videos | Add a new video
[**deleteAttachmentByVideoId**](VideosApi.md#deleteAttachmentByVideoId) | **DELETE** /videos/{videoId}/attachments/{attachmentType}/{locale} | Delete an attachment
[**deleteThumbnailByVideoId**](VideosApi.md#deleteThumbnailByVideoId) | **DELETE** /videos/{videoId}/thumbnail | Delete a thumbnail
[**deleteVideoById**](VideosApi.md#deleteVideoById) | **DELETE** /videos/{videoId} | Delete a video
[**finalizeMultipartUploadVideoById**](VideosApi.md#finalizeMultipartUploadVideoById) | **POST** /videos/{videoId}/multipart-upload/finalize | Multipart upload finalization
[**finalizeUploadVideoById**](VideosApi.md#finalizeUploadVideoById) | **PUT** /videos/{videoId}/upload/finalize | Single file upload finalization
[**getAttachmentByVideoId**](VideosApi.md#getAttachmentByVideoId) | **GET** /videos/{videoId}/attachments/{attachmentType}/{locale} | Get the attachment
[**getAttachmentFileByVideoId**](VideosApi.md#getAttachmentFileByVideoId) | **GET** /videos/{videoId}/attachments/{attachmentType}/{locale}/file | Get attachement file
[**getAttachmentsByVideoId**](VideosApi.md#getAttachmentsByVideoId) | **GET** /videos/{videoId}/attachments | List of attachments
[**getVideoById**](VideosApi.md#getVideoById) | **GET** /videos/{videoId} | Retun a single video
[**getVideos**](VideosApi.md#getVideos) | **GET** /videos | List videos
[**initMultipartUploadVideoById**](VideosApi.md#initMultipartUploadVideoById) | **POST** /videos/{videoId}/multipart-upload/init | Multipart upload intialization
[**initUploadVideoById**](VideosApi.md#initUploadVideoById) | **GET** /videos/{videoId}/upload/init | Single file upload intialization
[**updateVideoById**](VideosApi.md#updateVideoById) | **PUT** /videos/{videoId} | Update an existing video



## addAttachmentByVideoId

> addAttachmentByVideoId(videoId, attachmentType, locale, opts)

Upload an attachement

Upload an attachement file and attached it to a video Currently: - attachement file type is limited to \&quot;subtitle\&quot; and \&quot;caption\&quot; (close caption) - supported file types: SRT (text/plain), VTT (text/vtt)

### Example

```javascript
import Api42Vb from '@42videobricks/nodejs-client';
let defaultClient = Api42Vb.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Api42Vb.VideosApi();
let videoId = {{videoId}}; // String | Id of the video
let attachmentType = {{attachmentType}}; // String | Type of attachment
let locale = {{locale}}; // String | Le locale value of the attachment
let opts = {
  'file': "/path/to/file" // File | The file to upload
};
apiInstance.addAttachmentByVideoId(videoId, attachmentType, locale, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **String**| Id of the video | 
 **attachmentType** | **String**| Type of attachment | 
 **locale** | **String**| Le locale value of the attachment | 
 **file** | **File**| The file to upload | [optional] 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## addThumbnailByVideoId

> addThumbnailByVideoId(videoId, opts)

Upload a thumbnail

Upload an image file and set it as Thumbnail to the video

### Example

```javascript
import Api42Vb from '@42videobricks/nodejs-client';
let defaultClient = Api42Vb.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Api42Vb.VideosApi();
let videoId = {{videoId}}; // String | Id of the video
let opts = {
  'file': "/path/to/file" // File | The file to upload
};
apiInstance.addThumbnailByVideoId(videoId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **String**| Id of the video | 
 **file** | **File**| The file to upload | [optional] 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## addVideo

> Video addVideo(videoProperties)

Add a new video

You can create a video object by using this endpoint.  Once the video is created you can then upload the video.

### Example

```javascript
import Api42Vb from '@42videobricks/nodejs-client';
let defaultClient = Api42Vb.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Api42Vb.VideosApi();
let videoProperties = new Api42Vb.VideoProperties(); // VideoProperties | 
apiInstance.addVideo(videoProperties, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoProperties** | [**VideoProperties**](VideoProperties.md)|  | 

### Return type

[**Video**](Video.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAttachmentByVideoId

> deleteAttachmentByVideoId(videoId, attachmentType, locale)

Delete an attachment

Delete an attachment (and the attached file)

### Example

```javascript
import Api42Vb from '@42videobricks/nodejs-client';
let defaultClient = Api42Vb.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Api42Vb.VideosApi();
let videoId = {{videoId}}; // String | Id of the video
let attachmentType = {{attachmentType}}; // String | Type of attachment
let locale = {{locale}}; // String | Le locale value of the attachment
apiInstance.deleteAttachmentByVideoId(videoId, attachmentType, locale, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **String**| Id of the video | 
 **attachmentType** | **String**| Type of attachment | 
 **locale** | **String**| Le locale value of the attachment | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteThumbnailByVideoId

> deleteThumbnailByVideoId(videoId)

Delete a thumbnail

### Example

```javascript
import Api42Vb from '@42videobricks/nodejs-client';
let defaultClient = Api42Vb.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Api42Vb.VideosApi();
let videoId = {{videoId}}; // String | Id of the video
apiInstance.deleteThumbnailByVideoId(videoId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **String**| Id of the video | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteVideoById

> deleteVideoById(videoId)

Delete a video

### Example

```javascript
import Api42Vb from '@42videobricks/nodejs-client';
let defaultClient = Api42Vb.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Api42Vb.VideosApi();
let videoId = {{videoId}}; // String | Id of the video
apiInstance.deleteVideoById(videoId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **String**| Id of the video | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## finalizeMultipartUploadVideoById

> finalizeMultipartUploadVideoById(videoId, opts)

Multipart upload finalization

Once video parts are uploaded, finalize the upload by requesting to transcode the file.  New video file is replacing previous video file.

### Example

```javascript
import Api42Vb from '@42videobricks/nodejs-client';
let defaultClient = Api42Vb.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Api42Vb.VideosApi();
let videoId = {{videoId}}; // String | Id of the video
let opts = {
  'videoMultipartUploadFinalize': new Api42Vb.VideoMultipartUploadFinalize() // VideoMultipartUploadFinalize | 
};
apiInstance.finalizeMultipartUploadVideoById(videoId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **String**| Id of the video | 
 **videoMultipartUploadFinalize** | [**VideoMultipartUploadFinalize**](VideoMultipartUploadFinalize.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## finalizeUploadVideoById

> finalizeUploadVideoById(videoId)

Single file upload finalization

Once video file is uploaded, finalize the upload by requesting to transcode the file. Finalize apply to the last signedurl provided by the upload initialization.  New video file is replacing previous video file.

### Example

```javascript
import Api42Vb from '@42videobricks/nodejs-client';
let defaultClient = Api42Vb.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Api42Vb.VideosApi();
let videoId = {{videoId}}; // String | Id of the video
apiInstance.finalizeUploadVideoById(videoId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **String**| Id of the video | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAttachmentByVideoId

> getAttachmentByVideoId(videoId, attachmentType, locale)

Get the attachment

Get a video attachement object

### Example

```javascript
import Api42Vb from '@42videobricks/nodejs-client';
let defaultClient = Api42Vb.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Api42Vb.VideosApi();
let videoId = {{videoId}}; // String | Id of the video
let attachmentType = {{attachmentType}}; // String | Type of attachment
let locale = {{locale}}; // String | Le locale value of the attachment
apiInstance.getAttachmentByVideoId(videoId, attachmentType, locale, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **String**| Id of the video | 
 **attachmentType** | **String**| Type of attachment | 
 **locale** | **String**| Le locale value of the attachment | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAttachmentFileByVideoId

> getAttachmentFileByVideoId(videoId, attachmentType, locale)

Get attachement file

Get the attachement file Currently only text/plain files are handled.

### Example

```javascript
import Api42Vb from '@42videobricks/nodejs-client';
let defaultClient = Api42Vb.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Api42Vb.VideosApi();
let videoId = {{videoId}}; // String | Id of the video
let attachmentType = {{attachmentType}}; // String | Type of attachment
let locale = {{locale}}; // String | Le locale value of the attachment
apiInstance.getAttachmentFileByVideoId(videoId, attachmentType, locale, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **String**| Id of the video | 
 **attachmentType** | **String**| Type of attachment | 
 **locale** | **String**| Le locale value of the attachment | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAttachmentsByVideoId

> VideoAttachmentList getAttachmentsByVideoId(videoId, opts)

List of attachments

Return a list of attachments to a videos

### Example

```javascript
import Api42Vb from '@42videobricks/nodejs-client';
let defaultClient = Api42Vb.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Api42Vb.VideosApi();
let videoId = {{videoId}}; // String | Id of the video
let opts = {
  'attachmentType': "attachmentType_example", // String | The type of attachments
  'locale': "locale_example", // String | The locale
  'limit': 56, // Number | Number of elements to return (default=10)
  'offset': 56 // Number | offset for pagination
};
apiInstance.getAttachmentsByVideoId(videoId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **String**| Id of the video | 
 **attachmentType** | **String**| The type of attachments | [optional] 
 **locale** | **String**| The locale | [optional] 
 **limit** | **Number**| Number of elements to return (default&#x3D;10) | [optional] 
 **offset** | **Number**| offset for pagination | [optional] 

### Return type

[**VideoAttachmentList**](VideoAttachmentList.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVideoById

> Video getVideoById(videoId, opts)

Retun a single video

### Example

```javascript
import Api42Vb from '@42videobricks/nodejs-client';
let defaultClient = Api42Vb.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Api42Vb.VideosApi();
let videoId = {{videoId}}; // String | Id of the video
let opts = {
  'token': true // Boolean | add a token to assets to alloaw access to private video
};
apiInstance.getVideoById(videoId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **String**| Id of the video | 
 **token** | **Boolean**| add a token to assets to alloaw access to private video | [optional] 

### Return type

[**Video**](Video.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVideos

> VideoList getVideos(opts)

List videos

Return the list of videos.  Return an empty list it there is no video to return.

### Example

```javascript
import Api42Vb from '@42videobricks/nodejs-client';
let defaultClient = Api42Vb.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Api42Vb.VideosApi();
let opts = {
  'limit': 56, // Number | Number of elements to return (default=10)
  'offset': 56, // Number | offset for pagination
  'search': {{search}}, // String | Keywords search in all indexed fields
  'sort': title:desc,ctime:asc // String | Sorting results
};
apiInstance.getVideos(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Number of elements to return (default&#x3D;10) | [optional] 
 **offset** | **Number**| offset for pagination | [optional] 
 **search** | **String**| Keywords search in all indexed fields | [optional] 
 **sort** | **String**| Sorting results | [optional] 

### Return type

[**VideoList**](VideoList.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## initMultipartUploadVideoById

> VideoMultipartUploadInitResponse initMultipartUploadVideoById(videoId, opts)

Multipart upload intialization

Get signed urls to upload a big file split in multiparts Once the video is uploaded, do not forget to call the multipart upload finalize  New video file is replacing previous video file.

### Example

```javascript
import Api42Vb from '@42videobricks/nodejs-client';
let defaultClient = Api42Vb.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Api42Vb.VideosApi();
let videoId = {{videoId}}; // String | Id of the video
let opts = {
  'videoMultipartUploadInit': new Api42Vb.VideoMultipartUploadInit() // VideoMultipartUploadInit | 
};
apiInstance.initMultipartUploadVideoById(videoId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **String**| Id of the video | 
 **videoMultipartUploadInit** | [**VideoMultipartUploadInit**](VideoMultipartUploadInit.md)|  | [optional] 

### Return type

[**VideoMultipartUploadInitResponse**](VideoMultipartUploadInitResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## initUploadVideoById

> VideoUploadInitResponse initUploadVideoById(videoId)

Single file upload intialization

Get a single signed url to upload a file Once the video is uploaded, do not forget to call the single upload finalize  File formats currently supported: avi, mov, mp4, mpeg, mpg, mxf, ts. New video file is replacing previous video file.

### Example

```javascript
import Api42Vb from '@42videobricks/nodejs-client';
let defaultClient = Api42Vb.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Api42Vb.VideosApi();
let videoId = {{videoId}}; // String | Id of the video
apiInstance.initUploadVideoById(videoId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **String**| Id of the video | 

### Return type

[**VideoUploadInitResponse**](VideoUploadInitResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateVideoById

> updateVideoById(videoId, videoProperties)

Update an existing video

Update video properties  Only properties provided are updated.

### Example

```javascript
import Api42Vb from '@42videobricks/nodejs-client';
let defaultClient = Api42Vb.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Api42Vb.VideosApi();
let videoId = {{videoId}}; // String | Id of the video
let videoProperties = new Api42Vb.VideoProperties(); // VideoProperties | 
apiInstance.updateVideoById(videoId, videoProperties, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **String**| Id of the video | 
 **videoProperties** | [**VideoProperties**](VideoProperties.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

