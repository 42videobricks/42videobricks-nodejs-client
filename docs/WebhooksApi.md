# Api42Vb.WebhooksApi

All URIs are relative to *https://api-sbx.42videobricks.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addWebhook**](WebhooksApi.md#addWebhook) | **POST** /webhooks | Add a new webhook
[**deleteWebhookById**](WebhooksApi.md#deleteWebhookById) | **DELETE** /webhooks/{webhookId} | Delete a webhook
[**getWebhookById**](WebhooksApi.md#getWebhookById) | **GET** /webhooks/{webhookId} | Retun a single webhook
[**getWebhooks**](WebhooksApi.md#getWebhooks) | **GET** /webhooks | List webhooks
[**updateWebhookById**](WebhooksApi.md#updateWebhookById) | **PUT** /webhooks/{webhookId} | Update an existing webhook



## addWebhook

> Webhook addWebhook(webhookProperties)

Add a new webhook

Create a new webhook to configure notification.  Only one hook per url

### Example

```javascript
import Api42Vb from '42videobricks';
let defaultClient = Api42Vb.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Api42Vb.WebhooksApi();
let webhookProperties = new Api42Vb.WebhookProperties(); // WebhookProperties | 
apiInstance.addWebhook(webhookProperties, (error, data, response) => {
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
 **webhookProperties** | [**WebhookProperties**](WebhookProperties.md)|  | 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteWebhookById

> deleteWebhookById(webhookId)

Delete a webhook

Delete a webhook.

### Example

```javascript
import Api42Vb from '42videobricks';
let defaultClient = Api42Vb.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Api42Vb.WebhooksApi();
let webhookId = {{webhookId}}; // String | Id of the webhook
apiInstance.deleteWebhookById(webhookId, (error, data, response) => {
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
 **webhookId** | **String**| Id of the webhook | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebhookById

> Webhook getWebhookById(webhookId)

Retun a single webhook

### Example

```javascript
import Api42Vb from '42videobricks';
let defaultClient = Api42Vb.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Api42Vb.WebhooksApi();
let webhookId = {{webhookId}}; // String | Id of the webhook
apiInstance.getWebhookById(webhookId, (error, data, response) => {
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
 **webhookId** | **String**| Id of the webhook | 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebhooks

> WebhookList getWebhooks(opts)

List webhooks

Return the list of webhooks.  Return an empty list it there are no webhook to return.

### Example

```javascript
import Api42Vb from '42videobricks';
let defaultClient = Api42Vb.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Api42Vb.WebhooksApi();
let opts = {
  'limit': 56, // Number | Number of elements to return (default=10)
  'offset': 56 // Number | offset for pagination
};
apiInstance.getWebhooks(opts, (error, data, response) => {
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

[**WebhookList**](WebhookList.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateWebhookById

> Webhook updateWebhookById(webhookId, webhookProperties)

Update an existing webhook

Update a existing webhooks.

### Example

```javascript
import Api42Vb from '42videobricks';
let defaultClient = Api42Vb.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Api42Vb.WebhooksApi();
let webhookId = {{webhookId}}; // String | Id of the webhook
let webhookProperties = new Api42Vb.WebhookProperties(); // WebhookProperties | 
apiInstance.updateWebhookById(webhookId, webhookProperties, (error, data, response) => {
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
 **webhookId** | **String**| Id of the webhook | 
 **webhookProperties** | [**WebhookProperties**](WebhookProperties.md)|  | 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

