# Api42Vb.DataApi

All URIs are relative to *https://api-sbx.42videobricks.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDataVideoUsage**](DataApi.md#getDataVideoUsage) | **GET** /data/videos/usage | List Video Usage KPIs



## getDataVideoUsage

> DataVideoUsageList getDataVideoUsage(opts)

List Video Usage KPIs

Return the monthly usage of the platform ressources. For current month, usage is calculated until current time.

### Example

```javascript
import Api42Vb from '42videobricks-nodejs-client';
let defaultClient = Api42Vb.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Api42Vb.DataApi();
let opts = {
  'limit': 56, // Number | Number of elements to return (default=10)
  'offset': 56 // Number | offset for pagination
};
apiInstance.getDataVideoUsage(opts, (error, data, response) => {
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

### Return type

[**DataVideoUsageList**](DataVideoUsageList.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

