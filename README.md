# Audio To EditorJs

Allows you to record and upload audio to Editorjs.

## Installation

### Install NPM

Get the package

```shell
npm i audio-editor-js --save
```

Include module at your application

```javascript
import Audio from "audio-editor-js";
```

## Usage

Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
var editor = EditorJS({
  ...
  
  tools: {
    ...
    audio: {
      class: Audio,
      config: {
        token: token,
        
        route: `https://test/api/file`,
        routeDelete: `https://test/api/file`,
      },
    },
  }
  ...
});
```

## Config Params

| Field           | Type       | Description                                                       |
| --------------  | ---------- | ----------------------------------------------------------------- |
| token           | `string`            | authorization token                                      |
| route           | `string`            | server                                                   |
| routeDelete     | `string`            | route to delete the audio file from the server           |
| saveServer      | callback `function` | A function that replaces the standard function of sending to the server |
| deleteServer    | callback `function` | A function that replaces the standard function of deleting a file on the server |

## output server

the server must give this json in response to the save request. If the server works differently, use the saveServer function

```json
{
    "data" : {
        "url" : "https://test/file",
        "id" : "123",
    }
}
```

## delete server

method `delete`

## callback function saveServer

A function that sends a file to a server. receives the file and to send to the server.
Return has an object with a file reference and file id.

```javascript
  tools: {
    ...
    audio: {
      class: Audio,
      config: {
        saveServer: async (file) => {
          try {
            let formData = new FormData();
            formData.append("file", file);
            
            let req = await axios.post(route, formData);

            // 
            //req = {
            //   data: {
            //     url: 'https://test/file/audio.mp3',
            //     id: '123',
            //   }
            // }
            return data;
          } catch (e) {
            console.error(e);
          }
        },
      },
    },
  }
```
## callback function deleteServer

The id of the file by means of which it can be deleted from the server is transferred

```javascript
  tools: {
    ...
    audio: {
      class: Audio,
      config: {
        deleteServer: async (id) => {
          console.log(id)
          try {
            await axios.delete(route, id)
          } catch (e) {
            console.error(e);
          }
        },
      },
    },
  }
```