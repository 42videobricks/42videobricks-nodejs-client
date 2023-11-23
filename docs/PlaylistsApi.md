# Api42Vb.PlaylistsApi

All URIs are relative to *https://api-sbx.42videobricks.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPlaylist**](PlaylistsApi.md#addPlaylist) | **POST** /playlists | Add a new playlist
[**deletePlaylistById**](PlaylistsApi.md#deletePlaylistById) | **DELETE** /playlists/{playlistId} | Delete a playlist
[**getPlaylistById**](PlaylistsApi.md#getPlaylistById) | **GET** /playlists/{playlistId} | Retun a single playlist
[**getPlaylists**](PlaylistsApi.md#getPlaylists) | **GET** /playlists | List playlists
[**updatePlaylistById**](PlaylistsApi.md#updatePlaylistById) | **PUT** /playlists/{playlistId} | Update an existing playlist



## addPlaylist

> Playlist addPlaylist(playlistProperties)

Add a new playlist

Create a new playlist.

### Example

```javascript
import Api42Vb from '@42videobricks/nodejs-client';
let defaultClient = Api42Vb.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Api42Vb.PlaylistsApi();
let playlistProperties = new Api42Vb.PlaylistProperties(); // PlaylistProperties | 
apiInstance.addPlaylist(playlistProperties, (error, data, response) => {
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
 **playlistProperties** | [**PlaylistProperties**](PlaylistProperties.md)|  | 

### Return type

[**Playlist**](Playlist.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletePlaylistById

> deletePlaylistById(playlistId)

Delete a playlist

Delete a playlist.

### Example

```javascript
import Api42Vb from '@42videobricks/nodejs-client';
let defaultClient = Api42Vb.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Api42Vb.PlaylistsApi();
let playlistId = {{playlistId}}; // String | Id of the playlist
apiInstance.deletePlaylistById(playlistId, (error, data, response) => {
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
 **playlistId** | **String**| Id of the playlist | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPlaylistById

> Playlist getPlaylistById(playlistId)

Retun a single playlist

### Example

```javascript
import Api42Vb from '@42videobricks/nodejs-client';
let defaultClient = Api42Vb.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Api42Vb.PlaylistsApi();
let playlistId = {{playlistId}}; // String | Id of the playlist
apiInstance.getPlaylistById(playlistId, (error, data, response) => {
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
 **playlistId** | **String**| Id of the playlist | 

### Return type

[**Playlist**](Playlist.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPlaylists

> PlaylistList getPlaylists(opts)

List playlists

Return the list of playlist.  Return an empty list it there is no playlist to return.

### Example

```javascript
import Api42Vb from '@42videobricks/nodejs-client';
let defaultClient = Api42Vb.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Api42Vb.PlaylistsApi();
let opts = {
  'limit': 56, // Number | Number of elements to return (default=10)
  'offset': 56, // Number | offset for pagination
  'search': {{search}}, // String | Keywords search in all indexed fields
  'sort': ctime:asc // String | Sorting results
};
apiInstance.getPlaylists(opts, (error, data, response) => {
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

[**PlaylistList**](PlaylistList.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatePlaylistById

> updatePlaylistById(playlistId, playlistProperties)

Update an existing playlist

Update a existing playlist.

### Example

```javascript
import Api42Vb from '@42videobricks/nodejs-client';
let defaultClient = Api42Vb.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Api42Vb.PlaylistsApi();
let playlistId = {{playlistId}}; // String | Id of the playlist
let playlistProperties = new Api42Vb.PlaylistProperties(); // PlaylistProperties | 
apiInstance.updatePlaylistById(playlistId, playlistProperties, (error, data, response) => {
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
 **playlistId** | **String**| Id of the playlist | 
 **playlistProperties** | [**PlaylistProperties**](PlaylistProperties.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

