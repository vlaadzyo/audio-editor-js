# File Manager To EditorJs

Allows you to record and upload audio to Editorjs.

## Installation

### Install NPM

Get the package

```shell
npm i editor-js-audio --save
```

Include module at your application

```javascript
import Audio from "editor-js-audio";
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
        tokenCookieName: "token",
        //or
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
| token           | `string`   | authorization token                                               |
| tokenCookieName | `string`   | the name of the authorization token                               |
|                 |            | under which it is written in the cookie route for storage on the  |
| route           | `string`   | server                                                            |
| routeDelete     | `string`   | route to delete the audio file from the server                    |
| saveServer      | `function` | A function that replaces the standard function of sending to the  |
|                 |            | server                                                            |
| deleteServer    | `function` | A function that replaces the standard function of deleting a file |
|                 |            | on the server                                                     |

## output server

the server must give this json in response to the save request. If the server works differently, use the saveServer function

```json
{
    "data" : {
        "url" : "https://example/hero.jpg",
        "id" : "Name",
    }
}
```

## saveServer

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