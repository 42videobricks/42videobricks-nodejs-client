# Api42Vb.Video

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | title of the video | [optional] 
**description** | **String** | description of the video | [optional] 
**_public** | **Boolean** | Define if the video is public (it can be accessible by anybody with the video url). Default &#x3D; tue | [optional] 
**tags** | **[String]** | tags list linked to video | [optional] 
**id** | **String** | id of the video (null when adding a new video) | 
**status** | **String** | Status of the video : * &#39;REQUESTED&#39;: video as been submited, waiting for its creation * &#39;CREATED&#39;: video has been created and file can be uploaded          * &#39;TRANSCODING&#39;: video is unvailable because still in the creation  &amp; in encoding process * &#39;AVAILABLE&#39;: video is ready to be stream | [optional] 
**duration** | **Number** | video duration in second | [optional] 
**ctime** | **Number** | Creation date (timestamp) | [optional] 
**mtime** | **Number** | Modification date (timestamp) | [optional] 
**assets** | [**VideoAssets**](VideoAssets.md) |  | [optional] 
**metas** | **{String: Object}** | metas data  free-form object: refere to the documentation | [optional] 



## Enum: StatusEnum


* `REQUESTED` (value: `"REQUESTED"`)

* `CREATED` (value: `"CREATED"`)

* `TRANSCODING` (value: `"TRANSCODING"`)

* `AVAILABLE` (value: `"AVAILABLE"`)




