# Api42Vb.Webhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **String** | Url of the application wich is receiving Notifications | 
**token** | **String** | Optionnal Secret token to validate notifications. Sent with the request in the X-Vpass-Token HTTP header. | [optional] 
**eventType** | **[String]** | List of event to be notified:   * VIDEO_STATUS: Get Video object status modification notifications   Status values: REQUESTED, CREATED, TRANSCODING, TRANSCODING_ERROR, AVAILABLE, DELETED   * VIDEO_TRANSCODING_PROGRESS: Get transcoding progression notifications | 
**id** | **String** | id of the webhook | 
**ctime** | **Number** | Creation date (timestamp) | [optional] 
**mtime** | **Number** | Modification date (timestamp) | [optional] 



## Enum: [EventTypeEnum]


* `STATUS` (value: `"VIDEO_STATUS"`)

* `TRANSCODING_PROGRESS` (value: `"VIDEO_TRANSCODING_PROGRESS"`)




