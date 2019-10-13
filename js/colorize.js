'use strict';

(function () {
  var wizardCoat = window.setup.setupWizard.querySelector('.wizard-coat');
  var coatInput = window.setup.setupPopup.querySelector('input[name="coat-color"]');
  var wizardEyes = window.setup.setupWizard.querySelector('.wizard-eyes');
  var eyesInput = window.setup.setupPopup.querySelector('input[name="eyes-color"]');
  var wizardFireball = window.setup.setupPopup.querySelector('.setup-fireball-wrap');
  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var fireballInput = window.setup.setupPopup.querySelector('input[name="fireball-color"]');

  var eyesColor = wizardEyes.style.fill;
  var coatColor = wizardCoat.style.fill;

  var compareNames = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  };

  wizardEyes.style.fill = 'black';

  var changes = {
    onEyesChange: window.debounce(function (color) {
      eyesColor = color;
      window.setup.updateWizards();
    }),

    onCoatChange: window.debounce(function (color) {
      coatColor = color;
      window.setup.updateWizards();
    }),
  };

  wizardCoat.addEventListener('click', function () {
    var color = window.util.getRandomArrayElement(window.setup.coatColors);
    wizardCoat.style = 'fill: ' + color;
    coatInput.value = color;
    changes.onCoatChange(color);

  });

  wizardEyes.addEventListener('click', function () {
    var color = window.util.getRandomArrayElement(window.setup.eyesColors);
    wizardEyes.style = 'fill: ' + color;
    eyesInput.value = color;
    changes.onEyesChange(color);
  });

  wizardFireball.addEventListener('click', function () {
    var color = window.util.getRandomArrayElement(fireballColors);
    wizardFireball.style = 'background-color: ' + color;
    fireballInput.value = color;
  });

  window.colorize = {
    getRank: getRank,
    compareNames: compareNames,
  };
})();
