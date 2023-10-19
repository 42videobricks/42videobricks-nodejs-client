# Api42Vb.TagsApi

All URIs are relative to *https://api-sbx.42videobricks.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTags**](TagsApi.md#getTags) | **GET** /tags | List Video Tags



## getTags

> TagList getTags(opts)

List Video Tags

Return the list of tags created and set to videos

### Example

```javascript
import Api42Vb from '42videobricks';
let defaultClient = Api42Vb.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Api42Vb.TagsApi();
let opts = {
  'limit': 56, // Number | Number of elements to return (default=10)
  'offset': 56, // Number | offset for pagination
  'partial': {{partial}} // String | \\'partial\\' string to filter list
};
apiInstance.getTags(opts, (error, data, response) => {
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
 **partial** | **String**| \\&#39;partial\\&#39; string to filter list | [optional] 

### Return type

[**TagList**](TagList.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

