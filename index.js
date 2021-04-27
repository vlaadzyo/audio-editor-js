require('./main.css').toString();

const ObjectSVG = {
  record: '<svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 6.48047L0.499999 12.5426L0.5 0.418291L11 6.48047Z" fill="#6961CC"/></svg>',
  stop: '<svg width="13" height="13" viewBox="26.5 27 46 46" xmlns="http://www.w3.org/2000/svg"><g fill="#6961CC"><path d="M68.251,72.84H30.749c-2.258,0-4.089-1.831-4.089-4.089V31.249c0-2.258,1.831-4.089,4.089-4.089h37.502c2.258,0,4.089,1.831,4.089,4.089v37.502C72.34,71.009,70.509,72.84,68.251,72.84z"/><path d="M68.993,27.235c0.821,0.748,1.346,1.815,1.346,3.014v37.502c0,2.258-1.831,4.089-4.089,4.089H28.749   c-0.254,0-0.501-0.03-0.742-0.075c0.726,0.661,1.683,1.075,2.742,1.075h37.502c2.258,0,4.089-1.831,4.089-4.089V31.249C72.34,29.245,70.896,27.585,68.993,27.235z"/><path d="M68.251,72.84H30.749c-2.258,0-4.089-1.831-4.089-4.089V31.249   c0-2.258,1.831-4.089,4.089-4.089h37.502c2.258,0,4.089,1.831,4.089,4.089v37.502C72.34,71.009,70.509,72.84,68.251,72.84z"/></g></svg>',
  save: '<svg version="1.1" width="30" height="30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000"><path d="M888.6,990c-259,0-518.1,0-777.1,0c-1.8-0.6-3.5-1.5-5.3-1.8c-45-8.1-74.9-33.8-90.2-76.7c-2.6-7.4-4-15.3-5.9-22.9c0-259,0-518.1,0-777.1c0.6-1.8,1.5-3.5,1.8-5.4c9.2-49.4,38.6-80,86.8-93c4.3-1.2,8.6-2.1,12.8-3.1c222.7,0,445.3,0,668,0c27.8,6.1,49.6,22.7,69.5,41.7c32.9,31.5,65.2,63.7,96.8,96.6c19.9,20.6,37.8,43.1,44.3,72.3c0,222.7,0,445.3,0,668c-0.6,1.8-1.5,3.5-1.8,5.3c-9.2,49.4-38.5,80-86.8,93C897.2,988,892.8,989,888.6,990z M500.1,952.5c111.3,0,222.6,0,333.9,0c28.3,0,43.2-14.9,43.2-42.9c0-122.2,0-244.3,0-366.5c0-28.1-15-43.3-42.9-43.3c-223,0-445.9,0-668.8,0c-27.4,0-42.8,15.2-42.8,42.5c0,122.5,0,244.9,0,367.4c0,4.4,0.1,9,1.1,13.3c4.6,19.4,19.1,29.5,42.2,29.5C277.5,952.5,388.8,952.5,500.1,952.5z M480.9,387.3c79.4,0,158.8,0,238.2,0c30.5,0,45.2-14.6,45.2-45c0-83.2,0-166.4,0-249.7c0-30.6-14.4-45-45.1-45c-158.8,0-317.6,0-476.4,0C212.7,47.5,198,62.1,198,92c-0.1,83.5-0.1,167.1,0,250.6c0,29.9,14.9,44.7,44.7,44.7C322.1,387.3,401.5,387.3,480.9,387.3z"/><path d="M576.4,86.1c37.3,0,73.6,0,110.7,0c0,87.5,0,174.5,0,262.1c-36.8,0-73.4,0-110.7,0C576.4,261.1,576.4,174,576.4,86.1z"/></svg>',
  clear: '<svg version="1.1" width="30" height="30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000"><path d="M500,990c-130.9,0-253.9-51-346.4-143.5C60.9,753.9,10,630.9,10,500c0-130.9,50.9-253.9,143.5-346.4C246,61,369.1,10,500,10c130.9,0,254,51,346.5,143.6C939,246.1,990,369.1,990,500c0,130.9-51,253.9-143.6,346.5C753.9,939,630.9,990,500,990z M500,99.1c-107.1,0-207.7,41.7-283.5,117.5C140.8,292.3,99.1,392.9,99.1,500c0,107.1,41.7,207.7,117.4,283.5c75.7,75.7,176.4,117.4,283.5,117.4c107.1,0,207.8-41.7,283.5-117.4c75.7-75.7,117.5-176.4,117.5-283.5c0-107.1-41.7-207.7-117.5-283.5C707.7,140.8,607.1,99.1,500,99.1z"/><path d="M611.8,388.2L388.2,611.8L611.8,388.2z"/><path d="M388.2,656.3c-11.4,0-22.8-4.3-31.5-13.1c-17.4-17.4-17.4-45.6,0-63l223.5-223.6c17.4-17.4,45.6-17.4,63,0c17.4,17.4,17.4,45.6,0,63L419.7,643.3C411,652,399.6,656.3,388.2,656.3z"/><path d="M388.2,388.2l223.5,223.5L388.2,388.2z"/><path d="M611.8,656.3c-11.4,0-22.8-4.3-31.5-13.1L356.8,419.7c-17.4-17.4-17.4-45.6,0-63c17.4-17.4,45.6-17.4,63,0l223.5,223.6c17.4,17.4,17.4,45.6,0,63C634.6,652,623.2,656.3,611.8,656.3z"/></svg>',

}

import axios from 'axios';

axios.interceptors.response.use(async response => {
  return response;
}, async (error) => {

  let code = error.response && error.response.status ? error.response.status : 500;

  if (code === 404) {
    return Promise.reject({
      status: 404,
      message: error.response.data.message
    });
  }
});

class Audio {

  constructor({
    data,
    config,
    api,
    readOnly
  }) {
    this.api = api;
    this.readOnly = readOnly;

    this._CSS = {
      block: this.api.styles.block,
      button: this.api.styles.button,
      settingsButton: this.api.styles.settingsButton,
      settingsButtonActive: this.api.styles.settingsButtonActive,
      wrapper: 'ce-button-link__wrapper',
    };

    if (config.tokenCookieName) {
      axios.defaults.headers.common['Authorization'] = config.tokenCookieName
    } else if (config.token) {
      axios.defaults.headers.common['Authorization'] = config.token
    }

    this._settings = config;

    this._data = {
      url: '',
      file: null
    };

    this.data = this.normalizeData(data);

    this.element = this.createElement();
  }

  /**
   * повертає об'єкт з порожніми значеннями, або ті що передані
   * returns an object with empty values, or those that are passed
   * 
   * @param {this.data} data
   * @returns newData - new object data
   */
  normalizeData(data) {
    const newData = {};

    if (typeof data !== 'object') {
      data = {};
    }

    newData.id = data.id || '';
    newData.type = data.type || 'download';
    newData.url = data.url || '';
    return newData;
  }

  /**
   * standard function that creates additional plug-in settings
   * стандартна функція яка створює додаткові настройки плагіна
   * 
   * @returns DOM elevet
   */
  renderSettings() {
    const viewWrapper = document.createElement('div');

    if (this.viewAudio.length <= 1) {
      return view;
    }

    this.viewAudio.forEach(view => {
      const selectTypeButton = document.createElement('span');

      selectTypeButton.classList.add(this._CSS.settingsButton);

      if (this.data.type === view.type) {
        selectTypeButton.classList.add(this._CSS.settingsButtonActive);
      }

      selectTypeButton.innerHTML = view.svg;

      selectTypeButton.dataset.viewAudio = view.type;


      this.api.tooltip.onHover(selectTypeButton, view.title, {
        placement: 'top',
      });

      selectTypeButton.addEventListener('click', () => {

        if (view.type === 'record') {
          this.data.type = 'record'
          this._data.url = ''

          this.setElement()
          this.api.toolbar.close()
          this.api.tooltip.hide(selectTypeButton)

        } else {
          this.data.type = 'download'
          this._data.url = ''

          this.setElement()
          this.api.toolbar.close()
          this.api.tooltip.hide(selectTypeButton)
        }
      });

      viewWrapper.appendChild(selectTypeButton);
    });

    return viewWrapper;
  }

  render() {
    return this.element;
  }

  save(e) {
    this.element = e
    return this.data;
  }

  clear() {
    this.data.url = null
    this.data.id = null
    this.setElement()
  }

  /**
   * Змінює DOM едемент
   * Changes the DOM element
   */
  setElement() {
    this.element.removeChild(this.element.firstChild);
    this.element.append(this.createElement().firstChild)
  }

  /**
   * 
   * @param {file} file - аудіофайл | audio file
   * @returns url файлу в форматі base64 | url file in base64 format
   */
  renderUrl(file) {
    let reader = new FileReader(),
      $this = this,
      url = null;


    reader.readAsDataURL(file);
    reader.onload = function (fileBlob) {
      url = fileBlob.target.result;

      $this._data.url = url
      $this.setElement()
    };
    return url
  }

  /**
   * записує файл на сервер
   * writes the file to the server
   * 
   * @param {file} file - аудіофайл | audio file
   */
  async saveServer(file) {
    this.element.firstChild.classList.add('cdx-loader')
    try {
      let data = null
      if (this._settings.saveServer) {
        data = await this._settings.saveServer(file)
      } else {
        let formData = new FormData()
        formData.append('file', file)
        data = await axios.post(this._settings.route, formData)
      }

      this.data.url = data.data.url
      this.data.id = data.data.id
      this.setElement()
    } catch (e) {
      console.error(e)
    } finally {
      this.element.firstChild.classList.remove('cdx-loader')
    }
  }

  /**
   * Видаляє файл з сервера
   * Deletes the file from the server
   */
  async deleteServer() {
    this.element.firstChild.classList.add('cdx-loader')
    try {
      if (this._settings.deleteServer) {
        await this._settings.deleteServer()
      } else {
        await axios.delete(this._settings.routeDelete + this.data.id)
      }

      this.clear()
    } catch (e) {
      if (e.status === 404) {
        this.clear()
      }
      console.error(e)
    } finally {
      this.element.firstChild.classList.remove('cdx-loader')
    }
  }

  async record() {
    /**
     * запит на доступдо мікрофону та опис подій пулучення файлу і зупинки запису
     */
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });
    let voiceBlob = null,
      mediaRecorder = null;

    mediaRecorder = new MediaRecorder(stream, {});

    await mediaRecorder.addEventListener("dataavailable", (event) => {
      voiceBlob = event.data;
    });
    await mediaRecorder.addEventListener("stop", () => {
      this._data.file = new File(
        [voiceBlob],
        `fileName.${voiceBlob.type.slice(6, 10)}`
      );
      this.renderUrl(voiceBlob);
    });

    /**
     * створуння DOM елементів та подій для запису звуку
     */
    let audio = this.element.firstChild,
      record = this.DOMCreate('div', 'audio__record'),
      play = this.DOMCreate('button', this._CSS.button, {
        id: 'record-play',
        type: 'button',
        innerHTML: `${ObjectSVG.record} Record`
      }),
      stop = this.DOMCreate('button', this._CSS.button, {
        id: 'record-stop',
        type: 'button',
        innerHTML: `${ObjectSVG.stop} Stop`
      });

    record.append(play)
    play.addEventListener('click', (e) => {
      console.log(record)
      mediaRecorder.start()
      record.removeChild(play)
      record.appendChild(stop)
    });

    stop.addEventListener('click', (e) => {
      mediaRecorder.stop()
    });
    audio.appendChild(record)
    this.element.append(audio)
  }

  /**
   * створює DOM для запису та прослуховування аудіо
   * creates a DOM to record and listen to audio
   * 
   * @returns {wrapper}
   */
  createRecordListening() {
    let wrapper = this.DOMCreate('div', 'audio__recurd-wrapper'),
      save = this.DOMCreate('button', 'audio__recurd-save', {
        type: 'button',
        innerHTML: ObjectSVG.save
      }),
      clear = this.DOMCreate('button', 'audio__recurd-clear', {
        type: 'button',
        innerHTML: ObjectSVG.clear
      });

    save.addEventListener('click', (e) => {
      this.saveServer(this._data.file)
    })

    clear.addEventListener('click', (e) => {
      this._data.url = ''
      this.setElement()
    })

    wrapper.insertAdjacentHTML('afterbegin',
      `<audio src="${this._data.url}" controls type="audio/webm">
        Ваш браузер не поддерживает элемент <code>audio</code></a>.
      </audio>`
    )
    wrapper.append(save)
    wrapper.append(clear)

    console.log(wrapper)
    return wrapper
  }

  /**
   * створює та вертає потрібний DOM елемент враховуючи параметри data, _data
   * creates and returns the required DOM element taking into account the parameters data, _data
   * 
   * @returns {wrapper} обгортка блоку яка залишається незмінна | the wrapper of the block which remains unchanged
   */
  createElement() {
    const wrapper = this.DOMCreate("div", 'cdx-block')
    const audio = this.DOMCreate("div", 'audio')

    if (this.data.url) {
      let clear = this.DOMCreate('button', 'audio__clear', {
        type: 'button',
        innerHTML: ObjectSVG.clear
      });

      audio.insertAdjacentHTML('afterbegin',
        `<audio controls>
          <source src="${this.data.url}" type="audio/ogg" />
          <source src="${this.data.url}" type="audio/webm" />
          <source src="${this.data.url}" type="audio/mpeg" />
          <source src="${this.data.url}" type="audio/mp3" />
          Ваш браузер не поддерживает элемент <code>audio</code> <a href="${this.data.url}">Скачать файл</a>.
        </audio>`
      );
      clear.addEventListener('click', (e) => {
        this.deleteServer()
      })

      audio.append(clear)
    } else if (this._data.url) {
      audio.append(this.createRecordListening())
    } else {
      if (this.data.type === 'record') {
        this.record()
      } else {
        audio.insertAdjacentHTML('afterbegin',
          `<label class="audio__download">
            Загрузить аудио
            <input id="input-audio" type="file" accept="audio/*" style="display: none">
          </label>`)

        let inputAudio = audio.querySelector('#input-audio')
        inputAudio.addEventListener('input', (e) => {
          this.saveServer(e.target.files[0])
        });
      }
    }
    wrapper.append(audio)
    return wrapper;
  }


  /**
   * створює DOM елемент
   * creates a DOM element
   * 
   * @param {string} tagName - Ім'я тегу | Tag name
   * @param {string} classNames - Ім'я класу або декілька імен | Class name or multiple names
   * @param {object} attributes - Об'єкт де ключ це назва атрибуту а значення це значення атребуту |
   * An object where the key is the name of the attribute and the value is the value of the attribute
   * @returns Вертає зібраний DOM елемент | Returns the assembled DOM element
   */
  DOMCreate(tagName, classNames = null, attributes = {}) {
    const el = document.createElement(tagName);

    if (Array.isArray(classNames)) {
      el.classList.add(...classNames);
    } else if (classNames) {
      el.classList.add(classNames);
    }

    for (const attrName in attributes) {
      el[attrName] = attributes[attrName];
    }

    return el;
  };

  get viewAudio() {
    const availableView = [{
        type: 'download',
        svg: `<svg version="1.1" width="17" height="17" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
            <path d="M412.4,117.1l-73.7-73.7C330.8,35.4,320,31,308.8,31H129.4c-23.3,0-42.2,18.9-42.2,42.2v365.6c0,23.3,18.9,42.2,42.2,42.2
            h253.1c23.3,0,42.2-18.9,42.2-42.2V146.9C424.7,135.7,420.3,125,412.4,117.1z M379.2,143.5h-66.9V76.6L379.2,143.5z M129.4,438.8
            V73.2h140.6v91.4c0,11.6,9.4,21.1,21.1,21.1h91.4v253.1H129.4z M256,372c0,9.4-11.4,14.1-18,7.5l-31.2-31.6h-24.6
            c-5.8,0-10.5-4.7-10.5-10.5v-49.2c0-5.8,4.7-10.5,10.5-10.5h24.6L238,245c6.6-6.6,18-1.9,18,7.5V372z M292.2,330.6
            c8-8.2,8-21.2,0-29.4c-19.5-20,10.8-49.4,30.2-29.4c23.9,24.6,23.9,63.7,0,88.2C303.3,379.7,272.4,350.9,292.2,330.6L292.2,330.6z"
          />
        </svg>`,
        title: 'Download',
      },
      {
        type: 'record',
        svg: '<svg width="17" height="17" viewBox="0 0 14 21" ><path d="M13.2357 10.8457C13.2357 10.4257 12.9329 10.1045 12.537 10.1045C12.141 10.1045 11.8382 10.4257 11.8382 10.8457C11.8382 13.7363 9.62536 16.0833 6.9001 16.0833C4.17484 16.0833 1.96202 13.7363 1.96202 10.8457C1.96202 10.4257 1.65922 10.1045 1.26324 10.1045C0.86726 10.1045 0.564453 10.4257 0.564453 10.8457C0.564453 14.2798 2.98691 17.1704 6.20131 17.541V19.5174H3.6624C3.26642 19.5174 2.96361 19.8386 2.96361 20.2586C2.96361 20.6786 3.26642 20.9998 3.6624 20.9998H10.1378C10.5338 20.9998 10.8366 20.6786 10.8366 20.2586C10.8366 19.8386 10.5338 19.5174 10.1378 19.5174H7.59888V17.541C10.8133 17.1704 13.2357 14.2798 13.2357 10.8457Z"></path> <path d="M6.89966 0C4.75673 0 3.00977 1.85294 3.00977 4.12588V10.8212C3.00977 13.1188 4.75673 14.9471 6.89966 14.9718C9.0426 14.9718 10.7896 13.1188 10.7896 10.8459V4.12588C10.7896 1.85294 9.0426 0 6.89966 0Z"></path></svg>',
        title: 'record',
      },
    ];

    return availableView;
  }

  static get toolbox() {
    return {
      icon: '<svg enable-background="new 0 0 24 24" weight="17px" height="17px" id="Layer_1" version="1.1" viewBox="0 0 24 24" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clip-rule="evenodd" d="M19.779,3.349l-1.111,1.664C20.699,6.663,22,9.179,22,12    c0,2.822-1.301,5.338-3.332,6.988l1.111,1.663C22.345,18.639,24,15.516,24,12C24,8.485,22.346,5.362,19.779,3.349z M17.55,6.687    l-1.122,1.68c0.968,0.913,1.58,2.198,1.58,3.634s-0.612,2.722-1.58,3.635l1.122,1.68C19.047,16.03,20,14.128,20,12    C20,9.873,19.048,7.971,17.55,6.687z M12,1c-1.177,0-1.533,0.684-1.533,0.684S7.406,5.047,5.298,6.531C4.91,6.778,4.484,7,3.73,7    H2C0.896,7,0,7.896,0,9v6c0,1.104,0.896,2,2,2h1.73c0.754,0,1.18,0.222,1.567,0.469c2.108,1.484,5.169,4.848,5.169,4.848    S10.823,23,12,23c1.104,0,2-0.895,2-2V3C14,1.895,13.104,1,12,1z" fill-rule="evenodd"/></svg>',
      title: 'Audio',
    };
  }
}

export default Audio;
