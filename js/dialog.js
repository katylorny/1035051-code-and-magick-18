'use strict';

(function () {

  var onEscPress = function (evt) {
    if (evt.keyCode === window.util.ESC_KEYCODE) {
      window.setup.setupPopup.classList.add('hidden');
    }
  };

  var openPopup = function () {
    window.setup.setupPopup.classList.remove('hidden');
    document.addEventListener('keydown', onEscPress);

  };

  var closePopup = function () {
    document.querySelector('.setup').classList.add('hidden');
    document.removeEventListener('keydown', onEscPress);
  };

  window.setup.setupOpen.addEventListener('click', function () {
    openPopup();
  });

  window.setup.setupClose.addEventListener('click', function () {
    closePopup();
  });

  window.setup.setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      openPopup();
    }
  });

  window.setup.setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      closePopup();
    }
  });

  window.setup.setupUserName.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ESC_KEYCODE) {
      event.stopPropagation();
    }
  });

  var dialogHandler = window.setup.setupPopup.querySelector('.upload');

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY,
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY,
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY,
      };

      window.setup.setupPopup.style.left = (window.setup.setupPopup.offsetLeft - shift.x) + 'px';
      window.setup.setupPopup.style.top = (window.setup.setupPopup.offsetTop - shift.y) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }

    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
