'use strict';

(function () {
  window.backend = {
    makeRequest: function (onLoad, onError, request) {
      request.responseType = 'json';
      request.addEventListener('load', function () {
        if (request.status === 200) {
          onLoad(request.response);
        } else {
          onError('Статус ответа: ' + request.status + ' ' + request.statusText);
        }
      });

      request.addEventListener('error', function () {
        onError('Нет соединения с сервером');
      });

      request.addEventListener('timeout', function () {
        onError('Запрос не выполнен за ' + request.timeout + ' мс');
      });

      request.timeout = 10000;
    },

    load: function (onLoad, onError) { // загрузка с сервера
      var URL = 'https://js.dump.academy/code-and-magick/data';
      var xhr = new XMLHttpRequest();
      window.backend.makeRequest(onLoad, onError, xhr);
      xhr.open('GET', URL);
      xhr.send();
    },

    save: function (data, onLoad, onError) { // загрузка на сервер
      var URL = 'https://js.dump.academy/code-and-magick';
      var xhr = new XMLHttpRequest();
      window.backend.makeRequest(onLoad, onError, xhr);
      xhr.open('POST', URL);
      xhr.send(data);
    },
  };
})();
