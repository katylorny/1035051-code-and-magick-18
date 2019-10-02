'use strict';
(function () {
  window.util = {
    ESC_KEYCODE: 27,
    ENTER_KEYCODE: 13,
    setup: document.querySelector('.setup'),

    getRandomNumber: function (max) {
      return Math.floor(max * Math.random());
    },
    // выбирает случайное число от 0 до max

    getRandomMinMax: function (min, max) {
      return min + Math.floor(Math.random() * (max - min + 1));
    },
    // находит случайное целое число в промежутке от min до max

    getRandomArrayElement: function (arr) {
      return arr[window.util.getRandomMinMax(0, arr.length - 1)];
    },
    // выбирает случайный элемент из массива
  };
})();
