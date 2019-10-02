'use strict';

(function () {

  var onEscPress = function (evt) {
    if (evt.keyCode === window.util.ESC_KEYCODE) {
      window.util.setup.classList.add('hidden');
    }
  };

  var openPopup = function () {
    window.util.setup.classList.remove('hidden');
    document.addEventListener('keydown', onEscPress);
  };
  console.log(document.querySelector('.setup'));
  var closePopup = function () {
    console.log(document.querySelector('.setup'));
    document.querySelector('.setup').classList.add('hidden');
    console.log(document.querySelector('.setup'));
    document.removeEventListener('keydown', onEscPress);
  };

  window.util.setup.addEventListener('click', function () {
    openPopup();
  });

  window.setupE.setupClose.addEventListener('click', function () {
    console.log(window.setupE.setupClose);
    closePopup();
  });

  window.setupE.setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      openPopup();
    }
  });

  window.setupE.setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      closePopup();
    }
  });

  window.setupE.setupUserName.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ESC_KEYCODE) {
      event.stopPropagation();
    }
  });
})();
